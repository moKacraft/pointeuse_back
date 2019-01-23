import { IsString, IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { ObjectID } from 'typeorm';
import { isString } from 'util';

export class CreateProjectDto {
    @ApiModelProperty()
    readonly _id: ObjectID;

    @ApiModelProperty()
    @IsString() readonly name: string;

    @ApiModelProperty()
    @IsString() readonly number: string;

    @ApiModelProperty()
    @IsString() readonly timeStart: string;

    @ApiModelProperty()
    @IsString() readonly timeEnd: string;

    @ApiModelProperty()
    @IsString() readonly timeTotal: string;

    @ApiModelProperty()
    @IsString() readonly idPositionStart: string;

    @ApiModelProperty()
    @IsString() readonly idPositionEnd: string;

    @ApiModelProperty()
    @IsString() readonly etatProject: string;

    @ApiModelProperty()
    @IsString() readonly commentaire: string;
}