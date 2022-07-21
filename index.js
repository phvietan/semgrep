var express = require('express')
var app = express();
const ExpressResponse = require('./response');

const whitelisted = ["https://google.com", "https://facebook.com"];

app.get('/semgrep-easy-find', (req, res) => {
  const redirect = req.query.redirect || '//google.com';
  res.redirect(redirect);
});

app.get('/semgrep-hard-find', (req, res) => {
  const wrapper = new ExpressResponse(res);
  const redirect = req.query.redirect || '//google.com';
  wrapper.redirect(redirect);
});

app.listen(3221)
