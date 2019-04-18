"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crmController_1 = require("../controllers/crmController");
var Routes = /** @class */ (function () {
    function Routes() {
        this.contactController = new crmController_1.ContactController();
    }
    Routes.prototype.routes = function (app) {
        app.route('/')
            .get(function (req, res) {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        // Contact 
        // Create a new contact
        app.route('/contacts')
            .post(this.contactController.addNewContact);
        app.route('/csc')
            .post(this.contactController.addNewCsc);
        //Get all contacts
        app.route('/contacts')
            .get(this.contactController.getContacts);
        //edit a specific contac
        app.route('/contacts/:contactId')
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map