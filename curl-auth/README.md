# OAuth2

## How to Run
`./authz-code.sh` and follow the steps.


### Authorization Code Grant Type

Copy the below url in the browswer. Note the

- CLIENT_ID : This need to be taken from the Authorization Server
- SCOPE : These scopes will be propted to the user when allowing the resources to be used
- CALLBACK_URI : At the end it will be redirected to this URL
- repsonse_type=code : This defiens what are the tokens expected back from the Authorization server.
- response_mode (optional) - This defines how the code should be sent back. default value is query string.

```
https://localhost:9443/oauth2/authorize?client_id={CLIENT_ID}&scope={SCOPE}&redirect_uri={CALLBACK_URI}&response_type=code
```

Will redirected to authencticationendpoint to get the credentials

```
https://localhost:9443/authenticationendpoint/...
```

Then will responds with a code as below

```
https://curlapp/?code=f10d0db8-4ae9-3dbf-93fd-cc91550f08b7
```

Then with this code the client can get the access_token by passing client key & secret with the code and also with grant_type=authorization_code.

```
curl -k --user {CLIEN_ID}:{CLIENT_SECRET} -d "code={CODE}&grant_type=authorization_code&client_id={CLIEN_ID}&redirect_uri={REDIRECT_URL}" https://localhost:9443/oauth2/token
```

Response

```
{"access_token":"507d10ea-99e4-39df-81ae-a23f1020007a","refresh_token":"f8e991df-9d14-3cb4-a30e-23592bd1f5cc","scope":"test11","token_type":"Bearer","expires_in":3600}
```
