import { Module } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { EvidenciasStorageService } from './evidencias/evidencias-storage.service.js';
import { RvtController } from './rvt.controller.js';
import { RvtService } from './rvt.service.js';

/** CAR-02 · Apontamento de Campo (RVT) */
@Module({
  controllers: [RvtController],
  providers: [RvtService, EvidenciasStorageService, JwtAuthGuard],
})
export class RvtModule {}
