import express from 'express'

const app = express();

const PORT = 8000;

app.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "Express web app is running successfully on AWS!"
    });
});

app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}/`);
});
