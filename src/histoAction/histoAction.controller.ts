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
import { CreateHistoActionDto } from './create-histoAction.dto';
import { HistoAction } from './histoAction.entity';
import { HistoActionService } from './histoAction.service';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { ObjectID, DeleteResult } from 'typeorm';

@ApiUseTags('histoAction')
@Controller('histoAction')
export class HistoActionController {

    constructor(private readonly histoActionService: HistoActionService) {}

    @Get()
    async findAll(): Promise<HistoAction[]> {
        return this.histoActionService.findAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() createHistoActionDto: CreateHistoActionDto) {
      this.histoActionService.create(createHistoActionDto);
      return('HistoAction created');
    }

    @Get('/:_id')
    async show(@Param('_id') id: string): Promise<HistoAction> {
        console.log(id);
        return this.histoActionService.findHistoActionById(id);
    }

    @Delete('/:_id')
    async delete(@Param('_id') id: string) {
    return this.histoActionService.delete(id);
    }

    // @Put('/:_id')
    // async update() {
    // }
}