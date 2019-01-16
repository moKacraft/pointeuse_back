import {
    Entity,
    Column,
    ObjectIdColumn,
    ObjectID,
} from 'typeorm';

@Entity('user')
export class User {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column('text')
  email: string;

  @Column()
  token: string;

  @Column()
  isAdmin: boolean;
}