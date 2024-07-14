const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/exchange-rate', async (req, res) => {
    try {
        const { base, target } = req.query;
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${base}`);
        const rate = response.data.rates[target];
        res.json({ rate });
    } catch (error) {
        res.status(500).send('Error retrieving exchange rate');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
