const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Strežnik teče na http://localhost:${PORT}`);
});


