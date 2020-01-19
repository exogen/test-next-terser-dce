function removedFunction() {
  console.log("confirm this was removed by searching for test-xxx-abc");
  const HttpsAgent = require("https").Agent;
  return new HttpsAgent();
}

const agent = process.browser ? undefined : removedFunction();

export default () => "Hello, world!";
