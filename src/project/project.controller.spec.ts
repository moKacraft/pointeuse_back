import { Test, TestingModule } from '@nestjs/testing';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

describe('ProjectController', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [ProjectController],
            providers: [ProjectService],
        }).compile();
    });

    describe('project', () => {
        it('should return empty array!', () => {
            const projectController = app.get<ProjectController>(ProjectController);
            //   UnhandledPromiseRejectionWarning:
            expect(projectController.findAll()).resolves.toBe([]);
        });

        // it('should return empty array!', () => {
        //     const userController = app.get<UserController>(UserController);
        //     expect(userController.findAll()).toBe([]);
        //   });
    });
});
