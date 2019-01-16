import {
    Entity,
    Column,
    ObjectIdColumn,
    ObjectID,
} from 'typeorm';

@Entity('action')
export class Action {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  actionType: string;

}