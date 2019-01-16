import {
    Get,
    Post,
    Controller,
    Body,
    UsePipes,
    Req,
    HttpCode,
    Param,
    Put,
    Delete
} from '@nestjs/common';
import { CreateProjectDto } from './create-project.dto';
import { Project } from './project.entity';
import { ProjectService } from './project.service';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { ObjectID, DeleteResult } from 'typeorm';

@ApiUseTags('project')
@Controller('project')
export class ProjectController {

    constructor(private readonly projectService: ProjectService) {}

    @Get()
    async findAll(): Promise<Project[]> {
        return this.projectService.findAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() createProjectDto: CreateProjectDto) {
      this.projectService.create(createProjectDto);
      return('Project created');
    }

    @Get('/:_id')
    async show(@Param('_id') id: string): Promise<Project> {
        console.log(id);
        return this.projectService.findProjectById(id);
    }

    @Delete('/:_id')
    async delete(@Param('_id') id: string) {
    return this.projectService.delete(id);
    }

    // @Put('/:_id')
    // async update() {
    // }
}