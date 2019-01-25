"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // this shim is required
const routing_controllers_1 = require("routing-controllers");
const typeorm_1 = require("typeorm");
// creates express app, registers all controller routes and returns you express app instance
// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
typeorm_1.createConnection()
    .then((connection) => __awaiter(this, void 0, void 0, function* () {
    const app = routing_controllers_1.createExpressServer({
        routePrefix: "/api",
        controllers: [__dirname + "/controllers/*.ts"]
    });
    // run express application on port 3000
    app.listen(3000);
}))
    .catch(error => console.log("TypeORM connection error: ", error));
//# sourceMappingURL=app.js.map