import {IncomingMessage, OutgoingMessage} from "http";

const http = require("http");

export default http.createServer((req: IncomingMessage, res: OutgoingMessage) => {
    res.write("hello world");
    res.end();
});
