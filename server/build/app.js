"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var App = /** @class */ (function () {
    function App() {
        this.express = express_1.default();
        this.middlewares();
        this.database();
        this.routes();
    }
    App.prototype.middlewares = function () {
        this.express.use(express_1.default.json());
        this.express.use(cors_1.default());
    };
    App.prototype.database = function () {
        '';
    };
    App.prototype.routes = function () {
        this.express.get('/', function (request, response) {
            return response.send('Hello World');
        });
    };
    return App;
}());
exports.default = new App().express;
