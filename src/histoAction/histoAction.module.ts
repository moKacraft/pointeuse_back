import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoActionController } from './histoAction.controller';
import { HistoActionService } from './histoAction.service';
import { HistoAction } from './histoAction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistoAction])],
  controllers: [HistoActionController],
  providers: [HistoActionService],
})
export class HistoActionModule {}
