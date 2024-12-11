/* Server with ExpressJS

import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
*/

/* HTTP 
Request Vocab
GET => Request resource
POST => Sending resource(form, mail, password with submit etc.)
PUT => Update methods => Replace resource
PATCH => Update methods => Patch up a resource
example difference for put vs patch; amazon return (broken bicycle tell amazon and they have 2 options 1 is replace with new or they gonna sent the broken part which is patch)
DELETE => Delete resource


import express from "express";
const app = express();
const port = 3000;

app.get("/about", (req, res) => {
    res.sendStatus(301);
});

app.get("/", (req, res) => {

    res.send("<h1>Hello, World!</h1>");
});

app.post("/register", (req, res) => {

    res.sendStatus(201);
});

app.put("/serdar", (req, res) => {

    res.sendStatus(200);
});

app.patch("/serdar", (req, res) => {

    res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

*/

/* HTTP return codes cheat sheet

1** Hold on
2** Here you go
3** Go away
4** You fucked up
5** I fucked up 
*/

/* Express Middlewares 


*/