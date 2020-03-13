const parse = require('..');
const tests = [
  require('./no-files'),
  require('./no-files-win'),
  require('./one-file'),
  require('./one-file-win'),
  require('./two-files'),
  require('./two-files-win'),
];

const textEncoder = new TextEncoder();
for (const test of tests) {
  console.log(test.label);
  const uint8Array = textEncoder.encode(test.input);
  const parts = [...parse(uint8Array)];
  if (parts.length !== test.output.length) {
    throw new Error('Counts do not match up.');
  }

  for (let index = 0; index < parts.length; index++) {
    const part = parts[index];
    if (JSON.stringify(part) !== JSON.stringify(test.output[index])) {
      console.log('part #', index, 'does not match');
      console.log(JSON.stringify(test.input.slice(part.index, part.index + part.length)));
      console.log(part);
      console.log(test.output[index]);
    }
  }
}
