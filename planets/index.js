const server = require("./src/server");

const PORT = 8003
server.listen(PORT, () => {
    console.log(`Server PLANETS listening on port ${PORT}`);
});
