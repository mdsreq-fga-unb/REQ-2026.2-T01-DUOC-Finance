import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { HealthController } from './health/health.controller.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { RvtModule } from './rvt/rvt.module.js';

@Module({
  imports: [PrismaModule, RvtModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
