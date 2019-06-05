import server from "./server";

const port = 8080;

server.listen(port, () => {
    console.log("server is listening http:localhost:" + port);
});
