import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { ModuleRef, Reflector } from '@nestjs/core';
import { MODEL_KEY } from 'src/decorator/model.decorator';
import { AuditLogFactoryService } from 'src/factory/audit-log-factory.service';

@Injectable()
export class CustomInterceptors implements NestInterceptor {
  private auditLogService: AuditLogFactoryService;

  constructor(private moduleRef: ModuleRef, private reflector: Reflector) {
    this.auditLogService = this.moduleRef.get<AuditLogFactoryService>(
      AuditLogFactoryService,
      { strict: false },
    );
  }

  async intercept(
    context: ExecutionContext,
    handler: CallHandler,
  ): Promise<Observable<any>> {
    const model = this.reflector.get(MODEL_KEY, context.getHandler());
    const request: Request = context.switchToHttp().getRequest();
    // const oldData = { name: 'abc', id: Object.values(request['params'])[0] };
    const id = Object.values(request['params'])[0] as string;
    const oldData = await this.auditLogService.getDetail(model, id);
    console.log('Before...');
    return handler.handle().pipe(
      map(async () => {
        console.log('After....');
        const newData = await this.auditLogService.getDetail(model, id);
        console.log(oldData, newData);
        // console.log(request['data']);
      }),
    );
  }
}
