// app.ts

import * as express from 'express';
import { ConfidentialClientApplication, AuthenticationResult, ClientCredentialRequest } from '@azure/msal-node';
import { Client } from '@microsoft/microsoft-graph-client';

// Constants for your application
const clientId = 'YOUR_APP_ID';
const clientSecret = 'YOUR_APP_SECRET';
const tenantId = 'YOUR_TENANT_ID';
const scope = ['https://graph.microsoft.com/.default'];

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    // Authenticate with the Microsoft Identity platform
    const cca = new ConfidentialClientApplication({
      auth: {
        clientId,
        authority: `https://login.microsoftonline.com/${tenantId}`,
        clientSecret,
      },
    });

    const authResult: AuthenticationResult = await cca.acquireTokenByClientCredential({
      scopes: scope,
    });

    // Use the obtained token to create a Graph API client
    const client = Client.initWithMiddleware({
      authProvider: (done) => {
        done(null, authResult.accessToken);
      },
    });

    // Fetch user information
    const user = await client.api('/me').get();

    res.json(user);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
