import { Module } from '@nestjs/common';
import { AuditLogFactoryService } from 'src/factory/audit-log-factory.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  providers: [AuditLogFactoryService],
  exports: [AuditLogFactoryService],
})
export class AuditLogModule {}
