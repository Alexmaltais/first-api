import * as mongoose from 'mongoose';
import { ContactSchema, CscSchema } from '../models/crmModel';
import { Request, Response } from 'express';
import { dataCsc } from './dataCsc'

const Contact = mongoose.model('Contact', ContactSchema);
const Csc = mongoose.model('Csc', CscSchema);

export class ContactController{

    public getContacts (req: Request, res: Response) {           
        Contact.find({}, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public addNewContact (req: Request, res: Response) {                
        let newContact = new Contact(req.body);
    
        newContact.save((err, contact) => {
            if(err){
                res.send(err);
            }    
            res.json(contact);
        });
    }

    public addNewCsc (req: Request, res: Response) {
        Csc.collection.insertMany(dataCsc, function (err, docs){
            if (err){
                return console.error(err);
            } else {
                console.log('Multiple documents added to Csc collection')
                res.send('Multiple documents added to Csc collection')
            }
        });
    }

    public getContactWithID (req: Request, res: Response) {           
        Contact.findById(req.params.contactId, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public updateContact (req: Request, res: Response) {           
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public deleteContact (req: Request, res: Response) {           
         Contact.remove({ _id: req.params.contactId }, (err) => {
             if(err){
                 res.send(err);
             }
             res.json({ message: 'Successfully deleted contact!'});
         });
    }

}