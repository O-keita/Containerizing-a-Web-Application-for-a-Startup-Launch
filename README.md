# Containerizing-a-Web-Application-for-a-Startup-Launch
# Omar's Task Manager

This task manager provides user with an intuitve and simple user interface which helps them to create, track and manage their daily tasks effectively

## Demo

![alt text](<Screenshot from 2024-03-31 12-39-56.png>)

## Features of the App

#### Adding Tasks
Allows Users to add their tasks using the text input and the Add button


#### Viewing Task
Users can see all the tasks they added in the task manager


#### Marking Tasks as Complete
After succefully doing a particular task, users have the previlage to mark the task as complete with the check button on the task manager


#### Deleting Tasks
Users also have the privelage of deleting their tasks using the delete icon

## Technologies
#### HTML, CSS & JAVASCRIPT
For the entire frontend of the App, we use html css and javascript to make the app user friendly, compatible or responsive on different devices

#### DOCKER
We also use docker to make deloyment easy and compatibilty across different environment


## How to use
Clone the App on github or docker hub to use it in your local machine

clone on github https://github.com/O-keita/Containerizing-a-Web-Application-for-a-Startup-Launch

docker pull: docker pull omarkeita/task-manager

## How to Build and run Docker Image
#### In this section, I will be explaining the steps you take to build and run a docker image

##### Step 1:
###### Install Docker if not in your machine Note: This is for Ubuntu
-- install docker apt repositry
```
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

--- install latest version, run
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

--- Verify if Successfully Installed by running Hello, World
```
sudo docker run hello-world
```

##### Step 2
##### Create a Dockerfile
Creating a Docker file is as simple as drinking tea. just create <kbd style="background-color: #f0f0f0; padding: 8px 15px; border-radius: 5px;">Dockerfile</kbd> with no extention.


##### Step 3
###### Configure your Dockerfile
```
# Select a base Image. Your base Image can be Nginx, Node, Python and many more
# For this tutorial we will use nginx
# We will also use lightwight linux distribution called alpine

FROM nginx:alpine

# copy application code inside the container
# replace current_dir with your current working directory example src/html or just .

COPY current_dir /usr/share/nginx/htm

# Expose to port 80 to allow external access

EXPOSE 80
```

##### Step 4
###### Build the docker image
Use the following Command to build the docker Image
```
docker build -t your-image-name .
```
replace your-image-name with your desired image name

##### Step 5
##### Run the container with the following command
```bash
docker run -d -p 8080:80 your-image-name
```


## Pushing your Image to docker hub
##### Step 1
Create an account at docker hub https://hub.docker.com/

##### Step 2
login to Docker hub with the following command
Provide your username and password
```
docker login
```
#### Step 3

Push your image withe the following command
```
docker push your-dockerhub-username/your-image
```
Replace your-dockerhub-username with your actuall username and your-image with your actual image name

### This is all I have about Docker and my App, I hope you found it usefull
### Thanks for Reading!!!








