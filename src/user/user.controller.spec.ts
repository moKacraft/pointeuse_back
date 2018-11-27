import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [UserController],
            providers: [UserService],
        }).compile();
    });

    describe('user', () => {
        it('should return empty array!', () => {
            const userController = app.get<UserController>(UserController);
            //   UnhandledPromiseRejectionWarning:
            expect(userController.findAll()).resolves.toBe([]);
        });

        // it('should return empty array!', () => {
        //     const userController = app.get<UserController>(UserController);
        //     expect(userController.findAll()).toBe([]);
        //   });
    });
});
