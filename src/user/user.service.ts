import { genSaltSync, hashSync } from 'bcrypt';
import { Injectable, HttpException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Repository, ObjectID, DeleteResult } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(user: User) {
    const userEntity = new User();
    userEntity.email = user.email;
    userEntity.firstname = user.firstname;
    userEntity.lastname = user.lastname;

    // TODO salt is magic number
    const salt = genSaltSync(10);
    userEntity.token = hashSync(user.token, salt);

    userEntity.isAdmin = user.isAdmin;
    this.userRepository.save(userEntity);
    return userEntity;
  }

  async findUserById(id: string): Promise<User> {
    try {
      const userToReturn = await this.userRepository.findOne(parseInt(id));
      if (!userToReturn) {
        throw new HttpException({User: 'not found'}, 401);
      }
      return userToReturn;
    } catch (err) {
      return err;
    }
  }

  async delete(id: string): Promise<any> {
    try {
      const userToRemove = await this.findUserById(id);
      if (!userToRemove) {
        throw new HttpException({User: 'not found'}, 401);
      } else {
      return this.userRepository.remove(userToRemove);
      }
    } catch (err) {
      return err;
    }
  }
}