const parse = require('.');

const noFiles = `-----------------------------7425884061719830581540789485
Content-Disposition: form-data; name="files[]"; filename=""
Content-Type: application/octet-stream


-----------------------------7425884061719830581540789485--`;

const oneFile = `-----------------------------79563803530948809841060820817
Content-Disposition: form-data; name="files[]"; filename="test"
Content-Type: application/octet-stream

test
-----------------------------79563803530948809841060820817--`;

const twoFiles = `-----------------------------27148436562988246533208507380
Content-Disposition: form-data; name="files[]"; filename="test1"
Content-Type: application/octet-stream

test1
-----------------------------27148436562988246533208507380
Content-Disposition: form-data; name="files[]"; filename="test2"
Content-Type: application/octet-stream

test2
-----------------------------27148436562988246533208507380--`;
