import express, { Request, Response } from 'express';

const app = express();
const port = 8080;

app.get('/', (req: Request, res: Response) => {
    res.send('');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
