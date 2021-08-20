import { Reapit } from '../Reapit';

export class Endpoint {
    protected reapit: Reapit
    protected endpoint: string = ''
    protected queryParams: object[] = []
    protected results: number = 25
    protected page: number = 1

    constructor(reapit: Reapit) {
        this.reapit = reapit;
    }

    /**
     * Total number of results per page.
     * @param results 
     */
    setResults(results: number) {
        this.results = results
    }

    /**
     * Set page to load.
     * @param page 
     */
    setPage(page: number) {
        this.page = page
    }

    async get() {
        this.queryParams.push(
            { 'pageSize': this.results },
            { 'pageNumber': this.page }
        )
        return await this.reapit.getClient().get(this.endpoint, { params: this.queryParams })
    }

}