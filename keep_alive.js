const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Arjun here!'));

app.listen(port, () => console.log(`Arjun is listening to http://localhost:${port}`));