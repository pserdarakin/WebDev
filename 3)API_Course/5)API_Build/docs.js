/* Build API
Rapid API: hosting api website 

What it makes API valuable - Monetised APIs;
1) Data Collection: Large collection of pasta recipes, if you have weather station etc.
2) Algorithm / Service: ChatGPT collecting and training all the data from the internet to the one model and distrubiting via API
3) Simplified Interface: Order a pizza, (Domino's Pizza API)

Private / Internal APIs: Its something we all use when we create backend for a project and its not supported for outside.
*/

/* {REST:API} Rules

1. HTTP Methods (What makes an API RESTful? It uses http methods(GET, POST, PUT, PATCH, DELETE), you used to interact with API)

2. JSON Output: 
- It should have a standard data format that it responds with JSON or something like XML.
- This is the representation part of the Representational State Transfer. Resources are represented in a spesific format like JSON, and that is sent in response to the client.

3. Client & Server: in Restful Apis are completely separate; They are not on the same system or in the same file and they are able to message each other over a network. In order to make requests and also to get back responses.
So, this part of the RESTful API architecture allows each side to be able to scale independently from each other and they can evolve and be completely built separately by different people, which means that the RESTful API allows the whole system to scale very easily.

4. Stateless: 
- Each request from the client to the server should contain all the information that's needed to understand and process the request.
- Server shouldn't be storing any sort of client side, state or client side data between the requests.
- Each single request can be completed, and each single response is also complete without need to know what happened previously. 
- Client --(Request)-> Server --(Response)-> 
So every single time the client makes a request to the server, it contains all of the information that the server needs in order to figure out what to respond back, and the server doesnt need to check
This rule allows the server to serve many clients, and requests.

5. Resource-Based: API is centered around resources.
- It uses a Unique Resource Identifier, also known as a Resource Locator // URI or URL in order to locate spesific resources. 
- URL is simply an andress for a particular resource, and it's a type of a URI. It identifies that resource in the API.

Overall, the Internet, the World Wide Web is considered one of the most successful implementations of RESTful architecture, cause we have our resources located in URLs. This is how we can identify what it is we want to access. 
- We work and interact with the server through and API using HTTP standard protocol
- The responses we get back are standard data formats such as JSON, XML, JS, HTML.
- We have a strict client/server separation. Client: the person who's using the browser // Server: the computer that holds all of the data that is needed to be served when somebody requests a particular web page.
- Internet is stateless: Every single request to a web page contains all of the information that's required in order to determine what web page to send back.
*/

/* Routes Explanations;

Challenge 1:
app.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json(jokes[randomIndex]);
});

app.get;coming from express
"/random"; route/endpoint
(req,res); callback, what should happen when this request comes through, what we want to do is tap in to the request and the response object, and we want to get hold of a random number by using math.random() and multiply, that will response by using res.json
res.json; res is the response and .json is simply a way of converting our data here, which is in the format of a JavaScript Object into a JSON object and returning that back out as the output.
res.json(JS Object)

.../jokes/:id ; us to be able to tap into a URL or a Path Parameter. So can be specify that in Postman by going to the Params tab / Path var and assign key:value = ../jokes/2

Challenge 2:
app.get("/jokes/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const foundJoke = jokes.find((joke) => joke.id === id); //“Search through the jokes list and locate the specific joke object where the id property of the joke matches the id value provided as input.”
    res.json(foundJoke);    
});

app.get() in order to address when we get a GET request to our server,
and that GET request matches this endpoint/jokes/particular id

When we get hold of that id with above process and via req.params.id this is how we access any of the URL or path parameters in Express.
Reminder; req.params Params is in the endpoint URL(/jokes/:id), and req.query Query comes after the question mark(?id=2)
Arrow functions allow you to return a value implicitly. Implicit means that you don't have to use the return keyword if the value is directly after the arrow => ‍ ‍ However, if you use the curly brackets, you must have a return statement.

.find(); array.find(callback(which should return true on a particular condition)) 

Challenge 3: 
app.get("/filter", (req, res) => {
  const type = req.query.type;
  const findJoke = jokes.filter((joke) => joke.jokeType === type); filter method on array in order to pass in a callback in (joke) ===> So (joke) will go through each element inside of the "jokes" array and looking for match "=>" if joke.jokeType is equal to type is requested by above line.
  res.json(findJoke);
});
type by query parameters so you needed to check the api docs cause there is a note a query params for "type".
*/

/* 6)API_Blog Project
There 2 servers running simultaneously;
- one from server.js which is going to act as the back-end that makes the API requests. port 3000 (backend #1 Makes API requests) / example; somebody using your API and building a back-end.
- the other one index.js which is going to be our back-end for our actual API. port 4000 (backend #2 Your API responds). This is the one that actually responds to the API requests from external servers.


*/