
.. figure:: https://user-images.githubusercontent.com/14353512/185425447-85dbcde9-f3a2-4f06-a2db-0dee43af2f5f.png
    :align: left
    :target: https://github.com/rl-institut/super-repo/
    :alt: Repo logo

==========
OEO-Viewer
==========

.. contents::
    :depth: 2
    :local:
    :backlinks: top

Installation
============
1. Install npm:

   - On linux: ``sudo apt install npm``

   - On MacOS: ``brew install node``

   - On windows see `here <https://docs.npmjs.com/downloading-and-installing-node-js-and-npm>`_.

2. Clone the repository and in the '/client' directory run the following commands:

   .. code-block:: bash

       npm install
       node dev-server.js

3. To build the minimized version:

   .. code-block:: bash

       npm run build

   This will generate a series of files inside the ``dist`` folder. If the ``dist`` folder contains the files from a previous build command, remove them before running a new build.
