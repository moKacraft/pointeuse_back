import { Test, TestingModule } from '@nestjs/testing';
import { PositionProjectController } from './positionProject.controller';
import { PositionProjectService } from './positionProject.service';

describe('PositionProjectController', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [PositionProjectController],
            providers: [PositionProjectService],
        }).compile();
    });

    describe('positionProject', () => {
        it('should return empty array!', () => {
            const positionProjectController = app.get<PositionProjectController>(PositionProjectController);
            //   UnhandledPromiseRejectionWarning:
            expect(positionProjectController.findAll()).resolves.toBe([]);
        });

        // it('should return empty array!', () => {
        //     const userController = app.get<UserController>(UserController);
        //     expect(userController.findAll()).toBe([]);
        //   });
    });
});
