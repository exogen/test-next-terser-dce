// Why are these modules still included in the bundle if the only import
// location is entirely removed?

function removedHttpsFunction() {
  console.log("confirm this was removed by searching for test-xxx-https");
  const HttpsAgent = require("https").Agent;
  return new HttpsAgent();
}

function testImports() {
  const agent = process.browser ? undefined : removedHttpsFunction();
  console.log(agent);
}

testImports();

export default () => "Hello, world!";
