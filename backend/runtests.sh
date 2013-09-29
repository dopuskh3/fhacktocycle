#!/bin/bash

source env/bin/activate
export PYTHONPATH=$PYTHONPATH:$PWD
nosetests -s -v fhacktocycle/fhacktocycle/apis
