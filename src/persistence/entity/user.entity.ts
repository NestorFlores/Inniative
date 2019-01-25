import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  ManyToOne
} from "typeorm";
import { Organization } from "./organization.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true
  })
  email: string;

  @Column()
  password: string;

  @ManyToOne(type => Organization, organization => organization.users)
  organization: Organization;
}
