import {
    Get,
    Post,
    Controller,
    Body,
    UsePipes,
    Req,
    HttpCode,
} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
// import { User } from './user.interface';
import { User } from './user.entity';
import { UserService } from './user.service';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

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
}