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
import { CreateActionDto } from './create-action.dto';
import { Action } from './action.entity';
import { ActionService } from './action.service';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { ObjectID, DeleteResult } from 'typeorm';

@ApiUseTags('action')
@Controller('action')
export class ActionController {

    constructor(private readonly actionService: ActionService) {}

    @Get()
    async findAll(): Promise<Action[]> {
        return this.actionService.findAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() createActionDto: CreateActionDto) {
      this.actionService.create(createActionDto);
      return('Action created');
    }

    @Get('/:_id')
    async show(@Param('_id') id: string): Promise<Action> {
        console.log(id);
        return this.actionService.findActionById(id);
    }

    @Delete('/:_id')
    async delete(@Param('_id') id: string) {
    return this.actionService.delete(id);
    }

    // @Put('/:_id')
    // async update() {
    // }
}