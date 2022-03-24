# OEO-Viewer

1- Install npm:

- On linux: `sudo apt install npm`

- On MacOS: `brew install node`

- On windows see [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

2-  Clone the repository and in the main directory run the following commands:

    npm install
    node dev-server.js



3- To build the minimized version:
    
    npm run build
    
This will generate a series of files inside the `dist` folder. If the `dist` folder contains the files from a previous build command, remove them before running a new build.
