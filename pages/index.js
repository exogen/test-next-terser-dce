// Why are these modules still included in the bundle if the only import
// location is entirely removed?

function removedHttpsFunction() {
  console.log("confirm this was removed by searching for test-xxx-https");
  // Note below, putting the check here does successfully exclude it!
  // if (!process.browser) {
  const HttpsAgent = require("https").Agent;
  return new HttpsAgent();
  // }
}

function testImports() {
  // Even removing the conditional altogether and doing the DCE ourselves via
  // const agent = undefined;
  // so that there is no possible reference to `removedHttpsFunction` leaves
  // the `https` import in the bundle.
  const agent = process.browser ? undefined : removedHttpsFunction();
  console.log(agent);
}

testImports();

export default () => "Hello, world!";
