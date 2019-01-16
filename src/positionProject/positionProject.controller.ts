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
import { CreatePositionProjectDto } from './create-positionProject.dto';
import { PositionProject } from './positionProject.entity';
import { PositionProjectService } from './positionProject.service';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { ObjectID, DeleteResult } from 'typeorm';

@ApiUseTags('positionProject')
@Controller('positionProject')
export class PositionProjectController {

    constructor(private readonly positionProjectService: PositionProjectService) {}

    @Get()
    async findAll(): Promise<PositionProject[]> {
        return this.positionProjectService.findAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() createPositionProjectDto: CreatePositionProjectDto) {
      this.positionProjectService.create(createPositionProjectDto);
      return('PositionProject created');
    }

    @Get('/:_id')
    async show(@Param('_id') id: string): Promise<PositionProject> {
        console.log(id);
        return this.positionProjectService.findPositionProjectById(id);
    }

    @Delete('/:_id')
    async delete(@Param('_id') id: string) {
    return this.positionProjectService.delete(id);
    }

    // @Put('/:_id')
    // async update() {
    // }
}