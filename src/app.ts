import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import themes from './cards/router';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/', themes);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started on port 3000');
});
