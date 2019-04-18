const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const contactRouter = require('./dist/routes/contactRouter');

//CONNECT TO MongoDB
mongoose
    .connect('mongodb://localhost/CRMdb', { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch(err => {
        console.log(err);
        console.log('MongoDB Not Connected');
    });
    

//CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ROUTES
app.use("/contacts", contactRouter);


//RUN SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));



//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

//app.get("/contacts/:contactId", (req, res) => {
    // Contact.findById(req.params.contactId, (err, contact) => {
    //     res.json(contact)
    // })  
//})

// app.post('/contacts', (req,res) => {
//     let contact = new Contact(req.body);
//     contact.save()
//     res.status(201).send(contact)
// })

