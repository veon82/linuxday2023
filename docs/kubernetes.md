## Set context

```
kubectl config use-context pi
```

## Create namespace

```
kubectl create namespace ld2023
```

## Setup a secret

```
kubectl create secret generic mdb-password --from-literal=MONGODB_PASSWORD=<PASSWORD>
```

## View pod logs

```
kubectl logs -f -l app=frontend --all-containers -n ld2023
```

## Set label on node

```
kubectl label nodes rpi-k3s-wrk-3 workload=ld2023
```

## Dashboard

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml
kubectl apply -f dashboard-clusterrole.yml
kubectl apply -f dashboard-clusterrolebinding.yml
```

Create a token for service account `kubernetes-dashboard` 

```
kubectl create token kubernetes-dashboard -n kubernetes-dashboard
```

Launch `kubectl proxy` then open the [dashboard](http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy) on a browser

Use the token created before on the dashboard when logging in.