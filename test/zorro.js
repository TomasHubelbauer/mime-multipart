module.exports = {
  label: 'Zorro photo',
  input: require('fs').readFileSync(__dirname + '/zorro.mime').toString(),
  output: [
    {
      headers: [
        {
          name: 'Content-Type',
          values: ['image/jpeg'],
        },
        {
          name: 'Content-Disposition',
          values: ['form-data', 'name=\"files[]\"', 'filename=\"zorro.jpg\"'],
        },
      ],
      index: 158,
      length: 6484,
    }
  ]
};
