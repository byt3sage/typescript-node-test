import { AxiosInstance } from "axios";
import { Endpoint } from "./Endpoints/Endpoint";
import { Property } from "./Endpoints/Property";

let axios = require('axios');
export class Reapit {
    baseUri: string
    apiKey: string
    customer: string
    apiVersion: string

    client: any

    constructor(baseUri?: string, apiKey?: string, customer: string = 'sbox', apiVersion: string = '2020-01-31') {
        this.baseUri = baseUri ?? <string>process.env.REAPIT_API_URI
        this.apiKey = apiKey ?? <string>process.env.REAPIT_API_KEY
        this.customer = customer
        this.apiVersion = apiVersion
    }

    getClient(): AxiosInstance {
        if (this.client) return this.client
        return this.client = axios.create({
            baseURL: this.baseUri,
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.apiKey,
                'reapit-customer': this.customer,
                'api-version': this.apiVersion
            }
        })
    }

    property(): Property {
        return new Property(this)
    }
}