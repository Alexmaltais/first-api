import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
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


export const CscSchema = new Schema({
    "Agent général": {type: String},
    "Nom": {type: String},
    "Hors-Québec": {type: String},
    "Indicateur FundSERV": {type: String},
    "Représentant": {type: String},
    "Nom2": {type: String},
    "Indicateur FundSERV2": {type: String},
    "Date demande": {type: Number},
    "Opération": {type: String},
    "Régime": {type: String},
    "Siège social": {type: Number},
    "Mallette - Sign a distance": {type: Number},
    "Mallette - Sign electr": {type: Number},
    "Mallette - Sign manuscrite": {type: Number},
    "Mallette - total": {type: Number},
    "Demande total": {type: Number}
});
