module.exports = {
  label: 'Two files (Windows newlines)',
  input: `-----------------------------27148436562988246533208507380
Content-Disposition: form-data; name="files[]"; filename="test1"
Content-Type: application/octet-stream

test1
-----------------------------27148436562988246533208507380
Content-Disposition: form-data; name="files[]"; filename="test2"
Content-Type: application/octet-stream

test2
-----------------------------27148436562988246533208507380--`.replace(/\n/g, '\r\n'),
  output: [
    {
      headers: [
        {
          name: 'Content-Type',
          values: ['application/octet-stream'],
        },
        {
          name: 'Content-Disposition',
          values: ['form-data', 'name=\"files[]\"', 'filename=\"test1\"'],
        },
      ],
      index: 168,
      length: 5,
    },
    {
      headers: [
        {
          name: 'Content-Type',
          values: ['application/octet-stream'],
        },
        {
          name: 'Content-Disposition',
          values: ['form-data', 'name=\"files[]\"', 'filename=\"test2\"'],
        },
      ],
      index: 343,
      length: 5,
    }
  ]
};
