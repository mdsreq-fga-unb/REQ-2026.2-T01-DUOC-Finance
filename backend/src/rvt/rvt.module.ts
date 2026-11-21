import { Module } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { EvidenciasStorageService } from './evidencias/evidencias-storage.service.js';
import { RvtController } from './rvt.controller.js';
import { RvtService } from './rvt.service.js';

@Module({
  controllers: [RvtController],
  providers: [
    RvtService,
    EvidenciasStorageService,
    JwtAuthGuard,
    RolesGuard,
  ],
})
export class RvtModule {}