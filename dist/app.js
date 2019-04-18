"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var crmRoutes_1 = require("./routes/crmRoutes");
//import * as mongoose from "mongoose";
var mongoose = require('mongoose');
var App = /** @class */ (function () {
    function App() {
        this.routePrv = new crmRoutes_1.Routes();
        this.mongoUrl = 'mongodb://localhost/CRMdb';
        this.app = express_1.default();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    App.prototype.config = function () {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    App.prototype.mongoSetup = function () {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map