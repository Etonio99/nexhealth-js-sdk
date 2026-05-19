# NexHealth JS SDK

An unofficial NexHealth JavaScript/TypeScript SDK for developing software with the NexHealth API.

## Getting Started

To start with the client, you will want to import `NexHealthClient` and create a new instance of it. The constructor takes an object with an API key and an optional subdomain.

```javascript
import { NexHealthClient } from 'nexhealth-js-sdk';

const nexhealth = new NexHealthClient({
  apiKey: 'my-api-key',
  subdomain: 'my-practice-subdomain',
});
```

### Subdomains

The subdomain is cached directly on the client and will automatically be included in any API calls the client makes, if available.

If you ever need to change the subdomain, you can edit it directly or clear it:

```javascript
nexhealth.subdomain = 'my-other-practice-subdomain';
nexhealth.subdomain = undefined;
nexhealth.clearSubdomain();
```

### Making API Calls

The NexHealthClient object will make asynchronous fetch calls to the specified endpoint. You first specify the version of the NexHealth API you want to call, then the endpoint, and finally the method.

```javascript
const response = await nexhealth.v2.patients.get(123456789);
```

The response will be a `NexHealthResponse<T>` object where `T` is the type of the `data` object returned by the NexHealth API (for example, the v2 GET patient endpoint will use the `V2.Patient` type).

```javascript
type NexHealthResponse<T> = {
  data: T;
  count?: number;
  page_info?: NexHealthApiPageInfo;
};
```

The `count` and `page_info` values will appear when querying for a list of objects (example: using `nexhealth.v2.patients.list()`). `count` will contain the total number of entries and `page_info` will contain pagination information (structure varies by NexHealth API version).

## Methods

### Create

_Makes a `POST` request._

Takes query parameters and body parameters:

```javascript
const response = await nexhealth.v2.patients.create(
  { location_id: 12345 },
  { user: { first_name: 'Jane', last_name: 'Doe', email: 'jane@example.com' } }
);
```

### Delete

_Makes a `DELETE` request._

Takes the resource ID and optional query parameters:

```javascript
await nexhealth.v2.appointmentTypes.delete(54321);
```

### Get

_Makes a `GET` request._

Takes the resource ID and optional query parameters:

```javascript
const response = await nexhealth.v2.patients.get(123456789);
```

### List

_Makes a `GET` request and the `data` object in the response will always be an array._

Takes query parameters:

```javascript
const response = await nexhealth.v2.appointments.list({
  start_date: '2026-01-01',
  end_date: '2026-01-31',
  location_id: 12345,
});
```

The `list` method response will contain `page_info`.

### ListAll

_Makes a `GET` request and the `data` object in the response will always be an array._

This is a custom method specific to this SDK. It will automatically paginate through all available pages and return a NexHealthResponse object where `data` is a combined array of all entries and `count` is the total number of entries. `page_info` will not be included.

```javascript
const response = await nexhealth.v2.appointments.listAll({
  start_date: '2026-01-01',
  end_date: '2026-01-31',
  location_id: 12345,
});
```

### Update

_Makes a `PATCH` request._

Takes the resource ID and body parameters:

```javascript
const response = await nexhealth.v2.appointments.update(123456789, {
  start_time: '2025-06-01T10:00:00Z',
});
```

### Nested Resources

Some endpoints expose sub-resources as nested objects. These methods take the parent resource ID as their first argument, followed by optional query parameters:

```javascript
const response = await nexhealth.v2.patients.insuranceCoverages.list(123456789);
const response = await nexhealth.v2.appointments.descriptors.list(987654321);
```

## Error Handling

If the NexHealth API returns an error response (`code=false`), the NexHealthClient will throw a `NexHealthAPIError` containing a primary error message, an array of error strings from the NexHealth API response, and a status code.

```javascript
import { NexHealthClient, NexHealthAPIError } from 'nexhealth-js-sdk';

try {
  const response = await nexhealth.v2.patients.get(123456789);
} catch (error) {
  if (error instanceof NexHealthAPIError) {
    console.error(error.status); // HTTP status code
    console.error(error.message); // primary error message
    console.error(error.errors); // array of error strings from the API
  }
}
```

## Types

All custom types can be imported through an abbreviated version name of the API. All query parameters, body parameters, and response objects are typed.

```typescript
import { V2, V2024 } from 'nexhealth-js-sdk';

const params: V2.CreatePatientQueryParams = {
  location_id: 12345;
};
```

## Available Endpoints

### v2.2.2:

| Endpoint             | Methods                                                          |
| -------------------- | ---------------------------------------------------------------- |
| AppointmentSlots     | `list`                                                           |
| AppointmentTypes     | `create`, `delete`, `get`, `list`, `update`, `descriptors.list`  |
| Appointments         | `create`, `get`, `list`, `listAll`, `update`, `descriptors.list` |
| Availabilities       | `create`, `delete`, `get`, `list`, `listAll`, `update`           |
| DocumentTypes        | `get`, `list`                                                    |
| Institutions         | `get`, `list`                                                    |
| Locations            | `get`, `list`, `descriptors.list`                                |
| NexStaff             | `list`, `listAll`                                                |
| Operatories          | `get`, `list`, `listAll`                                         |
| PatientAlerts        | `create`, `get`, `list`, `update`                                |
| PatientDocuments     | `create`, `list`                                                 |
| PatientRecalls       | `get`, `list`, `listAll`                                         |
| Patients             | `create`, `get`, `list`, `listAll`, `insuranceCoverages.list`    |
| Procedures           | `list`, `listAll`                                                |
| Providers            | `get`, `list`, `listAll`                                         |
| RecallTypes          | `get`, `list`                                                    |
| SyncStatuses         | `list`                                                           |
| WebhookEndpoints     | `create`, `delete`, `list`, `update`                             |
| WebhookSubscriptions | `create`, `delete`, `list`, `update`                             |

### v20240412

| Endpoint              | Methods                                                          |
| --------------------- | ---------------------------------------------------------------- |
| AdjustmentTypes       | `get`, `list`, `listAll`                                         |
| Adjustments           | `create`, `get`, `list`, `listAll`                               |
| Appointments          | `create`, `get`, `list`, `listAll`, `update`, `descriptors.list` |
| AvailableSlots        | `list`                                                           |
| Charges               | `get`, `list`, `listAll`                                         |
| ClinicalNotes         | `list`, `listAll`                                                |
| FeeScheduleProcedures | `list`, `listAll`                                                |
| FeeSchedules          | `get`, `list`, `listAll`                                         |
| GuarantorBalances     | `get`, `list`, `listAll`                                         |
| InsuranceBalances     | `get`, `list`, `listAll`                                         |
| InsuranceClaims       | `get`, `list`, `listAll`                                         |
| InsuranceCoverages    | `get`, `list`, `listAll`                                         |
| InsurancePlans        | `get`, `list`, `listAll`                                         |
| Onboardings           | `create`, `get`, `list`, `listAll`                               |
| Operatories           | `list`, `listAll`                                                |
| PatientRecalls        | `list`, `listAll`                                                |
| Patients              | `create`, `get`, `list`, `listAll`                               |
| PaymentTypes          | `get`, `list`, `listAll`                                         |
| Payments              | `create`, `get`, `list`, `listAll`                               |
| Procedures            | `get`, `list`, `listAll`                                         |
| ProviderSearch        | `list`                                                           |
| Providers             | `get`, `list`, `listAll`                                         |
| TreatmentPlans        | `get`, `list`, `listAll`                                         |
| WebhookSubscriptions  | `create`, `delete`, `list`, `update`                             |
| WorkingHourLabels     | `list`, `listAll`                                                |
| WorkingHours          | `create`, `delete`, `get`, `list`, `listAll`, `update`           |
