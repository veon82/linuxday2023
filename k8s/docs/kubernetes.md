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



