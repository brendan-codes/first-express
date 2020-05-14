// imports and requires
const express = require('express');
const app = express();

// middleware to use json for http
// middleware .use() .set()
app.use(express.json());




app.get('/api/names/:id', (req, res) => {
    res.json({
        name: "Brendan",
        id: req.params.id
    })
})




// listen on the bottom
app.listen(8001, () => {
    console.log(`listening on port 8001`);
});