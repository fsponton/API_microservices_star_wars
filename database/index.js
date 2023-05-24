const server = require("./src/server");

const PORT = 8004

server.listen(PORT, () => {
    console.log(`DATABASE listening on port ${PORT}`);
});



