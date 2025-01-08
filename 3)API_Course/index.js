/* Application Programming Interface (API):
Definition: A set of rules and protocols that define how different software can interact with each other.

Examples: program A and program B which they have different functionality and they need to communicate, you need api in between to interact each other.
- GET request from your server to the other websiteand get response from that data, via API
- POST request from your server to the mailchimp(email database to store collected email) and in return get response with 200 code, 
in the meantime mailchimp API defines a structure for the data you want to send, and also it tells you what kind of responses you can expect in which kind of situations.

Different types of APIs; GraphQL,SOAP,REST etc. essentially they have different architectural styles.
*/

/* {REST:API}
It's APIs that follow a particular set of rules. 
Most important rule of that is use the HTTP Protocol to interact with the API. (GET,POST,PUT,PATCH,DELETE)
*/

/* Structring API 
What we are doing in our local projects:
1. The process of a frontend application making a GET request to a private API hosted on a server. 
2. The server processes the request and sends a response back to the frontend application.
3. This showcases the interaction between the frontend, the API, and the backend server.

--- API Usage in Projects ---
// Example:
// Fetching data from a REST API in a local project:
// - Frontend: Makes a GET request to retrieve information from the server.
// - Backend: Processes the request, queries the database (if needed), and sends a response.

1.	Your Server: Sends a GET request to a Public API hosted on someone else’s server.
2.	Public API: The API acts as an intermediary, defining the rules for how your server can interact with someone else’s server.
3.	Someone Else’s Server: Processes the request received through the Public API and sends a response back to your server.
4.	Response: The data is sent back from the other server to your server through the Public API.

This demonstrates how servers communicate with external APIs to fetch or exchange data.

API Endpoints
BaseURL/Endpoint -> /random /filter etc.

Query Parameters
BaseURL/endpoint?query=value&query2=value -> key value pair / second query and so forth has to be connected with "&"

Path Parameters
BaseURL/endpoint/{path-parameter} -> identifiying resource
*/

/* JSON (JavaScript Object Notation) : The way to send information, readable and efficient
packed version of javascript object => JSON => {"key":value,"key2":value2} -> flatpack notation -> for more readable version go to json viewer

JS Object to JSON => const jsonData = JSON.stringify(data); (data is the JS object)
JSON to JS Object => const data = JSON.parse(jsonData);

*/

/* Server-side API Requests (Making requests from your server using Node and Axios)
Your Server -> {GET request} -> Provider -> {Response} -> Your Server

import https from "https";

app.get...
    const options = {
        hostname: "baseURL",
        path: "/endpoint",
        method: "GET",
    };

    const request = https.request(options, (response) => {
        let data = "";
        response.on("data", (chunk) => {
            data += chunk;
        )};
        });

        .
        .
        .
        .

        This was native module, and its quite long so rather than that we can use something call axios method

import axios from "axios";
app.get ("/", async (req, res) => {
    try {
        const response = await axios.get("baseURL");  // Can be use either .then or async await, in order to handle the response. Because what it has been tried here is to render a home page and to provide it with some activity data, await to wait for that to finish and then go ahead and res.render the index page.
        res.render("index.ejs", { activity: respose.data });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.status(500).send("Failed to fetch activity. Please try again.");
    }
    });

*/

/* API Authentication

0. No Authentication; example bored-API, public API -> it can be add rate-limit (#request/min) (some safety measure)
1. Basic Authentication; username&password, authenticate yourself to the API provider. It is usually done with Base64 Encoding
2. API Key Authorisation; Authorisation is something that allows you to use API, Authentication is something that allows you to be identified as an user to the API provider.
Sometimes API Key has to be in header or query parameters, that based on the provider docs.
3. Token Based Authentication; Username/password -> Token -> API (so there is not direct connection between API and sensitive infos.) OAUTH kind of industry standart

 */