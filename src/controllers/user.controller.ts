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
import { User } from "../persistence/entity/user.entity";
import { CreateUserRequest } from "./request/create.user.request";
import { Organization } from "../persistence/entity/organization.entity";

@JsonController()
export class UserController {
  repository: any;
  constructor() {
    this.repository = getManager().getRepository(User);
  }
  @Get("/users")
  getAll() {
    return this.repository.find();
  }

  @Get("/users/:id")
  getOne(@Param("id") id: number) {
    return this.repository.IndOne(id);
  }

  @Post("/users")
  async post(@Body() request: CreateUserRequest) {
    const newUser = new User();
    newUser.password = request.password;
    newUser.email = request.email;
    newUser.firstName = request.firstName;
    newUser.lastName = request.lastName;

    const organizationRepository = getManager().getRepository(Organization);
    const userOrganization: Organization = await organizationRepository.findOne(
      request.organizationId
    );
    newUser.organization = userOrganization;
    const userToSave: User = await this.repository.create(newUser);
    return this.repository.save(userToSave);
  }

  @Put("/users/:id")
  put(@Param("id") id: number, @Body() user: User) {
    const currentUser: User = this.repository.findOne(id);

    currentUser.email = user.email;
    currentUser.firstName = user.firstName;
    currentUser.password = user.password;

    return this.repository.save(currentUser);
  }

  @Delete("/users/:id")
  remove(@Param("id") id: number) {
    const currentUser: User = this.repository.findOne(id);
    if (currentUser) {
      return this.repository.remove(currentUser);
    }
  }
}
