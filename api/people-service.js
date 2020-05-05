const fs = require("fs");
const notFound = -1;

module.exports = class PeopleService {
  constructor() {
    this.peoples = JSON.parse(
      fs.readFileSync(__dirname + "/people.json", "utf8")
    );
  }

  updatePeople(id, people) {
    const intId = parseInt(id, 10);
    const peopleIndexToUpdate = this.peoples.findIndex((p) => p.id === intId);

    if (peopleIndexToUpdate !== notFound) {
      this.peoples[peopleIndexToUpdate] = people;
      return this.peoples[peopleIndexToUpdate];
    }
  }

  getPeople(filters) {
    // To be implemented!
  }
};
