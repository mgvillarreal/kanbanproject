import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/health', (req: Request, res: Response) => {
  res.json({status: "OK"});
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
