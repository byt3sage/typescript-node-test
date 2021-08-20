"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reapit = void 0;
var Property_1 = require("./Endpoints/Property");
var axios = require('axios');
var Reapit = /** @class */ (function () {
    function Reapit(baseUri, apiKey, customer, apiVersion) {
        if (customer === void 0) { customer = 'sbox'; }
        if (apiVersion === void 0) { apiVersion = '2020-01-31'; }
        this.baseUri = baseUri !== null && baseUri !== void 0 ? baseUri : process.env.REAPIT_API_URI;
        this.apiKey = apiKey !== null && apiKey !== void 0 ? apiKey : process.env.REAPIT_API_KEY;
        this.customer = customer;
        this.apiVersion = apiVersion;
    }
    Reapit.prototype.getClient = function () {
        if (this.client)
            return this.client;
        return this.client = axios.create({
            baseURL: this.baseUri,
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.apiKey,
                'reapit-customer': this.customer,
                'api-version': this.apiVersion
            }
        });
    };
    Reapit.prototype.property = function () {
        return new Property_1.Property(this);
    };
    return Reapit;
}());
exports.Reapit = Reapit;
