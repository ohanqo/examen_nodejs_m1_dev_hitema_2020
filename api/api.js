const express = require("express");
const bodyParser = require("body-parser");
const HttpStatus = require("http-status-codes");
const PeopleService = require("./people-service");

const app = express();
const v1 = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1", v1);

const peopleService = new PeopleService();

// To be implemented!
v1.put("/people/:id", (request, response) => {
  try {
    const id = request.params.id;
    const people = request.body;

    const potentialUpdatedPeople = peopleService.updatePeople(id, people);

    if (potentialUpdatedPeople) {
      return response.sendStatus(HttpStatus.OK);
    } else {
      return response.sendStatus(HttpStatus.NOT_FOUND);
    }
  } catch (error) {
    response.sendStatus(HttpStatus.BAD_REQUEST);
  }
});

module.exports = app;
