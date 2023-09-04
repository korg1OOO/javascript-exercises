const findTheOldest = function(people) {
    // Calculate the age for each person
    const currentYear = new Date().getFullYear();

    const oldestPerson = people.reduce((oldest, person) => {
        const age = person.yearOfDeath
            ? person.yearOfDeath - person.yearOfBirth
            : currentYear - person.yearOfBirth;

        const oldestAge = oldest.yearOfDeath
            ? oldest.yearOfDeath - oldest.yearOfBirth
            : currentYear - oldest.yearOfBirth;

        return age > oldestAge ? person : oldest;
    });

    return oldestPerson;
};


// Do not edit below this line
module.exports = findTheOldest;
