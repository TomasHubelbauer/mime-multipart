const http = require('http');
const parse = require('.');

const port = 7000;
http
  .createServer((request, response) => {
    const body = [];
    request.on('data', chunk => body.push(chunk));
    request.on('end', () => {
      response.setHeader('Content-Type', 'text/html');

      const buffer = Buffer.concat(body);
      try {
        for (const part of parse(buffer)) {
          response.write('<ul>');
          for (const header of part.headers) {
            response.write(`<li>${header.name} ${header.values}</li>`);
          }

          response.write('</ul>');

          const type = part.headers.find(h => h.name === 'Content-Type');
          switch (type ? type.values.join() : 'application/octet-stream') {
            case 'image/png': {
              response.write(`<img src="data:image/png;base64,${buffer.slice(part.index, part.index + part.length).toString('base64')}" />`);
              break;
            }
            default: {
              response.write(`<pre>${buffer.slice(part.index, part.index + part.length)}</pre>`);
              break;
            }
          }
        }
      }
      catch (error) {
        response.write(`<p>${error.message}</p>`);
      }

      response.write('<hr/>');
      response.write(`<pre>${buffer}</pre>`);
      response.end();
    });
  })
  .listen(port, () => console.log('http://localhost:' + port));
