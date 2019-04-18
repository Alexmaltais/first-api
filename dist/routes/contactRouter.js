const express = require('express');
//const contactModel = require('../models/contactModel');
const Contact = require('../models/contactModel');
const contactRouter = express.Router();
//const bodyParser = require('body-parser');
//const jsonParser = bodyParser.json();

contactRouter.route('/')
    .get((req, res) => {
        Contact.find({}, (err, contacts) => {
            res.json(contacts)
        })  
    })
    .post((req,res) => {
        let contact = new Contact(req.body);
        contact.save()
        res.status(201).send(contact)
    })

    // .post(jsonParser, (req,res) => {
    //     let contact = new Contact({
    //         firstName: "Alexandre",
    //         lastName: "Maltais"
    //     });
    //     contact.save()
    //     res.status(201).send(contact)
    // })


contactRouter.route('/:contactId')
    .get((req, res) => {
        Contact.findById(req.params.contactId, (err, contact) => {
            res.json(contact)
        })  
    })

module.exports = contactRouter;