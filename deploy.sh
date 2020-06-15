#!/bin/bash

# -----------------------------------------------------------------------------
# Info:
#   author:    Santhosh veer
#   website:   https://santhoshveer.com
#   file:      deploy.sh
#   Description: Download the API Source to your Server
#
# -----------------------------------------------------------------------------

API="https://api.covid19india.org/data.json"

GETSTATUS(){
  curl --silent $API --output api.json
}

if [ "$(curl -sL -w "%{http_code}" "$API" --output /dev/null)" = 200 ]; then
   GETSTATUS
   echo "Success"
else
    echo "Failed"
fi