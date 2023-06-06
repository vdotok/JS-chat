# Vdotok JS One-to-One and Group Chat

This is a demo project to demonstrate “One-to-One and Group Chat” using Angular 9+.

## Live Demo

Click [here](https://chat.vdotok.com) here to visit the live demo of VdoTok JS One-to-One and Group Chat.

## Prerequisites:

- Node v4.x.x or later
- npm v3.x.x or later
- git version any

To verify the version of Node and npm, open **Terminal/Console** window and run `node -v` and `npm –v`. Older versions produce errors.

Click <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">here</a> to download and install the latest versions of Node and npm.

Click <a href="https://git-scm.com/downloads" target="_blank">here</a> to download and install the latest versions of git .

We recommend <a href="https://github.com/nvm-sh/nvm" target="_blank">nvm </a> for managing multiple versions of node and npm.

<br/>

## Setting up the local environment

To install Angular on your local system, you need the following:

### Node

Angular requires an active LTS or maintenance LTS version of Node. For more information on installing Node, see <a href="https://nodejs.org">nodejs.org</a>. If you are unsure what version of Node runs on your system, run `node -v` in a **Terminal** window.

### npm package manager

Angular, the Angular CLI, and Angular applications depend npm packages on <a href="https://docs.npmjs.com/getting-started/what-is-npm">npm packages</a> for many features and functions. To download and install npm packages, you need an npm Package Manager. This guide uses the npm client command line interface, which is installed with Node by default. To check that you have the npm client installed, run `npm -v` in a terminal window.

<br/>

## Install the Angular CLI

You can use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

> To install the Angular CLI, open a terminal window (ctrl + shift + c) and run the following command:

```shell
   npm install -g @angular/cli
```

Visit <a href="https://angular.io/guide/setup-local" target="_blank">Angular Setup</a> for more information.

<br/>

## Clone Repo

- Clone this **Repository URL** into new project folder (e.g., my-proj).

```shell
    git clone https://github.com/vdotok/JS-chat.git
```

- Move from you current directory i-e, **my-proj** to the **JS-chat** directory.

```shell
    cd JS-chat
```

## Sign up to get credentials i.e Project ID, Authentication Token.

Register at <a href="https://vdotok.com" target="_blank">VdoTok</a> to get **Authentication Token** and **Project ID**.

1. Click on this link -> <a href="https://vdotok.com" target="_blank">https://vdotok.com</a> in your browser.

<img width="1721" alt="SignupVdotok" src="https://github.com/vdotok/JS-chat/assets/134290022/d0093296-71ff-43b3-9992-1199aecc786b">


2. This will navigate to Sign Up page, where the User is required to enter the following information: First Name > Last Name > Email > Country > Password. Select Sign Up For Free button

![My Remote Image](https://user-images.githubusercontent.com/87179594/184070989-e8b26d85-6e64-4ef3-b6d7-56449738236c.jpg)

3. After successfully sign up, user navigates to the main dashboad of VDOTOK where the user can find the ProjectID, and Api Key.

![My Remote Image](https://user-images.githubusercontent.com/87179594/184071060-9909513b-f880-4de8-9481-6ab91ae2be95.jpg)

After successful registration, you can update the existing projectID with your own projectID, given in point no. 2 in the above attached screenshot

<br/>

## Add PROJECT ID and AUTHENTICATION Token.

</br>

### For messaging in chat application, You can update the projectID by following these steps.

- Go to the file ( JS-CHAT -> src -> constants -> const.ts ).

- Replace the **project_id** constant with your project ID.


### Base URL

You have to update BaseUrl with your own apiBaseUrl. You can update **apiBaseUrl** by following these steps:

- Go to environment.prod.ts file, ( JS-CHAT -> src -> environments -> environment.prod.ts ), replace the **apiBaseUrl** with your BaseUrl

- Go to environment.ts file, ( JS-CHAT -> src -> environments -> environment.ts ), replace the **apiBaseUrl** with your BaseUrl

</br>

## Install npm packages

Please refer to the above-stated npm and nvm version notes.

- Install the npm packages described in the `package.json` and verify that it works:

```shell
  npm install
  ng serve
```

- Open browser, application is running at **http://localhost:4200**

- Create **New Account** using Sign-up Form, and use the application



## How to Generate and Install Build:

Follow the commands below to generate a “build”

```shell
  ng build
```

```shell
  ng build --aot --configuration production --build-optimizer --outputHashing=all
```

### How to Configure SDK:

Add SDK into your **index.html** file. Declare a variable for your component or service:
`declare const MVDOTOK: any;`

User provides config to initiate the SDK

```js
const Client = new MVDOTOK.Client({
      projectID: "****",
      secret: "********************",
    });
    Client.on("authenticated", (res) => {
      let user = StorageService.getUserData();
      this.Client.Register(user.ref_id.toString(), user.authorization_token.toString());
    });
```

After successful configuration, you can run the project locally by using this command.

```shell
    npm start 
```
or use the following command to run the project locally

```shell
    ng serve
```

Now open the browser and you can see the application at http://localhost:4200
