module.exports = {
  label: 'One file',
  input: `-----------------------------79563803530948809841060820817
Content-Disposition: form-data; name="files[]"; filename="test"
Content-Type: application/octet-stream

test
-----------------------------79563803530948809841060820817--`,
  output: [
    {
      headers: [
        {
          name: 'Content-Type',
          values: ['application/octet-stream'],
        },
        {
          name: 'Content-Disposition',
          values: ['form-data', 'name=\"files[]\"', 'filename=\"test\"'],
        },
      ],
      index: 163,
      length: 4,
    }
  ]
};
