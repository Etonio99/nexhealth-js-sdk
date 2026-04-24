// Run this with node --env-file=.env test/index.mjs

import { NexHealthClient } from '../dist/index.js';

// eslint-disable-next-line no-undef
const nexhealth = new NexHealthClient(process.env.API_KEY);

const response = await nexhealth.v2.patients.listAll({
  subdomain: 'nexhealthsmiles',
  location_id: 19617,
  name: 'Ethan',
  include: ['address', 'insurance_coverages'],
});

response.data.patients.forEach((patient) => {
  console.log(patient);
});

// const response = await nexhealth.v2024.patients.create({
//     subdomain: "nexhealthsmiles",
//     location_id: 19617,
// }, {
//     provider: {
//         provider_id: 142749488,
//     },
//     patient: {
//         first_name: "Ultra",
//         last_name: "Ethan",
//         email: "ultraethan@ethanisultra.ohyeah",
//         bio: {
//             date_of_birth: "2000-01-01",
//             phone_number: "0000000000",
//         }
//     },
//     return_existing_if_match: true,
// });

// const response = await nexhealth.v2.patients.getInsuranceCoverages(264511006, {
//     subdomain: "nexhealthsmiles",
// })

console.log('RESPONSE:', response);
