// imports and requires
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// connects to db and suppress error messages
mongoose.connect('mongodb://localhost/my-first-mongoose', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// creates structure for the documents in our collections
const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "Your dog's name must be 2 or more characters!"]
    },
    color: String,
}, {timestamps: true})

// creates the model that gives us CRUD access to our
const Dog = mongoose.model("Dog", DogSchema);


app.get('/api/dogs', (req, res)=> {
    Dog.find()
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

app.post('/api/dogs', (req, res) => {
    Dog.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
})



// listen on the bottom
app.listen(8001, () => {
    console.log(`listening on port 8001`);
});