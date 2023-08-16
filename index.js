const express = require('express')
const app = express();
const port = process.env.PORT || 5000


app.engine('html', require('ejs').renderFile);

app.use(express.static('pub'));

app.get('/', (req, res) => {
  res.render('homepage.html')
});

app.get('/furnitureStoreExample.html', (req, res) => {
  res.render('furnitureStoreExample.html')
});

app.get('/bakeryExample.html', (req, res) => {
  res.render('bakeryExample.html')
});

app.get('/clothingStoreExample.html', (req, res) => {
  res.render('clothingStoreExample.html')
});

app.get('/aboutPage.html', (req, res) => {
  res.render('aboutPage.html')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});