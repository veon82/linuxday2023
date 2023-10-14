#!/bin/bash

usage() {
    echo "usage:"
    echo "$0 <namespace> <app>"
    echo "e.g. $0 ld2023 backend"
    exit 1
}

[ $# -ne 2 ] && usage

NAMESPACE=$1
APP_LABEL=$2

pods=$(kubectl get pods -n ${NAMESPACE} -l app=${APP_LABEL} | grep Running | awk '{print $1}')

while IFS= read -r pod
do
  echo "------ LOGS FOR $pod ------"
  kubectl logs -n ${NAMESPACE} $pod
done <<< $pods
