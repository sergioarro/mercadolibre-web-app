# As default, help command will be executed
.DEFAULT_GOAL := help

define GetFromPkg
$(shell node -p "require('./package.json').$(1)")
endef

PROJECT_NAME := $(call GetFromPkg,name)
LAST_VERSION := $(call GetFromPkg,version)
LOCAL_PORT:= 8000
LOCAL_DOCKER_PORT:= 8080

default: help

install:
	npm install

dev:
	npm run dev

lint:
	npm run lint

test:
	npm run test

build:
	npm run build

start:
	npm start

clean:
	npm run clean

.PHONY: help clean run build test install