import { Test, TestingModule } from '@nestjs/testing';
import { HistoActionController } from './histoAction.controller';
import { HistoActionService } from './histoAction.service';

describe('HistoActionController', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [HistoActionController],
            providers: [HistoActionService],
        }).compile();
    });

    describe('histoAction', () => {
        it('should return empty array!', () => {
            const histoActionController = app.get<HistoActionController>(HistoActionController);
            //   UnhandledPromiseRejectionWarning:
            expect(histoActionController.findAll()).resolves.toBe([]);
        });

        // it('should return empty array!', () => {
        //     const userController = app.get<UserController>(UserController);
        //     expect(userController.findAll()).toBe([]);
        //   });
    });
});
