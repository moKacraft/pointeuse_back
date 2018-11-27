import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { ObjectID } from 'typeorm';

export class CreateUserDto {
    @ApiModelProperty()
    @IsString() readonly firstname: string;
    @ApiModelProperty()
    @IsString() readonly lastname: string;
    @ApiModelProperty()
    @IsString() readonly email: string;
}