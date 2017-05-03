#!/bin/bash

set -x

rvm use $(< .ruby-version) --fuzzy
gem install s3_website
s3_website push
