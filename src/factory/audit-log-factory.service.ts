import { Injectable } from '@nestjs/common';
import { Model } from 'src/decorator/model.decorator';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuditLogFactoryService {
  constructor(private userService: UserService) {}

  getHello() {
    return 'hello user';
  }

  async getDetail(model: Model, id: string) {
    switch (model) {
      case Model.USER:
        // using userService here
        return await this.userService.getDetail(id);
      case Model.POLICY:
        // using userService here
        break;
    }
  }

  auditLog(model: Model) {
    switch (model) {
      case Model.USER:
        // using userService here
        break;
      case Model.POLICY:
        // using userService here
        break;
    }
  }
}
