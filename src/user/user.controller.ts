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
    Delete,
} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { ObjectID, DeleteResult } from 'typeorm';

@ApiUseTags('user')
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() createUserDto: CreateUserDto) {
      this.userService.create(createUserDto);
      return('User created');
    }

    @Get('/:_id')
    async show(@Param('_id') id: string): Promise<User> {
        return this.userService.findUserById(id);
    }

    @Delete('/:_id')
    async delete(@Param('_id') id: string) {
        return this.userService.delete(id);
    }

    // @Put('/:_id')
    // async update() {
    // }
}