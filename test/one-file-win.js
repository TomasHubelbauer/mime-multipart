module.exports = {
  label: 'One file (Windows newlines)',
  input: `-----------------------------79563803530948809841060820817
Content-Disposition: form-data; name="files[]"; filename="test"
Content-Type: application/octet-stream

test
-----------------------------79563803530948809841060820817--`.replace(/\n/g, '\r\n'),
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
      index: 167,
      length: 4,
    }
  ]
};
