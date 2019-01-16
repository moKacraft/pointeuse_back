import {
    Entity,
    Column,
    ObjectIdColumn,
    ObjectID,
} from 'typeorm';

@Entity('project')
export class Project {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  name: string;

  @Column()
  number: string;

  @Column()
  timeStart: string;

  @Column()
  timeEnd: string;

  @Column()
  timeTotal: string;
  
  @Column()
  idPositionStart: string;
  
  @Column()
  idPositionEnd: string;

  @Column()
  etatProject: string;
  
  @Column()
  commentaire: string;
}