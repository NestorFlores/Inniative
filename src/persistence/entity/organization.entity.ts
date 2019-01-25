import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne} from "typeorm";
import { User } from './user.entity';
import { OrganizationAddress } from './address';

@Entity()
export class Organization {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(type => User, user => user.organization)
    users: User[];

    @OneToOne(type => OrganizationAddress, organizationAddress => organizationAddress.organization)
    address: OrganizationAddress
}
