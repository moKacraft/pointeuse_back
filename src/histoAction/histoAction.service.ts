import { Injectable, HttpException } from '@nestjs/common';
import { HistoAction } from './histoAction.entity';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Repository, ObjectID, DeleteResult } from 'typeorm';

@Injectable()
export class HistoActionService {

  constructor(
    @InjectRepository(HistoAction)
    private readonly histoActionRepository: Repository<HistoAction>,
  ) {}

  async findAll(): Promise<HistoAction[]> {
    return await this.histoActionRepository.find();
  }

  async create(histoAction: HistoAction) {
    const histoActionEntity = new HistoAction();
    histoActionEntity.userId = histoAction.userId;
    histoActionEntity.projectId = histoAction.projectId;
    histoActionEntity.actionId = histoAction.actionId;
     this.histoActionRepository.save(histoActionEntity);
    return histoActionEntity;
  }

  async findHistoActionById(id: string): Promise<HistoAction> {
    try {
      const histoActionToReturn = await this.histoActionRepository.findOne(parseInt(id));
      if (!histoActionToReturn) {
        throw new HttpException({HistoAction: 'not found'}, 401);
      }
      return histoActionToReturn;
    } catch (err) {
      return err;
    }
  }

  async delete(id: string): Promise<any> {
    try {
      const histoActionToRemove = await this.findHistoActionById(id);
      if (!histoActionToRemove) {
        throw new HttpException({HistoAction: 'not found'}, 401);
      } else {
      return this.histoActionRepository.remove(histoActionToRemove);
      }
    } catch (err) {
      return err;
    }
  }
}