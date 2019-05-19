import {IncomingMessage, OutgoingMessage} from "http";

const http = require("http")

http.createServer((req: IncomingMessage, res: OutgoingMessage) => {
    res.write("hello world")
    res.end()
}).listen(8088)

console.log("hello world")
