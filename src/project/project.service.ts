import { Injectable, HttpException } from '@nestjs/common';
import { Project } from './project.entity';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Repository, ObjectID, DeleteResult } from 'typeorm';

@Injectable()
export class ProjectService {

  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async findAll(): Promise<Project[]> {
    return await this.projectRepository.find();
  }

  async create(project: Project) {
    const projectEntity = new Project();
    projectEntity.name = project.name;
    projectEntity.number = project.number;
    projectEntity.timeStart = project.timeStart;
    projectEntity.timeEnd = project.timeEnd;
    projectEntity.timeTotal = project.timeTotal;
    projectEntity.idPositionStart = project.idPositionStart;
    projectEntity.idPositionEnd = project.idPositionEnd;
    projectEntity.etatProject = project.etatProject;
    projectEntity.commentaire = project.commentaire;
    this.projectRepository.save(projectEntity);
    return projectEntity;
  }

  async findProjectById(id: string): Promise<Project> {
    try {
      const projectToReturn = await this.projectRepository.findOne(parseInt(id));
      if (!projectToReturn) {
        throw new HttpException({Project: 'not found'}, 401);
      }
      return projectToReturn;
    } catch (err) {
      return err;
    }
  }

  async delete(id: string): Promise<any> {
    try {
      const projectToRemove = await this.findProjectById(id);
      if (!projectToRemove) {
        throw new HttpException({Project: 'not found'}, 401);
      } else {
      return this.projectRepository.remove(projectToRemove);
      }
    } catch (err) {
      return err;
    }
  }
}