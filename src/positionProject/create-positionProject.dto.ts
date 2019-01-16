import { IsString, IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { ObjectID } from 'typeorm';
import { isString } from 'util';

export class CreatePositionProjectDto {
    @ApiModelProperty()
    readonly _id: ObjectID;

    @ApiModelProperty()
    @IsString() readonly lattitude: string;

    @ApiModelProperty()
    @IsString() readonly longitude: string;

    @ApiModelProperty()
    @IsString() readonly position: string;

    @ApiModelProperty()
    @IsString() readonly address: string;

}