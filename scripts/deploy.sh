#!/bin/bash

set -x

rvm use $TRAVIS_RUBY_VERSION
gem install s3_website
s3_website push