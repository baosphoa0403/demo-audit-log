import { Controller, Get, Param, Put, UseInterceptors } from '@nestjs/common';
import { CustomInterceptors } from 'src/custom-interceptor';
import { Model, ModelDecorator } from 'src/decorator/model.decorator';
import { UserService } from 'src/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseInterceptors(CustomInterceptors)
  @ModelDecorator(Model.USER)
  @Put(':id')
  async updateSomeThing(@Param('id') id: string) {
    // console.log(id);
    return await this.userService.update(id);
  }

  @Get(':id')
  async getDetail(@Param('id') id: string) {
    return await this.userService.getDetail(id);
  }
}
