# OTC Markets test

On a terminal and clone the repo `git clone https://github.com/dcavenag/majorkey.git`

Go to the cloned folder and install cypress using npm `npm install cypress --save-dev`

Once installed, install the dependencies running `npm i -d`

To run cypress run `npm run cypress:open`

Once cypress is open click on the `otcmarkets.js` file, the test should start.

![Screen Shot 2022-01-04 at 17 52 04](https://user-images.githubusercontent.com/43622930/148123355-988c2049-2e28-4f45-8a96-b0e66f35b351.png)

The captures taken can be found under `cypress\screenshots` folder

### NOTE

Bug found:
The `ADBCF` company has not "Market Cap" field under "Quote" tab.
This is the reason why the test for this company fails.

![Issue with ADBCF](https://user-images.githubusercontent.com/43622930/148123347-23a0978a-94d1-4eaa-8244-a18037d3b6f3.png)
