export interface EndpointInterface {
    endpoint: string
    all(criteria?: object[]): EndpointInterface
}