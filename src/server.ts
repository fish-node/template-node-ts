import {IncomingMessage, OutgoingMessage} from "http";

import http from "http";

export default http.createServer((req: IncomingMessage, res: OutgoingMessage) => {
    res.write("hello world");
    res.end();
});
