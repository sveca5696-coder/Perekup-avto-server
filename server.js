const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/update', (req, res) => {
    console.log('Данные от игры:', req.body);
    res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log('Сервер запущен на порту ' + PORT);
});
