# NexHealth JS SDK

---

This package is in an unstable phase and is still in progress. However, the v2 version of the NexHealth API is fully completed and can be used.

Example:
``` javascript
const nexhealth = new NexHealthClient(apiKey);
const response = await nexhealth.v2.patients.get(123456789, {
    subdomain: "my-demo-practice",
});
const patientData = response.data;
```