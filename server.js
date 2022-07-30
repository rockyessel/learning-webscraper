const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/lyrics', require('./routes/lyrics'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
