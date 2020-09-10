import express from 'express';
import fallback from 'express-history-api-fallback';
import path from "path"
import cors from 'cors';
import bodyParser from 'body-parser';

const app = new express();
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});

const root = path.resolve('./build');

app.use(express.static(root));
app.use(fallback('index.html', {root}))
//To load compiled react UI


