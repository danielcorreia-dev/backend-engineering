const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  send(res);
});

const port = process.env.PORT || 3000;

let i = 0;
const send = (res) => {
  res.write(`data: ${i++}\n\n`);
  setTimeout(() => send(res), 1000);
};

app.listen(port, () => console.log(`Listening on port ${port}`));
