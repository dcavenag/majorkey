# OTC Markets tests

Clone the repo `git clone https://github.com/dcavenag/majorkey.git`

On a terminal run `./node_modules/.bin/cypress open`

Once cypress is open click on the `otcmarkets.js` file, the test should start.

The captures taken can be found under `cypress\screenshots` folder

Bug found:
The `ADBCF` company has not Market Cap under "Quote" tab. 
This is the reason why the test fails for this company is failing.
