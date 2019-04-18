import {Request, Response} from "express";

import { ContactController } from "../controllers/crmController";


export class Routes {
    
    public contactController: ContactController = new ContactController();



    public routes(app: any): void {
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })

        // Contact 
        // Create a new contact
        app.route('/contacts')
        .post(this.contactController.addNewContact);

        app.route('/csc')
        .post(this.contactController.addNewCsc);

        //Get all contacts
        app.route('/contacts')
        .get(this.contactController.getContacts)

        //edit a specific contac
        app.route('/contacts/:contactId')
        .get(this.contactController.getContactWithID)
        .put(this.contactController.updateContact)
        .delete(this.contactController.deleteContact)

    }
}