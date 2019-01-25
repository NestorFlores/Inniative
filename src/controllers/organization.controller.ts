import {
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  JsonController
} from "routing-controllers";
import { getManager } from "typeorm";
import { Organization } from "../persistence/entity/organization.entity";
import { CreateOrganizationRequest } from "./request/create.organization.request";
import { OrganizationAddress } from "../persistence/entity/address";

@JsonController()
export class OrganizationController {
  repository: any;
  constructor() {
    this.repository = getManager().getRepository(Organization);
  }
  @Get("/organizations")
  getAll() {
    return this.repository.find();
  }

  @Get("/organizations/:id")
  getOne(@Param("id") id: number) {
    return this.repository.IndOne(id);
  }

  @Post("/organizations")
  post(@Body() request: CreateOrganizationRequest) {
    const toCreate: Organization = new Organization();
    toCreate.name = request.name;
    toCreate.description = request.description;
    toCreate.address = new OrganizationAddress();
    toCreate.address.city = request.addressCity;
    toCreate.address.state = request.addressState;
    toCreate.address.country = request.addressContry;
    toCreate.address.street = request.addressStreet;

    const newOrganization = this.repository.create(toCreate);
    return this.repository.save(newOrganization);
  }

  @Put("/organizations/:id")
  async put(@Param("id") id: number, @Body() organization: Organization) {
    const currentOrganization: Organization = await this.repository.findOne(id);
    if (currentOrganization) {
      currentOrganization.name = organization.name;
      currentOrganization.description = organization.description;
      return this.repository.save(currentOrganization);
    } else {
      return {
        success: false,
        message: "Organization not found"
      };
    }
  }

  @Delete("/organizations/:id")
  async remove(@Param("id") id: number) {
    const currentOrganization: Organization = await this.repository.findOne({
      id: id
    });
    if (currentOrganization) {
      return this.repository.remove(currentOrganization);
    } else {
      return {
        success: false,
        message: "Organization not found"
      };
    }
  }
}
