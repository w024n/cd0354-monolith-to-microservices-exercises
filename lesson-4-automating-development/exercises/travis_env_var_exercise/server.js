
const TEST_VAR = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${TEST_VAR} rock!`);
    await sleep(5000);
  }
}

main();
