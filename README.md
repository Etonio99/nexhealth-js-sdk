# NexHealth JS SDK

This package is in an unstable phase and is still in progress. However, the v2 version of the NexHealth API is fully completed and can be used.

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
