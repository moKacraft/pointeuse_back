import {
    Entity,
    Column,
    ObjectIdColumn,
    ObjectID,
} from 'typeorm';

@Entity('positionProject')
export class PositionProject {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  lattitude: string;

  @Column()
  longitude: string;

  @Column()
  position: string;

  @Column()
  address: string;

}