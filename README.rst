
.. figure:: https://user-images.githubusercontent.com/14353512/185425447-85dbcde9-f3a2-4f06-a2db-0dee43af2f5f.png
    :align: left
    :target: https://github.com/rl-institut/super-repo/
    :alt: Repo logo

==========
OEO-Viewer
==========
.. list-table::
   :widths: auto

   * - License
     - |badge_license|
   * - Documentation
     - |badge_documentation|
   * - Publication
     -
   * - Development
     - |badge_issue_open| |badge_issue_closes| |badge_pr_open| |badge_pr_closes|
   * - Community
     - |badge_contributing| |badge_contributors| |badge_repo_counts|

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


.. |badge_license| image:: https://img.shields.io/github/license/OpenEnergyPlatform/oeo-viewer
    :target: LICENSE.txt
    :alt: License

.. |badge_documentation| image::
    :target:
    :alt: Documentation

.. |badge_contributing| image:: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat
    :alt: contributions

.. |badge_repo_counts| image:: http://hits.dwyl.com/OpenEnergyPlatform/oeo-viewer.svg
    :alt: counter

.. |badge_contributors| image:: https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square
    :alt: contributors

.. |badge_issue_open| image:: https://img.shields.io/github/issues-raw/OpenEnergyPlatform/oeo-viewer
    :alt: open issues

.. |badge_issue_closes| image:: https://img.shields.io/github/issues-closed-raw/OpenEnergyPlatform/oeo-viewer
    :alt: closes issues

.. |badge_pr_open| image:: https://img.shields.io/github/issues-pr-raw/OpenEnergyPlatform/oeo-viewer
    :alt: closes issues

.. |badge_pr_closes| image:: https://img.shields.io/github/issues-pr-closed-raw/OpenEnergyPlatform/oeo-viewer
    :alt: closes issues