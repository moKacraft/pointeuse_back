import { Test, TestingModule } from '@nestjs/testing';
import { ActionController } from './action.controller';
import { ActionService } from './action.service';

describe('ActionController', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [ActionController],
            providers: [ActionService],
        }).compile();
    });

    describe('action', () => {
        it('should return empty array!', () => {
            const actionController = app.get<ActionController>(ActionController);
            //   UnhandledPromiseRejectionWarning:
            expect(actionController.findAll()).resolves.toBe([]);
        });

        // it('should return empty array!', () => {
        //     const userController = app.get<UserController>(UserController);
        //     expect(userController.findAll()).toBe([]);
        //   });
    });
});
