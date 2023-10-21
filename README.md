# Kubernetes Cluster with k3s on RaspberryPi and Demo Application

This project helps you set up a Kubernetes (k3s) cluster on RaspberryPi and deploy a demo application consisting of a React-based frontend and a Node.js backend, both of which are containerized with Docker. The backend interacts with a MongoDB database, which is not managed by the Kubernetes cluster.

## Prerequisites

- RaspberryPi with k3s installed
- Docker
- Node.js
- MongoDB Database (Atlas free tier database would be a nice choice)
- K6 for load testing

## Installation

1. Clone this repository to your local machine.

```
git clone https://github.com/veon82/linuxday2023.git
```