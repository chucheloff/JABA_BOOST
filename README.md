# JABA_BOOST

INSTALLATION GUIDE 




you need node, npm and npx 

1. https://nodejs.org/en/download/
2. npm install npm@latest -g
3. npm install -g npx


- Clone proj to anywhere
- cd there 
- run 'npm install' to get all node_modules from package.lock
- to execute you need Android device connected with ADB ( emulator or hardware device ) 
- then run automated tests from any test/specs/*.js files with
  'npx wdio wdio.conf.js --spec {name of your spec}' : in my examplle its 'npx wdio wdio.conf.js --spec boost'
  
  Runs on the opened chat page where you need to send reminder to
