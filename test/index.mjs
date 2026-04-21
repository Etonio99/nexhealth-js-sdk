import { NexHealthClient } from '../dist/index.js';

const nexhealth = new NexHealthClient('dXNlci02MTQtc2FuZGJveA.JP4-9VdVHHXEyXlSA1dDtFgaOAH8psJW');

const response = await nexhealth.v2.patients.get(306458777, {
    subdomain: "nexhealthsmiles"
});

const response = await nexhealth.v2024.patients.get(306458777, {
    subdomain: "nexhealthsmiles"
});

// const response = await nexhealth.v2.patients.getPatients({
//     subdomain: "nexhealthsmiles",
//     location_id: 19617,
// });

console.log(response);