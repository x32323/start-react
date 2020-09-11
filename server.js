import express from 'express';
import fallback from 'express-history-api-fallback';
import path from "path"

const app = new express();

let port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});

//To load compiled react UI, and set router options
const root = path.resolve('./build');
app.use(express.static(root));
app.use(fallback('index.html', {root}))



