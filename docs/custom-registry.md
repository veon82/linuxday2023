# Setup a custom registry

```
docker run -d -p 5000:5000 --name my-local-registry registry
```

On the master node create:

```bash
sudo nano /etc/rancher/k3s/registries.yaml
```

and configure the local registry

```
mirrors:
  docker.io:
    endpoint:
      - "http://localhost:5000"
```

Restart k3s service: `sudo systemctl restart k3s`

# Images deploy

To push the images to the local registry remember to tag them with a proper name:

```bash
docker tag ld2023-be localhost:5000/ld2023-be
```

Push to the registry:

```bash
docker push localhost:5000/ld2023-be
```

# Kubernetes deployment

On the deployment manifest remember to specify the correct image name with the reference to the custom registry:

```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: be-deploy
spec:
  replicas: 1
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
      - name: backend
        image: localhost:5000/ld2023-be:latest
```