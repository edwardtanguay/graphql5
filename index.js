import express from 'express';

const app = express();
const port = 3006;

app.get('/', (req, res) => {
	res.send('<h3>Site works.</h3>');
});

app.listen(port, () => console.log(`server is running at http://localhost:${port}`));