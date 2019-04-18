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
var Schema = mongoose.Schema;
exports.ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
exports.CscSchema = new Schema({
    "Agent général": { type: String },
    "Nom": { type: String },
    "Hors-Québec": { type: String },
    "Indicateur FundSERV": { type: String },
    "Représentant": { type: String },
    "Nom2": { type: String },
    "Indicateur FundSERV2": { type: String },
    "Date demande": { type: Number },
    "Opération": { type: String },
    "Régime": { type: String },
    "Siège social": { type: Number },
    "Mallette - Sign a distance": { type: Number },
    "Mallette - Sign electr": { type: Number },
    "Mallette - Sign manuscrite": { type: Number },
    "Mallette - total": { type: Number },
    "Demande total": { type: Number }
});
//# sourceMappingURL=crmModel.js.map