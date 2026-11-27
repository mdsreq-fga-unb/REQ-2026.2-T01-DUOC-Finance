import { Module } from '@nestjs/common';
import { ContratosController } from './contratos.controller.js';
import { ContratosService } from './contratos.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [ContratosController],
  providers: [ContratosService],
})
export class ContratosModule {}
