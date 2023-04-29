import { Exclude, Expose } from 'class-transformer';
import {
  AfterInsert,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export const USER_GROUPS = {
  retriveOnly: 'GROUP_RETRIEVE_USER',
  adminOnly: 'GROUP_ADMINS',
};

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  @Expose({ groups: [USER_GROUPS.adminOnly] })
  password: string;

  @Column()
  @Expose({ groups: [USER_GROUPS.retriveOnly] })
  email: string;

  @AfterInsert()
  logAfterInsert() {
    console.log(this.id, 'inserted');
  }

  @AfterUpdate()
  logAfterUpdate() {
    console.log(this.id, 'inserted');
  }
}
