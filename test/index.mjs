// Run this with node test/index.mjs

import { NexHealthClient } from '../dist/index.js';

const nexhealth = new NexHealthClient('dXNlci02MTQtc2FuZGJveA.JP4-9VdVHHXEyXlSA1dDtFgaOAH8psJW');

const response = await nexhealth.v2024.patients.list({
    subdomain: "nexhealthsmiles",
    location_id: "19617",
});

console.log(response);
