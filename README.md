# OTC Markets tests

Clone the repo `git clone https://github.com/dcavenag/majorkey.git`

On a terminal run `./node_modules/.bin/cypress open`

Once cypress is open click on the `otcmarkets.js` file, the test should start.

The captures taken can be found under `cypress\screenshots` folder

Bug found:
The `ADBCF` company has no Market Cap under "Quote" tab so the test for this company is failing.
