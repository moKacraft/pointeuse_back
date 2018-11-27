import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  create(user: User) {
    const userEntity = new User();
    userEntity.email = user.email;
    userEntity.firstname = user.firstname;
    userEntity.lastname = user.lastname;
    this.userRepository.save(userEntity);
    return userEntity;
  }
}