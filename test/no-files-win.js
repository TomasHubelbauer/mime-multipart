module.exports = {
  label: 'No files (Windows newlines)',
  input: `-----------------------------7425884061719830581540789485
Content-Disposition: form-data; name="files[]"; filename=""
Content-Type: application/octet-stream


-----------------------------7425884061719830581540789485--`.replace(/\n/g, '\r\n'),
  output: [
    {
      headers: [
        {
          name: 'Content-Type',
          values: ['application/octet-stream'],
        },
        {
          name: 'Content-Disposition',
          values: ['form-data', 'name=\"files[]\"', 'filename=\"\"'],
        },
      ],
      index: 162,
      length: 0,
    }
  ]
};
