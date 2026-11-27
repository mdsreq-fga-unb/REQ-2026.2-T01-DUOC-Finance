import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module.js';
import { HealthController } from './health/health.controller.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { RvtModule } from './rvt/rvt.module.js';
import { ReembolsosModule } from './reembolsos/reembolsos.module.js';
import { ContratosModule } from './contratos/contratos.module.js';

@Module({
  imports: [PrismaModule, AuthModule, RvtModule, ReembolsosModule, ContratosModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
