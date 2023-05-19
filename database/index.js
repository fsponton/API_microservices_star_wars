const server = require("./src/server");

// const store = require("./src/config/DDBB")

// Character.list()
//     .then((res) => console.log(res))

// Character.getById("200")
//     .then((res) => console.log(res))

// Character.insert({
//     _id: "201",
//     name: "Fran Sponton",
//     birth_year: "1988"
// }).then((res) => console.log(res))


// Character.list().then((res) => console.log(res))

// store["Character"].list().then((res) => console.log(res))

// store["Planet"].list().then((res) => console.log(res))

//
// store["Character"].create({ "_id": "99999", "name": "dante" }).then((res) => console.log(res))

// store["Character"].getById(99999).then((res) => console.log(res))

const PORT = 8004
server.listen(PORT, () => {
    console.log(`DATABASE listening on port ${PORT}`);
});



