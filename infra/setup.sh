#!/bin/bash -e

echo "Installing deployment python environment"
virtualenv env
source env/bin/activate
pip install fabric

echo "run 'fab configure' to configure your destination host."
