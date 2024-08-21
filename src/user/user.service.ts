import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {
    // this.create();
  }

  async create() {
    return await this.usersRepository.save({ name: 'hello' });
  }

  async getDetail(id: string) {
    return await this.usersRepository.findOne({
      where: { id: id },
    });
  }

  async update(id: string, name = 'thư nè') {
    return await this.usersRepository.update({ id: id }, { name });
  }
}
