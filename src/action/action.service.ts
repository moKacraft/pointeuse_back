import { Injectable, HttpException } from '@nestjs/common';
import { Action } from './action.entity';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Repository, ObjectID, DeleteResult } from 'typeorm';

@Injectable()
export class ActionService {

  constructor(
    @InjectRepository(Action)
    private readonly actionRepository: Repository<Action>,
  ) {}

  async findAll(): Promise<Action[]> {
    return await this.actionRepository.find();
  }

  async create(action: Action) {
    const actionEntity = new Action();
    actionEntity.actionType = action.actionType;
     this.actionRepository.save(actionEntity);
    return actionEntity;
  }

  async findActionById(id: string): Promise<Action> {
    try {
      const actionToReturn = await this.actionRepository.findOne(parseInt(id));
      if (!actionToReturn) {
        throw new HttpException({Action: 'not found'}, 401);
      }
      return actionToReturn;
    } catch (err) {
      return err;
    }
  }

  async delete(id: string): Promise<any> {
    try {
      const actionToRemove = await this.findActionById(id);
      if (!actionToRemove) {
        throw new HttpException({Action: 'not found'}, 401);
      } else {
      return this.actionRepository.remove(actionToRemove);
      }
    } catch (err) {
      return err;
    }
  }
}