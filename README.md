# Kubernetes Cluster with k3s on RaspberryPi and Demo Application

This project helps you set up a Kubernetes (k3s) cluster on RaspberryPi and deploy a demo application consisting of a React-based frontend and a Node.js backend, both of which are containerized with Docker. The backend interacts with a MongoDB database, which is not managed by the Kubernetes cluster.

## Prerequisites

- 2 or more RaspberryPi devices
- Docker
- Node.js
- MongoDB Database (Atlas free tier database would be a nice choice)
- K6 for load testing

## Installation

1. Clone this repository to your local machine.

    ```
    git clone https://github.com/veon82/linuxday2023.git
    ```
2. Prepare the RaspberryPi boards following the instruction [here](docs/rpi-setup.md)
3. [Install K3S](docs/k3s-install.md) on each RPi
4. Go to `k8s/config` and use `kubectl` to create objects:
   ```
   kubectl create -f deployments.yml -f services.yml -f hpa.yml -f ingress.yml
   ```

That's all, your cluster is up & running!

If you want to install the dashboard follow the instructions [here](docs/kubernetes.md#dashboard)

The deployed containers are pulled from Docker Hub, the source code is inside `æpp` folder.

In `k6` folder there is a `load-test.js` script that can be used to scale up the pods through HPA (Horizontal Pod Autoscaler) (you need to install [k6](https://k6.io/) to use it).

Enjoy :tada: