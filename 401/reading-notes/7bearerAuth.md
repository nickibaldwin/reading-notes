# Code 401: Advanced Software Development in Full-Stack Javascript

## Reading 07: Bearer Authentication

1. Write the following steps in the correct order:
    - Register your application to get a client_id and client_secret
    - Ask the client if they want to sign in via a third party
    - Make a request to a third-party API endpoint
    - Redirect to a third party authentication endpoint
    - Make a request to the access token endpoint
    - Receive access token
    - Receive authorization code

1. What can you do with an authorization code?
    - Typically used for commerce to confirm funds available for purchases- authorizing the transaction.

1. What can you do with an access token?
    - "Access tokens are the thing that applications use to make API requests on behalf of a user. The access token represents the authorization of a specific application to access specific parts of a user’s data." [OAuth](https://www.oauth.com/oauth2-servers/access-tokens/#:~:text=Access%20tokens%20are%20the%20thing,in%20transit%20and%20in%20storage.)

1. What’s a benefit of using OAuth instead of your own basic authentication?
    - OAuth is an open standard for authorization. [Okta Developer](https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth)

## Vocab:

    - Client ID: username

    - Client Secret: password
    
    - Authentication Endpoint: Allows a user to obtain an auth code, to be able to post to their website.
  [OAuth](https://www.oauth.com/oauth2-servers/access-tokens/#:~:text=Access%20tokens%20are%20the%20thing,in%20transit%20and%20in%20storage.)
    
    - Access Token Endpoint: Authorization of a specific app to access specific parts of users data. 
  [OAuth](https://www.oauth.com/oauth2-servers/access-tokens/#:~:text=Access%20tokens%20are%20the%20thing,in%20transit%20and%20in%20storage.)
  
    -API Endpoint: "Simply put, an endpoint is one end of a communication channel. When an API interacts with another system, the touchpoints of this communication are considered endpoints. For APIs, an endpoint can include a URL of a server or service. Each endpoint is the location from which APIs can access the resources they need to carry out their function." 
  [SmartBear](https://smartbear.com/learn/performance-monitoring/api-endpoints/)
    
    - Authorization Code: "An authorization code is an alphanumeric password that authorizes its user to purchase, sell or transfer items, or to enter information into a security-protected space."
  [Investopedia](https://www.investopedia.com/terms/a/authorization-code.asp#:~:text=What%20Is%20an%20Authorization%20Code,into%20a%20security%2Dprotected%20space.)

    - Access Token: The thing API's use to make an API request on behalf of the user. 
  [OAuth](https://www.oauth.com/oauth2-servers/access-tokens/#:~:text=Access%20tokens%20are%20the%20thing,in%20transit%20and%20in%20storage.)