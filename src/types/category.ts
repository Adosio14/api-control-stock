import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "categories" })
export default class Category {
  @PrimaryGeneratedColumn({ name: "id_category" })
  id!: Number;

  @Column({ name: "name", nullable: false })
  name!: string;
}
