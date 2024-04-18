

PREREQUISITES:
1. git is installed
2. node and npm are installed

SETTING UP:
1. from terminal, run the command: npm install -g expo-cli

RUNNING THE APP:
1. cd into tilawah and run the command: npm install -g expo-cli
2. Then run the command: npm install
3. In a separate IDE window, cd into the directory flask-app and run the file FlaskServer.py (preferably from a virtual environment with python3.9.13)
4. ensure the server url is the same as the one being accessed on line 402 of the file RecButton.js
5. Back in the tilawah terminal, run the command: npx expo start

POTENTIAL ERRORS & FIXES:
1. Error: metro-file-map: Watchman crawl failed. Retrying once with node crawler.
    Fix: Make sure that Watchman is installed and running on your system. You can start Watchman by running watchman watch-project <path-to-your-project>, replacing <path-to-your-project> with the path to your project directory.

