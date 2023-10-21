# k3s

Reference: https://docs.k3s.io/quick-start

Before installing kubernetes cluster on Raspberry Pi boards:

Edit the `/boot/cmdline.txt` SD card partition and add these options at the end of the line:

```
cgroup_memory=1 cgroup_enable=memory
```

Reboot the board.

Now you are ready to install K3S on the master node:

```bash
curl -sfL https://get.k3s.io | sh -
```

Retrieve the token that will be used to pair the worker nodes:

```bash
sudo cat /var/lib/rancher/k3s/server/node-token
```

Add a new node (replace `myserver` with the IP of the master node and `mynodetoken` with the retrieved token):

```bash
curl -sfL https://get.k3s.io | K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken sh -
```


## kubectl config

To use kubectl from an external host you need to add the cluster info to the `.kube/config` file.

Read the `/etc/rancher/k3s/k3s.yaml` from the master node and add it to you local machine `.kube/config`.

If you have other clusters configured you need to add these parts:

On `clusters`: 
```
- cluster:
    certificate-authority-data: xxxx
    server: https://<IP_MASTER_NODE>:6443
  name: pi
```

On `contexts`:
```
- context:
    cluster: pi
    user: pi
  name: pi
```

On `users`:
```
- name: pi
  user:
    client-certificate-data: xxxx
    client-key-data: xxxx
```