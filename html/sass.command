#!/bin/bash
MY_DIRNAME=$(dirname $0)
cd $MY_DIRNAME
sass --watch scss:css --style compressed --no-cache
