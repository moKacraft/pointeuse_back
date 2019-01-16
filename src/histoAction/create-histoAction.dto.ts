import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { ObjectID } from 'typeorm';

export class CreateHistoActionDto {
    @ApiModelProperty()
    readonly _id: ObjectID;
    
    @ApiModelProperty()
    @IsString() readonly userId: string;
    
    @ApiModelProperty()
    @IsString() readonly projectId: string;

    @ApiModelProperty()
    @IsString() readonly actionId: string;

}