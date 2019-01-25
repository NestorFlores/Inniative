import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Organization } from "./organization.entity";

@Entity()
export class OrganizationAddress {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    street: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @OneToOne(type => Organization, {
        cascade: true, onDelete: "CASCADE"
    })
    @JoinColumn()
    organization: Organization;

}
