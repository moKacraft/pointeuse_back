import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { ObjectID } from 'typeorm';

export class CreateActionDto {
    @ApiModelProperty()
    readonly _id: ObjectID;
    
    @ApiModelProperty()
    @IsString() readonly actionType: string;    
}