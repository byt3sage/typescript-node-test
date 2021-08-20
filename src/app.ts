require('dotenv').config()
require('axios')

import { Reapit } from "./services/Reapit/Reapit"

const token = ''
const endpoint = 'https://platform.reapit.cloud/'
let reapit: Reapit = new Reapit(endpoint, token, 'MNS')

reapit.property().all().get().then(response => console.log(response.data))