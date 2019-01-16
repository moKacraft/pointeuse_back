import {
    Entity,
    Column,
    ObjectIdColumn,
    ObjectID,
} from 'typeorm';

@Entity('histoAction')
export class HistoAction {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  userId: string;
  
  @Column()
  projectId: string;

  @Column()
  actionId: string;

}