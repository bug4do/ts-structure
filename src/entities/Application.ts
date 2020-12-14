import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

class Application {

    public server: express.Application;
    public port: number = 80;

    constructor() {
        this.server = express();
        this.load(this.server);
    }

    load(server: express.Application): void {
        this.middlewares(server);
    }

    middlewares(server: express.Application):void {
        // Body parser
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: false }));

        // Cors
        server.use(cors());
    }

}

export default new Application();