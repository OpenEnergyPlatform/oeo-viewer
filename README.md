# oeo-viewer


## Versioning

GitHub creates new artefacts on each pushed **tag**. You can create a new tag using `npm version`. It uses semantic versioning. 
The built artefacts can be used within the OpenEnergy platform.

To update the deployed version within the OpenEnergy platform, you have to take a the artefacts and copy them over into the `oeo-viewer` directory in the OpenEnergy platform. `index.html` does into the `template` folder, the rest of the files goes into the `static` folder. 

Note: This will change in the future. 