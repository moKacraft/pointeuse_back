import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionProjectController } from './positionProject.controller';
import { PositionProjectService } from './positionProject.service';
import { PositionProject } from './positionProject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PositionProject])],
  controllers: [PositionProjectController],
  providers: [PositionProjectService],
})
export class PositionProjectModule {}
