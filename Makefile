DOCKER_REGISTRY_URL ?= ncu-product-platforms
DOCKER_REPO ?= design-system-site
DOCKER_TAG ?= latest
CIRCLE_SHA1 ?= 0000000000
SHORT_GIT_HASH := $(shell echo ${CIRCLE_SHA1} | cut -c -9)

# CURRENT BRANCH CHECKED OUT
CURRENT_BRANCH = $(shell git symbolic-ref --short -q HEAD)

# Cleans branch into a url friendly format 
BASE_PATH = $(shell node -p "/(^main$$)/.test('${CURRENT_BRANCH}') ? '' : require('./scripts/branch-name-to-url.js').branchNameToUrl('${CURRENT_BRANCH}')")

BASE_URI = ${SITE_BASE_URL}${BASE_PATH}/

install:
	yarn install --frozen-lockfile

install_cypress:
	yarn add -D cypress@9.1.0;

build_icons:
	yarn build:icons:ci

build_components:
	yarn build:comps

build_storybook:
	yarn build:storybook

build_docs:
	SITE_ENV=${SITE_ENV} BASE_URI=${BASE_URI} BASE_PATH=${BASE_PATH} yarn build:docs && yarn postbuild:docs

build_docs_pr_with_no_base_url:
	SITE_ENV=${SITE_ENV} yarn build:docs && yarn postbuild:docs

unit_test_docs:
	yarn test:unit:ci --projects=site

unit_test_comps:
	yarn test:unit:ci --projects=src

lint:
	yarn lint

check_broken_links_docs:
	yarn e2e:findbrokenlinks:ci

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

bump_version:
	git checkout main
	git pull
	yarn config set version-git-message "Bumping to version v%s - [skip ci]"
	echo "Updating package.json version"
	yarn version --new-version ${NEW_VERSION}
	git push
	echo "Creating and pushing tag to trigger release deployment to prod"
	git tag -a deploy-release@${NEW_VERSION} -m "Tag to trigger ${NEW_VERSION} deployment to prod"
	git push origin deploy-release@${NEW_VERSION}
