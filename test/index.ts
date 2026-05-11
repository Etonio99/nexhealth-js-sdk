// Run this with node --env-file=.env test/index.ts

import { NexHealthClient } from '../dist/index.js';
import type { ListLocationsQueryParams } from '../src/types/v2/index.js';

async function main() {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return;
  }
  const nexhealth = new NexHealthClient(apiKey);

  const params: ListLocationsQueryParams = {
    subdomain: 'nexhealthsmiles',
  };

  const response = await nexhealth.v2.locations.list(params);

  console.log('RESPONSE:', response);
}

// const response = await nexhealth.v2.patients.listAll({
//   subdomain: 'nexhealthsmiles',
//   location_id: 19617,
//   name: 'Ethan',
//   include: ['address', 'insurance_coverages'],
// });

// response.data.patients.forEach((patient) => {
//   console.log(patient);
// });

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

main();
