"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __importStar(require("mongoose"));
var crmModel_1 = require("../models/crmModel");
var dataCsc_1 = require("./dataCsc");
var Contact = mongoose.model('Contact', crmModel_1.ContactSchema);
var Csc = mongoose.model('Csc', crmModel_1.CscSchema);
var ContactController = /** @class */ (function () {
    function ContactController() {
    }
    ContactController.prototype.getContacts = function (req, res) {
        Contact.find({}, function (err, contact) {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    };
    ContactController.prototype.addNewContact = function (req, res) {
        var newContact = new Contact(req.body);
        newContact.save(function (err, contact) {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    };
    ContactController.prototype.addNewCsc = function (req, res) {
        Csc.collection.insertMany(dataCsc_1.dataCsc, function (err, docs) {
            if (err) {
                return console.error(err);
            }
            else {
                console.log('Multiple documents added to Csc collection');
            }
        });
    };
    ContactController.prototype.getContactWithID = function (req, res) {
        Contact.findById(req.params.contactId, function (err, contact) {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    };
    ContactController.prototype.updateContact = function (req, res) {
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, function (err, contact) {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    };
    ContactController.prototype.deleteContact = function (req, res) {
        Contact.remove({ _id: req.params.contactId }, function (err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!' });
        });
    };
    return ContactController;
}());
exports.ContactController = ContactController;
//# sourceMappingURL=crmController.js.map