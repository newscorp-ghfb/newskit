version: 2.1

orbs:
  slack: circleci/slack@3.4.1
  aws-cli: circleci/aws-cli@2.0.0
  github-cli: circleci/github-cli@1.0.4

slack_status: &slack_status
  channel: '#nuk-pp-newskit'
  mentions: 'newskitdevs'
  fail_only: true
  only_for_branches: 'develop,main'

working_directory: &working_directory
  working_directory: ~/project

cypress_defaults: &cypress_defaults
  <<: *working_directory
  environment:
    CYPRESS_CACHE_FOLDER: '~/project/.cache/Cypress'

# ========== APPLITOOLS ENVIRONMENT VARIABLES START ==========

applitools_defaults: &applitools_defaults
  command: |
    export APPLITOOLS_BATCH_ID=`echo $CIRCLE_SHA1`
    export APPLITOOLS_PARENT_BRANCH_NAME=develop
    export APPLITOOLS_API_KEY=${APPLITOOLS_API_KEY}
    export APPLITOOLS_DONT_CLOSE_BATCHES=true
    echo "export APPLITOOLS_BATCH_ID=${APPLITOOLS_BATCH_ID}" >> $BASH_ENV
    echo "export APPLITOOLS_API_KEY=${APPLITOOLS_API_KEY}" >> $BASH_ENV
# ========== APPLITOOLS ENVIRONMENT VARIABLES END ==========
executors:
  # A basic image with just raw Alpine on it that you can run commands on
  base:
    docker:
      - image: cimg/base:latest

  flux-deploy:
    docker:
      - image: nukengprodservice/flux-k8s:latest

  kubectl-deploy:
    docker:
      - image: nukengprodservice/kubectl:0.1.51

  terraform:
    docker:
      - image: hashicorp/terraform:0.12.28

  python:
    docker:
      - image: circleci/python:3.7

  node:
    docker:
      - image: circleci/node:16.13.0

  node-large:
    docker:
      - image: circleci/node:16.13.0
    resource_class: large
    environment:
      NODE_OPTIONS: --max_old_space_size=7680

  node-xlarge:
    docker:
      - image: circleci/node:16.13.0
    resource_class: xlarge
    environment:
      NODE_OPTIONS: --max_old_space_size=15872

  cypress:
    docker:
      - image: cypress/browsers:node16.5.0-chrome94-ff93
    resource_class: large

  java:
    docker:
      - image: circleci/openjdk:8u252-jdk-buster

commands:
  terraform_init:
    description: Run Terraform Init
    parameters:
      package:
        type: string
      terraform_arg:
        description: provide terraform arguments
        type: string
        default: ''
    steps:
      - run:
          name: Terraform init
          command: |
            source $BASH_ENV
            cd terraform/<< parameters.package >>
            terraform init << parameters.terraform_arg >>

  terraform_plan:
    description: Run Terraform Plan
    parameters:
      package:
        type: string
      terraform_arg:
        description: provide terraform arguments
        type: string
        default: ''
    steps:
      - run:
          name: Terraform plan
          command: |
            source $BASH_ENV
            cd terraform/<< parameters.package >>
            terraform plan -out=tfplan -input=false << parameters.terraform_arg >>

  terraform_apply:
    description: Run Terraform Apply
    parameters:
      package:
        type: string
    steps:
      - run:
          name: Terraform apply
          command: |
            source $BASH_ENV
            cd terraform/<< parameters.package >>
            terraform apply -lock=false -input=false tfplan

  terraform_force_apply:
    description: Run Terraform Apply
    parameters:
      package:
        type: string
    steps:
      - run:
          name: Terraform forced apply
          command: |
            source $BASH_ENV
            cd terraform/<< parameters.package >>
            terraform apply -auto-approve

  aws_assume_role:
    description: Assume AWS role
    parameters:
      aws_access_key_id:
        description: AWS Access Key Id
        type: string
        default: '${AWS_ACCESS_KEY_ID}'
      aws_secret_key:
        description: AWS Secret Key
        type: string
        default: '${AWS_SECRET_ACCESS_KEY}'
      aws_assume_role_arn:
        description: AWS ARN For Assume Role
        type: string
        default: '${AWS_ASSUME_ROLE_ARN}'
      job_type:
        description: The job type to be used
        type: string
        default: 'default'
    steps:
      - run:
          name: Assume role
          command: |
            export AWS_ACCESS_KEY_ID=<< parameters.aws_access_key_id >>
            export AWS_SECRET_ACCESS_KEY=<< parameters.aws_secret_key >>
            export temp_role=$(aws sts assume-role \
                    --role-arn "<< parameters.aws_assume_role_arn >>" \
                    --role-session-name "circle-ci-assume")
            export AWS_ACCESS_KEY_ID_TEMP=$(echo $temp_role | jq .Credentials.AccessKeyId | xargs)
            export AWS_SECRET_ACCESS_KEY_TEMP=$(echo $temp_role | jq .Credentials.SecretAccessKey | xargs)
            export AWS_SESSION_TOKEN_TEMP=$(echo $temp_role | jq .Credentials.SessionToken | xargs)
            echo "export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID_TEMP" >> $BASH_ENV
            echo "export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY_TEMP" >> $BASH_ENV
            echo "export AWS_SESSION_TOKEN=$AWS_SESSION_TOKEN_TEMP" >> $BASH_ENV
            source $BASH_ENV
            cat $BASH_ENV | grep AWS_ACCESS_KEY_ID >> assume_role_creds_<< parameters.job_type >>.txt
            cat $BASH_ENV | grep AWS_SECRET_ACCESS_KEY >> assume_role_creds_<< parameters.job_type >>.txt
            cat $BASH_ENV | grep AWS_SESSION_TOKEN >> assume_role_creds_<< parameters.job_type >>.txt
      - persist_to_workspace:
          root: ./
          paths:
            - assume_role_creds_<< parameters.job_type >>.txt

  aws_assume_role_file:
    description: Assume AWS role from the workspace file
    parameters:
      job_type:
        description: The job type to be used
        type: string
        default: 'default'
    steps:
      - run:
          name: Assume role file
          command: |
            cat assume_role_creds_<< parameters.job_type >>.txt >> $BASH_ENV
            source $BASH_ENV

  run_only_on_folder_change:
    description: checks whether there is change on the folder in last two commits.
    parameters:
      folder:
        description: Path to folder
        type: string
    steps:
      - run:
          name: Skip if there are no changes
          command: |
            if git rev-parse --abbrev-ref HEAD | egrep -q '^release.*'; then
              currentTag=$(git tag --sort=-version:refname |  sed '1q;d')
              previousTag=$(git tag --sort=-version:refname |  sed '2q;d')
              export CHANGES=$(git diff --name-only $previousTag $currentTag << parameters.folder >> 2>&1)
            else
              if [ -n "<< pipeline.git.base_revision >>" ]; then
                export CHANGES=$(git diff --name-only << pipeline.git.base_revision >> << pipeline.git.revision >> << parameters.folder >> 2>&1)
              else
               export CHANGES=$(git diff --name-only HEAD~1 << pipeline.git.revision >> << parameters.folder >> 2>&1)
              fi
            fi
            if [ -n "$CHANGES" ]; then
              echo "Terraform << parameters.folder >> changed"
            else
              echo "Skipping as there are no changes to << parameters.folder >>"
              circleci-agent step halt
            fi

  run_test_visual_changes:
    description: 'Run the Applitool tests for docs visual changes'
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - run:
          name: 'Setup Applitools environment variables'
          <<: *applitools_defaults
      - run:
          name: Run Applitools Docs Site Visual Tests
          command: make e2e_visual_test_docs
      - run:
          name: Close the Applitools Batch
          command: curl --request DELETE --dump-header - "https://eyesapi.applitools.com/api/sessions/batches/$APPLITOOLS_BATCH_ID/close/bypointerid/?apiKey=$APPLITOOLS_API_KEY"
      - store_artifacts:
          path: cypress/screenshots
      - store_artifacts:
          path: cypress/videos
      - slack/status:
          <<: *slack_status

jobs:
  can_i_merge_checker:
    executor: node
    steps:
      - run:
          name: 'Waiting for "no_visual_changes" or "test_visual_docs"'
          command: |
            if [[ $(curl --location --request GET "https://circleci.com/api/v2/workflow/${CIRCLE_WORKFLOW_ID}/job" --header "Circle-Token: ${CIRCLECI_BASE_AUTH}"| jq -r '.items[]|select(.name == "no_visual_changes" or .name == "test_visual_docs" or .name == "test_visual_docs_2")|.status' | grep -c "success") -gt 0 ]]
            then 
              echo "Passed!"
            else 
              echo "Failed!"
              exit 1
            fi

  install_deps:
    <<: *working_directory
    executor: node-large
    steps:
      - checkout
      - restore_cache:
          keys:
            - yarn-build-v1-{{ checksum "yarn.lock" }}
            - yarn-build-v1-
      - run:
          name: Dependencies Install
          command: make install
      - save_cache:
          key: yarn-build-v1-{{ checksum "yarn.lock" }}
          paths:
            - ~/.cache
      - persist_to_workspace:
          root: ./
          paths:
            - node_modules/*
            - src/version-number.json
      - slack/status:
          <<: *slack_status

  install_cypress:
    <<: *cypress_defaults
    executor: cypress
    steps:
      - checkout
      - restore_cache:
          keys:
            - v1-cypress-{{ checksum "yarn.lock" }}
      - attach_workspace:
          at: ~/project
      - run:
          name: install cypress
          command: make install_cypress
      - save_cache:
          key: v1-cypress-{{ checksum "yarn.lock" }}
          paths:
            - ~/.cache
      - persist_to_workspace:
          root: ~/project
          paths:
            - .cache
      - slack/status:
          <<: *slack_status

  build_icons:
    <<: *working_directory
    executor: node
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - run:
          name: Build
          command: make build_icons
      - persist_to_workspace:
          root: ./
          paths:
            - src/icons/*
      - slack/status:
          <<: *slack_status

  build_components:
    <<: *working_directory
    executor: node-large
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - run:
          name: Build
          command: make build_components
      - persist_to_workspace:
          root: ./
          paths:
            - dist/*
      - slack/status:
          <<: *slack_status

  build_storybook:
    <<: *working_directory
    executor: node
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - run:
          name: Build
          command: make build_storybook
      - persist_to_workspace:
          root: ./
          paths:
            - dist-storybook/*
      - slack/status:
          <<: *slack_status

  build_docs:
    <<: *working_directory
    executor: node-xlarge
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - run:
          name: Build
          command: |
            export SITE_ENV=${SITE_ENV}
            export SITE_BASE_URL=${SITE_BASE_URL}
            make build_docs
      - persist_to_workspace:
          root: ./
          paths:
            - public/*
      - slack/status:
          <<: *slack_status

  build_docs_pr_with_no_base_url:
    <<: *working_directory
    executor: node-xlarge
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - run:
          name: Build
          command: |
            export SITE_ENV=${SITE_ENV}
            make build_docs_pr_with_no_base_url
      - persist_to_workspace:
          root: ./
          paths:
            - public/*
      - slack/status:
          <<: *slack_status

  build_test_e2e:
    <<: *working_directory
    executor: node-xlarge
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - run:
          name: Build E2E Tests
          command: make e2e_test_build
      - persist_to_workspace:
          root: ./
          paths:
            - e2e/dist/*
            - cypress/config/a11y-components.json
      - slack/status:
          <<: *slack_status

  test_unit_comps:
    <<: *working_directory
    executor: node-large
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - run:
          name: Unit Testing
          command: make unit_test_comps
          environment:
            JEST_JUNIT_OUTPUT_DIR: ./reports/junit/
      - store_test_results:
          path: ./reports/junit/
      - store_artifacts:
          path: ./reports/junit
      - slack/status:
          <<: *slack_status

  test_unit_docs:
    <<: *working_directory
    executor: node-large
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - run:
          name: Unit Testing
          command: make unit_test_docs
          environment:
            JEST_JUNIT_OUTPUT_DIR: ./reports/junit/
      - store_test_results:
          path: ./reports/junit/
      - store_artifacts:
          path: ./reports/junit
      - slack/status:
          <<: *slack_status

  lint:
    <<: *working_directory
    executor: node
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - run:
          name: Lint
          command: make lint
      - slack/status:
          <<: *slack_status

  test_broken_links_docs:
    <<: *working_directory
    executor: node
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - run:
          name: Broken Links
          command: make check_broken_links_docs
      - slack/status:
          <<: *slack_status

  init_aws:
    parameters:
      job_type:
        type: string
        default: 'default'
    <<: *working_directory
    executor: python
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - run:
          name: Install aws cli
          command: sudo pip install awscli
      - aws_assume_role:
          job_type: << parameters.job_type >>

  deploy_terraform:
    parameters:
      package:
        type: string
      apply:
        type: boolean
        default: true
      tf_env:
        type: boolean
        default: true
      environment:
        type: string
        default: ''
    <<: *working_directory
    executor: terraform
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - run_only_on_folder_change:
          folder: ./terraform/<< parameters.package >>
      - aws_assume_role_file
      - when:
          condition: << parameters.tf_env >>
          steps:
            - terraform_init:
                package: << parameters.package >>
                terraform_arg: -backend-config="key=product-platforms/newskit/<< parameters.package >>/<< parameters.environment >>/terraform.tfstate"
            - terraform_plan:
                package: << parameters.package >>
                terraform_arg: -var-file=<< parameters.environment >>.tfvars
      - unless:
          condition: << parameters.tf_env >>
          steps:
            - terraform_init:
                package: << parameters.package >>
                terraform_arg: -backend-config="key=product-platforms/newskit/<< parameters.package >>/terraform.tfstate"
            - terraform_plan:
                package: << parameters.package >>
      - when:
          condition: << parameters.apply >>
          steps:
            - terraform_apply:
                package: << parameters.package >>

  test_visual_comps:
    <<: *working_directory
    executor: node-large
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - run:
          name: Install Headless Chrome dependencies
          command: >
            sudo apt-get update && sudo apt-get install -yq gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libgbm-dev libappindicator1 libnss3 lsb-release xdg-utils wget
      - run:
          name: 'Setup Applitools environment variables'
          <<: *applitools_defaults
      - run:
          name: Run Applitools Storybook Component Tests
          command: make comps_visual_test
      - run:
          name: Close the Applitools Batch
          command: curl --request DELETE --dump-header - "https://eyesapi.applitools.com/api/sessions/batches/$APPLITOOLS_BATCH_ID/close/bypointerid/?apiKey=$APPLITOOLS_API_KEY"
      - slack/status:
          <<: *slack_status

  test_visual_docs:
    <<: *cypress_defaults
    executor: cypress
    steps:
      - run_test_visual_changes

  test_visual_docs_2:
    <<: *cypress_defaults
    executor: cypress
    steps:
      - run_test_visual_changes

  test_e2e_comps:
    <<: *cypress_defaults
    executor: cypress
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - run:
          name: Run Component Tests
          command: make e2e_test_comps
      - store_artifacts:
          path: cypress/screenshots
      - store_artifacts:
          path: cypress/videos
      - slack/status:
          <<: *slack_status

  test_e2e_docs:
    <<: *cypress_defaults
    executor: cypress
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - run:
          name: Run Docs Site Functional Tests
          command: |
            make e2e_test_docs
      - store_artifacts:
          path: cypress/screenshots
      - store_artifacts:
          path: cypress/videos
      - slack/status:
          <<: *slack_status

  create_release_candidate:
    <<: *working_directory
    executor: node
    steps:
      - checkout
      - github-cli/setup
      - run:
          name: Set github identity
          command: make set_git_identity
      - run:
          name: bump version
          command: make create_release_candidate
      - run:
          name: export version
          command: |
            export VERSION=$(jq -r .version package.json)
            echo "export VERSION=${VERSION}" >> $BASH_ENV
      - slack/status:
          <<: *slack_status

  publish_npm:
    parameters:
      publish_dev:
        type: boolean
        default: false
    executor: node
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - run:
          name: Add NPM login credentionals
          command: echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc
      - run:
          name: Set github identity
          command: make set_git_identity
      - when:
          condition: << parameters.publish_dev >>
          steps:
            - run:
                name: Publish components to NPM
                command: make publish_npm_dev
      - unless:
          condition: << parameters.publish_dev >>
          steps:
            - run:
                name: Publish components to NPM
                command: make publish_npm
      - slack/status:
          <<: *slack_status

  build_push_docker_ecr:
    parameters:
      aws_region:
        description: AWS Region
        type: string
        default: '${AWS_DEFAULT_REGION}'
      aws_access_key_id:
        description: AWS Access Key Id
        type: string
        default: '${AWS_ACCESS_KEY_ID}'
      aws_secret_key:
        description: AWS Secret Key
        type: string
        default: '${AWS_SECRET_ACCESS_KEY}'
      aws_ecr_url:
        description: AWS Account URL
        type: string
        default: '${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com'
      aws_assume_role_arn:
        description: AWS ARN For Assume Role
        type: string
        default: '${AWS_ASSUME_ROLE_ARN}'
      ecr_repo:
        description: ECR REPO
        type: string
        default: '${AWS_RESOURCE_NAME_PREFIX}'
      docker_version:
        description: Docker Image Tag
        type: string
        default: 'dev'
    executor: node
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - setup_remote_docker:
          version: 20.10.7
      - run:
          name: Install python and pip
          command: |
            sudo apt-get update
            sudo apt-get install python-pip python-dev
      - run:
          name: Install awscli
          command: sudo pip install awscli
      - run:
          name: Assume role and build docker images
          command: |
            currentBranch=$(git symbolic-ref --short -q HEAD)
            if [ << parameters.docker_version >> = release ]; then
              export DOCKER_TAG=$(node -p "require('./package.json').version")
            elif [ $currentBranch = develop ]; then    
              export DOCKER_TAG=$(node -p "require('./package.json').version")-$CIRCLE_SHA1
            else 
              export DOCKER_TAG=${CIRCLE_SHA1}
            fi
            export AWS_ACCESS_KEY_ID=<< parameters.aws_access_key_id >>
            export AWS_SECRET_ACCESS_KEY=<< parameters.aws_secret_key >>
            export DOCKER_REGISTRY_URL=<< parameters.aws_ecr_url >>
            export DOCKER_REPO=<< parameters.ecr_repo >>
            export temp_role=$(aws sts assume-role \
                    --role-arn "<< parameters.aws_assume_role_arn >>" \
                    --role-session-name "circle-ci-assume")
            export AWS_ACCESS_KEY_ID=$(echo $temp_role | jq .Credentials.AccessKeyId | xargs)
            export AWS_SECRET_ACCESS_KEY=$(echo $temp_role | jq .Credentials.SecretAccessKey | xargs)
            export AWS_SESSION_TOKEN=$(echo $temp_role | jq .Credentials.SessionToken | xargs)
            aws ecr get-login --no-include-email --region << parameters.aws_region >> | /bin/bash
            make build_docker
            make push_docker
      - slack/status:
          <<: *slack_status

  push_s3:
    executor: aws-cli/default #TODO: refactor other steps to use this orb it's much cleaner, install and setup can then be moved into the shared aws step
    steps:
      - checkout
      - attach_workspace:
          at: ~/project
      - aws-cli/install
      - aws-cli/setup
      - run:
          name: Upload to s3
          command: |
            export s3Path_docs=$(node scripts/s3-pr-branch-naming.js ${CIRCLE_BRANCH} 's3://ncu-newskit-docs/')
            aws s3 cp public $s3Path_docs --recursive
            export s3Path_storybook=$(node scripts/s3-pr-branch-naming.js ${CIRCLE_BRANCH} 's3://ncu-newskit-docs/' 'storybook')
            aws s3 cp dist-storybook $s3Path_storybook --recursive
      - slack/status:
          <<: *slack_status

  post_pr_env_url_to_github_pr:
    executor: node
    steps:
      - checkout
      - github-cli/setup
      - run:
          name: Doc site link
          command: |
            if gh pr view -c | grep "Documentation Site" ; 
            then
              circleci-agent step halt
            else
              gh pr comment --body "You can preview these changes on: 
              Documentation Site: $(node scripts/pr_comment_link.js ${CIRCLE_BRANCH} 'http://ncu-newskit-docs.s3-website-eu-west-1.amazonaws.com/' 'docs') 
              Storybook: $(node scripts/pr_comment_link.js ${CIRCLE_BRANCH} 'http://ncu-newskit-docs.s3-website-eu-west-1.amazonaws.com/' 'storybook')" 
            fi
      - slack/status:
          <<: *slack_status

  eks_flux_deploy:
    # This one does a Flux deployment (writes to a Flux repo), using the flux-k8s tool you can find in https://github.com/newscorp-ghfb/ncu-circle-pipeline
    parameters:
      environment:
        type: string
      substitution_dir:
        type: string
        default: 'eks/manifests'
      flux_repo_url:
        type: string
        default: 'git@github.com:newscorp-ghfb/ncu-flux-newskit-site.git'
      flux_repo_name:
        type: string
        default: 'ncu-flux-newskit-site'
    executor: flux-deploy
    steps:
      - setup_remote_docker:
          version: 20.10.7
      - checkout
      - run:
          name: Push config to flux repo
          command: |
            apk add --update npm
            currentBranch=$(git symbolic-ref --short -q HEAD)            
            if [ $currentBranch = develop ];
            then
              export DOCKER_TAG=$(node -p "require('./package.json').version")-$CIRCLE_SHA1
            else
              export DOCKER_TAG=$(node -p "require('./package.json').version")
            fi
            config_values=eks/values/product-platforms-values-<< parameters.environment >>.yaml
            out_dir=product-platforms-<< parameters.environment >>
            flux_repo_target=<< parameters.environment >>/eks
            git config --global user.email "ncu-product-platforms@news.co.uk"
            git config --global user.name "Product Platforms Service"
            flux-generate "${CIRCLE_SHA1}" $config_values << parameters.substitution_dir >> $out_dir
            flux-commit -u << parameters.flux_repo_url >> -n << parameters.flux_repo_name >> -d $out_dir -t $flux_repo_target -m "${CIRCLE_SHA1}_$out_dir"
      - slack/status:
          <<: *slack_status

  eks_kubectl_deploy:
    parameters:
      environment:
        type: string
        description: Deplyoment environment
      aws_region:
        description: AWS Region
        type: string
        default: '${AWS_DEFAULT_REGION}'
      aws_access_key_id:
        description: AWS Access Key Id
        type: string
        default: '${AWS_ACCESS_KEY_ID}'
      aws_secret_key:
        description: AWS Secret Key
        type: string
        default: '${AWS_SECRET_ACCESS_KEY}'
      aws_assume_role_arn:
        description: AWS ARN For Assume Role
        type: string
        default: '${AWS_ASSUME_ROLE_ARN}'
    executor: kubectl-deploy
    steps:
      - checkout
      - setup_remote_docker:
          version: 20.10.7
      - run:
          name: Deploy to EKS
          command: |
            apk --no-cache add openssh git bash
            export GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=no"
            git config --global user.email "ncu-product-platforms@news.co.uk"
            git config --global user.name "Product Platforms Service"
            git clone git@github.com:newscorp-ghfb/ncu-flux-newskit-site.git flux
            export EKS_IAM_ROLE_DEV=<< parameters.aws_assume_role_arn >>
            export EKS_AWS_ACCESS_KEY_ID=<< parameters.aws_access_key_id >>
            export EKS_AWS_SECRET_ACCESS_KEY=<< parameters.aws_secret_key >>
            export AWS_DEFAULT_REGION=<< parameters.aws_region >>
            export CLUSTER_NAME=ceng-eks-<< parameters.environment >>
            export VERSION=$(jq -r .version package.json)
            echo "export VERSION=${VERSION}" >> $BASH_ENV

            nukubectl | grep "export AWS_" > auth.env
            export $(egrep -v '^#' auth.env | xargs)
            rm auth.env

            cd flux/<< parameters.environment >>/eks
            kubectl apply -f .
      - slack/status:
          <<: *slack_status

# ========== FILTERS START    ==========

only_develop: &only_develop
  filters:
    branches:
      only: develop

only_trigger_release: &only_trigger_release
  filters:
    branches:
      only: /trigger-release-.*/

only_release: &only_release
  filters:
    branches:
      only: /^release.*/

only_main: &only_main
  filters:
    branches:
      only: main

only_pr: &only_pr
  filters:
    branches:
      ignore:
        - develop
        - main
        - /trigger-release-.*/
        - /^release.*/

only_pr_and_develop: &only_pr_and_develop
  filters:
    branches:
      ignore:
        - main
        - /trigger-release-.*/
        - /^release.*/

only_pr_and_release: &only_pr_and_release
  filters:
    branches:
      ignore:
        - develop
        - main
        - /trigger-release-.*/

ignore_trigger_release: &ignore_trigger_release
  filters:
    branches:
      ignore:
        - /trigger-release-.*/

# ========== FILTERS END        ==========

# ========== REQUIREMENTS START ==========

require_dep: &require_dep
  requires:
    - install_deps

# ========== REQUIREMENTS END   ==========

workflows:
  build_and_deploy:
    jobs:
      # common jobs
      - install_deps:
          <<: *ignore_trigger_release
      - install_cypress:
          <<: *ignore_trigger_release
      - build_icons:
          <<: *ignore_trigger_release
          <<: *require_dep
      - build_components:
          <<: *ignore_trigger_release
          <<: *require_dep
          requires:
            - build_icons
      - build_storybook:
          <<: *ignore_trigger_release
          <<: *require_dep
          requires:
            - build_icons
      - build_test_e2e:
          <<: *ignore_trigger_release
          <<: *require_dep
          requires:
            - build_icons
      - lint:
          <<: *ignore_trigger_release
          <<: *require_dep
          requires:
            - build_icons
      - test_unit_comps:
          <<: *ignore_trigger_release
          <<: *require_dep
          requires:
            - build_icons
      - test_unit_docs:
          <<: *ignore_trigger_release
          <<: *require_dep
          requires:
            - build_icons
      - test_e2e_comps:
          <<: *ignore_trigger_release
          context: ncu-product-platforms-context
          requires:
            - build_test_e2e
            - install_cypress

      # PR jobs
      ## Visual changes approval jobs
      - build_docs_pr_with_no_base_url:
          <<: *only_pr
          <<: *require_dep
          context: ncu-product-platforms-context
          requires:
            - build_icons
      - test_broken_links_docs:
          <<: *only_pr
          name: test_broken_links_docs_pr
          context: ncu-product-platforms-context
          requires:
            - build_docs_pr_with_no_base_url
      - test_e2e_docs:
          <<: *only_pr
          name: test_e2e_docs_pr
          context: ncu-product-platforms-context
          requires:
            - build_docs_pr_with_no_base_url
            - install_cypress
      - approve_publish_npm_pr:
          type: approval
          <<: *only_pr
          requires:
            - build_components
            - lint
            - test_unit_comps
            - test_unit_docs
            - test_e2e_comps
            - test_e2e_docs_pr
      - publish_npm:
          <<: *only_pr
          name: publish_npm_pr
          context: ncu-product-platforms-context
          publish_dev: true
          requires:
            - approve_publish_npm_pr
      - no_visual_changes:
          <<: *only_pr
          type: approval
          requires:
            - build_storybook
      - docs_and_comps_visual_changes:
          <<: *only_pr
          type: approval
          requires:
            - build_storybook
      - docs_visual_changes:
          <<: *only_pr
          type: approval
          requires:
            - build_storybook
        # end visual changes approval jobs
      - test_visual_comps:
          <<: *only_pr
          context: ncu-product-platforms-context
          requires:
            - docs_and_comps_visual_changes
      - test_visual_docs:
          <<: *only_pr
          context: ncu-product-platforms-context
          requires:
            - build_docs_pr_with_no_base_url
            - install_cypress
            - test_visual_comps
      - test_visual_docs_2:
          <<: *only_pr
          context: ncu-product-platforms-context
          requires:
            - build_docs_pr_with_no_base_url
            - install_cypress
            - docs_visual_changes
      - can_i_merge_checker:
          <<: *only_pr
          context: ncu-product-platforms-context
          requires:
            - i_have_merged_applitools
      - i_have_merged_applitools:
          <<: *only_pr
          type: approval
      - init_aws:
          <<: *ignore_trigger_release
          context: ncu-product-platforms-context
      - deploy_terraform:
          <<: *only_pr
          name: deploy_terraform_dns_pr
          package: dns
          context: ncu-product-platforms-context
          apply: false
          environment: dev
          requires:
            - init_aws
      - deploy_terraform:
          <<: *only_pr
          name: deploy_terraform_ecr_pr
          package: ecr
          context: ncu-product-platforms-context
          apply: false
          tf_env: false
          requires:
            - init_aws
      - deploy_terraform:
          <<: *only_pr
          name: deploy_terraform_s3_pr
          package: s3
          context: ncu-product-platforms-context
          apply: false
          tf_env: false
          environment: pr
          requires:
            - init_aws
      - build_docs:
          <<: *only_pr
          <<: *require_dep
          name: build_docs_pr
          context: ncu-newskit-site-pr
          requires:
            - build_icons
      - push_s3:
          <<: *only_pr
          name: deploy_to_s3
          context: ncu-product-platforms-context
          requires:
            - deploy_terraform_s3_dev
            - build_docs_pr
            - build_storybook
      - post_pr_env_url_to_github_pr:
          <<: *only_pr
          name: pr_enviroment_link
          context: ncu-product-platforms-context
          requires:
            - deploy_to_s3


      # develop jobs
      - build_docs:
          <<: *only_develop
          <<: *require_dep
          name: build_docs_dev
          context: ncu-newskit-site-dev
          requires:
            - build_icons
      - test_broken_links_docs:
          <<: *only_develop
          name: test_broken_links_docs_dev
          context: ncu-product-platforms-context
          requires:
            - build_docs_dev
      - test_e2e_docs:
          <<: *only_develop
          name: test_e2e_docs_dev
          context: ncu-newskit-site-dev
          requires:
            - build_docs_dev
            - install_cypress
      - approve_publish_npm_dev:
          type: approval
          <<: *only_develop
          requires:
            - build_components
            - lint
            - test_unit_comps
            - test_unit_docs
            - test_e2e_comps
            - test_e2e_docs_dev
      - publish_npm:
          <<: *only_develop
          name: publish_npm_dev
          context: ncu-product-platforms-context
          publish_dev: true
          requires:
            - approve_publish_npm_dev
      - build_push_docker_ecr:
          name: build_push_docker_ecr_dev
          context: ncu-product-platforms-context
          <<: *only_develop
          requires:
            - build_storybook
            - lint
            - test_unit_comps
            - test_unit_docs
            - test_e2e_comps
            - test_e2e_docs_dev
      - eks_flux_deploy:
          name: eks_flux_deploy_dev
          context: ncu-newskit-site-dev
          environment: dev
          <<: *only_develop
          requires:
            - build_push_docker_ecr_dev
      - eks_kubectl_deploy:
          name: eks_kubectl_deploy_dev
          context: ncu-newskit-site-dev
          environment: dev
          <<: *only_develop
          requires:
            - eks_flux_deploy_dev
      - approve_publish_docs:
          <<: *only_develop
          type: approval
          requires:
            - eks_kubectl_deploy_dev
      - build_docs:
          <<: *only_develop
          name: build_docs_prod_link
          context: ncu-newskit-site-prod
          requires:
            - approve_publish_docs
      - build_push_docker_ecr:
          name: build_push_docker_ecr_prod
          context: ncu-product-platforms-context
          requires:
            - build_docs_prod_link
      - eks_flux_deploy:
          <<: *only_develop
          name: eks_flux_deploy_dev_to_prod
          context: ncu-newskit-site-prod
          environment: prod
          requires:
            - build_push_docker_ecr_prod
      - eks_kubectl_deploy:
          <<: *only_develop
          name: eks_kubectl_deploy_prod
          context: ncu-newskit-site-prod
          environment: prod
          requires:
            - eks_flux_deploy_dev_to_prod
      - deploy_terraform:
          <<: *only_develop
          name: deploy_terraform_dns_dev
          package: dns
          context: ncu-product-platforms-context
          environment: dev
          requires:
            - init_aws
      - deploy_terraform:
          <<: *only_develop
          name: deploy_terraform_ecr_dev
          package: ecr
          context: ncu-product-platforms-context
          tf_env: false
          requires:
            - init_aws
      - deploy_terraform:
          <<: *only_develop
          name: deploy_terraform_s3_dev
          package: s3
          context: ncu-product-platforms-context
          environment: dev
          requires:
            - deploy_terraform_s3_pr

      # release jobs
      - create_release_candidate:
          <<: *only_trigger_release
          context: ncu-product-platforms-context
      - build_docs:
          <<: *only_release
          <<: *require_dep
          name: build_docs_stage
          context: ncu-newskit-site-stage
          requires:
            - build_icons
      - test_broken_links_docs:
          <<: *only_release
          name: test_broken_links_docs_stage
          context: ncu-product-platforms-context
          requires:
            - build_docs_stage
      - test_e2e_docs:
          <<: *only_release
          name: test_e2e_docs_stage
          context: ncu-newskit-site-stage
          requires:
            - build_docs_stage
            - install_cypress
      - build_push_docker_ecr:
          name: build_push_docker_ecr_release
          context: ncu-product-platforms-context
          docker_version: release
          <<: *only_release
          requires:
            - build_storybook
            - lint
            - test_unit_comps
            - test_unit_docs
            - test_e2e_comps
            - test_e2e_docs_stage
      - eks_flux_deploy:
          name: eks_flux_deploy_staging
          context: ncu-newskit-site-stage
          environment: staging
          <<: *only_release
          requires:
            - build_push_docker_ecr_release
      - eks_kubectl_deploy:
          name: eks_kubectl_deploy_staging
          context: ncu-newskit-site-stage
          environment: staging
          <<: *only_release
          requires:
            - eks_flux_deploy_staging
      - deploy_terraform:
          <<: *only_release
          name: deploy_terraform_dns_staging
          package: dns
          context: ncu-product-platforms-context
          environment: staging
          requires:
            - init_aws
      # main jobs
      - build_docs:
          <<: *only_main
          <<: *require_dep
          name: build_docs_prod
          context: ncu-newskit-site-prod
          requires:
            - build_icons
      - test_broken_links_docs:
          <<: *only_main
          name: test_broken_links_docs_prod
          context: ncu-product-platforms-context
          requires:
            - build_docs_prod
      - test_e2e_docs:
          <<: *only_main
          name: test_e2e_docs_prod
          context: ncu-newskit-site-prod
          requires:
            - build_docs_prod
            - install_cypress
      - publish_npm:
          context: ncu-product-platforms-context
          <<: *only_main
          requires:
            - lint
            - test_unit_comps
            - test_unit_docs
            - test_e2e_comps
            - test_e2e_docs_prod
            - build_components
      - eks_flux_deploy:
          name: eks_flux_deploy_prod
          context: ncu-newskit-site-prod
          environment: prod
          <<: *only_main
          requires:
            - publish_npm
      - eks_kubectl_deploy:
          name: eks_kubectl_deploy_prod
          context: ncu-newskit-site-prod
          environment: prod
          <<: *only_main
          requires:
            - eks_flux_deploy_prod