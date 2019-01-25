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
const organization_entity_1 = require("../persistence/entity/organization.entity");
const create_organization_request_1 = require("./request/create.organization.request");
const address_1 = require("../persistence/entity/address");
let OrganizationController = class OrganizationController {
    constructor() {
        this.repository = typeorm_1.getManager().getRepository(organization_entity_1.Organization);
    }
    getAll() {
        return this.repository.find();
    }
    getOne(id) {
        return this.repository.IndOne(id);
    }
    post(request) {
        const toCreate = new organization_entity_1.Organization();
        toCreate.name = request.name;
        toCreate.description = request.description;
        toCreate.address = new address_1.OrganizationAddress();
        toCreate.address.city = request.addressCity;
        toCreate.address.state = request.addressState;
        toCreate.address.country = request.addressContry;
        const newOrganization = this.repository.create(toCreate);
        return this.repository.save(newOrganization);
    }
    put(id, organization) {
        const currentOrganization = this.repository.findOne(id);
        currentOrganization.name = organization.name;
        return this.repository.save(currentOrganization);
    }
    remove(id) {
        const currentOrganization = this.repository.findOne(id);
        if (currentOrganization) {
            return this.repository.remove(currentOrganization);
        }
    }
};
__decorate([
    routing_controllers_1.Get("/organization"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrganizationController.prototype, "getAll", null);
__decorate([
    routing_controllers_1.Get("/organization/:id"),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrganizationController.prototype, "getOne", null);
__decorate([
    routing_controllers_1.Post("/organizations"),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_organization_request_1.CreateOrganizationRequest]),
    __metadata("design:returntype", void 0)
], OrganizationController.prototype, "post", null);
__decorate([
    routing_controllers_1.Put("/organizations/:id"),
    __param(0, routing_controllers_1.Param("id")), __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, organization_entity_1.Organization]),
    __metadata("design:returntype", void 0)
], OrganizationController.prototype, "put", null);
__decorate([
    routing_controllers_1.Delete("/organizations/:id"),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrganizationController.prototype, "remove", null);
OrganizationController = __decorate([
    routing_controllers_1.JsonController(),
    __metadata("design:paramtypes", [])
], OrganizationController);
exports.OrganizationController = OrganizationController;
//# sourceMappingURL=organization.controller.js.map