import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { ModuleMocker } from 'jest-mock';
import { UserController } from './user.controller';
import { User } from './user.model';
import { UserService } from './user.service';

const moduleMocker = new ModuleMocker(global);

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
      imports: [SequelizeModule],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const userExample = {
        id: 1,
        nickname: 'nickname',
        phone: '3329250464',
        name: 'Name Surname',
        email: 'email@test.com',
        password: 'password',
      } as User;
      const result = [userExample];
      jest
        .spyOn(service, 'findAll')
        .mockImplementation(() => Promise.resolve(result));

      expect(await controller.findAll()).toBe(result);
    });
  });
});
