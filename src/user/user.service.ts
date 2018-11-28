import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectID } from 'typeorm';

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
    this.userRepository.save(userEntity);
    return userEntity;
  }

  async findUserById(_id: string): Promise<User> {
    try {
      return await this.userRepository.findOne({where: { _id }});
    } catch (err) {
      return err;
    }
  }
}