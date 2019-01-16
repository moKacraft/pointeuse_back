import { Injectable, HttpException } from '@nestjs/common';
import { PositionProject } from './positionProject.entity';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Repository, ObjectID, DeleteResult } from 'typeorm';

@Injectable()
export class PositionProjectService {

  constructor(
    @InjectRepository(PositionProject)
    private readonly positionProjectRepository: Repository<PositionProject>,
  ) {}

  async findAll(): Promise<PositionProject[]> {
    return await this.positionProjectRepository.find();
  }

  async create(positionProject: PositionProject) {
    const positionProjectEntity = new PositionProject();
    positionProjectEntity.lattitude = positionProject.lattitude;
    positionProjectEntity.longitude = positionProject.longitude;
    positionProjectEntity.position = positionProject.position;
    positionProjectEntity.address = positionProject.address;
    this.positionProjectRepository.save(positionProjectEntity);
    return positionProjectEntity;
  }

  async findPositionProjectById(id: string): Promise<PositionProject> {
    try {
      const positionProjectToReturn = await this.positionProjectRepository.findOne(parseInt(id));
      if (!positionProjectToReturn) {
        throw new HttpException({PositionProject: 'not found'}, 401);
      }
      return positionProjectToReturn;
    } catch (err) {
      return err;
    }
  }

  async delete(id: string): Promise<any> {
    try {
      const positionProjectToRemove = await this.findPositionProjectById(id);
      if (!positionProjectToRemove) {
        throw new HttpException({Project: 'not found'}, 401);
      } else {
      return this.positionProjectRepository.remove(positionProjectToRemove);
      }
    } catch (err) {
      return err;
    }
  }
}