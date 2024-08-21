import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from 'src/database/dabase.module';
import { UserModule } from 'src/user/user.module';
import { AuditLogModule } from 'src/factory/audit-log.module';

@Module({
  imports: [DatabaseModule, UserModule, AuditLogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
