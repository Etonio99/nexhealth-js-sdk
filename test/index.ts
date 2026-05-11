// Run this with node --env-file=.env test/index.ts

import { NexHealthClient } from '../dist/index.js';
import type {
  CreateAppointmentBodyParams,
  CreateAppointmentQueryParams,
} from '../src/types/v2/index.js';

async function main() {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return;
  }
  const nexhealth = new NexHealthClient(apiKey);

  const queryParams: CreateAppointmentQueryParams = {
    subdomain: 'nexhealthsmiles',
    location_id: 19617,
  };

  const bodyParams: CreateAppointmentBodyParams = {
    appt: {
      patient_id: 385394006,
      provider_id: 239571466,
      start_time: '2026-05-12T16:30:00Z',
      end_time: '2026-05-12T17:00:00Z',
      operatory_id: 23,
    },
  };

  const response = await nexhealth.v2.appointments.create(
    queryParams,
    bodyParams
  );

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
