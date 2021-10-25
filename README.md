# oeo-viewer

1- To create the minimized version, run:
`npm run build`

This will generate a series of files inside the `dist` folder. 

2- To update the OpenEnergy platform, copy all generated files inside the `dist` folder and copy them over into the `oeo-viewer/static` directory in the OpenEnergy platform. Also, update the `oeo_viewer/templates/index.html` with the two new generated .js and .css files, accordingly. These files are distinguishable since their names start with `scripts`. Each time the generated files will get a new name.

Done!


