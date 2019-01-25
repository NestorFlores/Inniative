"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../persistence/entity/user.entity");
let UserController = class UserController {
    constructor() {
        this.repository = typeorm_1.getManager().getRepository(user_entity_1.User);
    }
    getAll() {
        return this.repository.find();
    }
    getOne(id) {
        return this.repository.IndOne(id);
    }
    post(user) {
        const newUser = this.repository.create(user);
        return this.repository.save(newUser);
    }
    put(id, user) {
        const currentUser = this.repository.findOne(id);
        currentUser.email = user.email;
        currentUser.firstName = user.firstName;
        currentUser.password = user.password;
        return this.repository.save(currentUser);
    }
    remove(id) {
        const currentUser = this.repository.findOne(id);
        if (currentUser) {
            return this.repository.remove(currentUser);
        }
    }
};
__decorate([
    routing_controllers_1.Get("/users"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAll", null);
__decorate([
    routing_controllers_1.Get("/users/:id"),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getOne", null);
__decorate([
    routing_controllers_1.Post("/users"),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "post", null);
__decorate([
    routing_controllers_1.Put("/users/:id"),
    __param(0, routing_controllers_1.Param("id")), __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "put", null);
__decorate([
    routing_controllers_1.Delete("/users/:id"),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
UserController = __decorate([
    routing_controllers_1.JsonController(),
    __metadata("design:paramtypes", [])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map