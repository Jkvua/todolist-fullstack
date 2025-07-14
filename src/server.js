const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

app.use(cors({
  origin: 'http://191.52.55.72:30444',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: false
}));

app.use(express.json());
app.use(router);

const PORT = 3333
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
