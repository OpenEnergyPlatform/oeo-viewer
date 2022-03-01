# oeo-viewer

To run the oeo-viewer, first run `npm install` and then run `node dev-server.js`

1- To create the minimized version, inside the `client` folder, run: `npm run build` This will generate a series of files inside the `dist` folder. If the `dist`
 folder contains the files from a previous build command, remove them (`rm *.*`)  before running a new build.
 
2- To update the OpenEnergy platform: (1) remove all previous files inside the `oeo-viewer/static` directory. (2) copy all generated files inside the `dist` folder and paste them into the `oeo-viewer/static` directory in the OpenEnergy platform. Also, update the `oeo_viewer/templates/index.html` with the two new generated .js and .css files, accordingly. These files are distinguishable since their names start with `scripts`. Each time the generated files will get a new name.

Done!


