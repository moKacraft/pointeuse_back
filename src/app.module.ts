import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { HistoActionModule } from './histoAction/histoAction.module';
import { PositionProjectModule } from './positionProject/positionProject.module';
import { ActionModule } from './action/action.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, ProjectModule, PositionProjectModule, HistoActionModule, ActionModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}