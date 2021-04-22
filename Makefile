DOCKER_REGISTRY_URL ?= ncu-product-platforms
DOCKER_REPO ?= design-system-site
DOCKER_TAG ?= latest
CIRCLE_SHA1 ?= 0000000000
SHORT_GIT_HASH := $(shell echo ${CIRCLE_SHA1} | cut -c -9)

# CURRENT BRANCH CHECKED OUT
CURRENT_BRANCH = $(shell git symbolic-ref --short -q HEAD)

# SITE_ENV is for differentiating between newskit.co.uk and dev
SITE_ENV=$(shell node -p "/(^release.*)|(^master$$)/.test('${CURRENT_BRANCH}') ? 'production' : 'development'")

# patch/minor/major
UPDATE_TYPE = ${shell echo ${CURRENT_BRANCH}| cut -d'-' -f 3}

# VERSION NUMBER IN PACKAGE JSON
PKG_VERSION = ${shell node -p "require('./package.json').version"}

# RELEASE BRANCH NAME TO CREATE PULL REQUESTS INTO DEVELOP AND MASTER
RELEASE_BRANCH = release/${INITIAL_UPDATE_TYPE}-${PKG_VERSION}

# PR TITLES
RELEASE_PR_MASTER_TITLE = release/master-${INITIAL_UPDATE_TYPE}-${PKG_VERSION}
RELEASE_PR_DEVELOP_TITLE = release/develop-${INITIAL_UPDATE_TYPE}-${PKG_VERSION}

install:
	yarn install --frozen-lockfile

install_cypress:
	yarn global add cypress@6.2.1;

build_icons:
	yarn build:icons:ci

build_components:
	yarn build:comps

build_storybook:
	yarn build:storybook

build_docs:
	SITE_ENV=${SITE_ENV} yarn build:docs

build_docs_prod:
	SITE_ENV='production' yarn build:docs

unit_test_docs:
	yarn test:unit:ci --projects=site

unit_test_comps:
	yarn test:unit:ci --projects=src

lint:
	yarn lint

comps_visual_test:
	yarn test:visual:comps:ci

e2e_test_comps:
	yarn e2e:comps:ci;

e2e_test_build:
	yarn e2e:build;

e2e_test_docs:
	yarn e2e:docs:ci;

e2e_visual_test_docs:
	yarn e2e:visual:docs:ci;

publish_npm_dev:
	cd dist; yarn publish --no-git-tag-version --new-version 0.0.0-${SHORT_GIT_HASH} --tag unstable;

publish_npm:
	cd dist; yarn publish --no-git-tag-version;

build_docker:
	docker build -t ncu-newskit .

push_docker:
	docker tag ncu-newskit:latest $(DOCKER_REGISTRY_URL)/$(DOCKER_REPO):$(DOCKER_TAG)
	docker push $(DOCKER_REGISTRY_URL)/$(DOCKER_REPO):$(DOCKER_TAG)

set_git_identity:
	git config --global user.email "ncu-product-platforms@news.co.uk"
	git config --global user.name "Product Platforms Service"

install_hub:
	wget https://github.com/github/hub/releases/download/v2.12.4/hub-linux-amd64-2.12.4.tgz
	tar zxvf hub-linux-amd64-2.12.4.tgz
	sudo cp hub-linux-amd64-2.12.4/bin/hub /usr/bin/hub

# UPDATE PACKAGE VERSION BASED ON UPDATE TYPE IN BRANCH TRIGGER NAME
create_release_candidate:
	git fetch origin
	git checkout -f develop
	echo "Creating new ${UPDATE_TYPE} version"
	yarn version --${UPDATE_TYPE}
	make INITIAL_UPDATE_TYPE=${UPDATE_TYPE} push_release

# CREATE RELEASE BRANCH AND PULL REQUESTS BEFORE DELETING ORIGINAL TRIGGER BRANCH
push_release:
	echo "Creating branch $(RELEASE_BRANCH)"
	git checkout -b $(RELEASE_BRANCH)
	#We don't care about any changes on master we force the current HEAD onto master
	echo "Merge our release branch"
	git merge -s ours origin/master --no-edit
	git push --tags --set-upstream origin $(RELEASE_BRANCH)
	echo "Create PR into develop"
	hub pull-request -p --base develop --head $(RELEASE_BRANCH) -m $(RELEASE_PR_DEVELOP_TITLE)
	echo "Create PR into master"
	hub pull-request --base master --head $(RELEASE_BRANCH) -m $(RELEASE_PR_MASTER_TITLE)
	git push origin --delete "trigger-release-${INITIAL_UPDATE_TYPE}"
