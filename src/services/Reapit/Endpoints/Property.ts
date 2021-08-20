import { Endpoint } from './Endpoint'
import { EndpointInterface } from './EndpointInterface'

export class Property extends Endpoint implements EndpointInterface {

    endpoint: string = 'properties'

    all(criteria?: object[]): Property {
        if (criteria) this.queryParams = criteria
        return this
    }
}