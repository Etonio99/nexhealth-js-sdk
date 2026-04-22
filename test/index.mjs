// Run this with node --env-file=.env test/index.mjs

import { NexHealthClient } from '../dist/index.js';

const nexhealth = new NexHealthClient(process.env.API_KEY);

const response = await nexhealth.v2.patients.listAll({
    subdomain: "nexhealthsmiles",
    location_id: "19617",
    name: "Ethan",
});

console.log("RESPONSE:", response);
