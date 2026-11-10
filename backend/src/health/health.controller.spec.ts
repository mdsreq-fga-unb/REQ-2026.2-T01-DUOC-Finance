import { Test, TestingModule } from '@nestjs/testing';
import { ServiceUnavailableException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { HealthController } from './health.controller.js';

describe('HealthController', () => {
  const prisma = { $queryRaw: vi.fn() };
  let healthController: HealthController;

  beforeEach(async () => {
    prisma.$queryRaw.mockReset();
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [{ provide: PrismaService, useValue: prisma }],
    }).compile();

    healthController = app.get<HealthController>(HealthController);
  });

  it('should report the database as up', async () => {
    prisma.$queryRaw.mockResolvedValue([{ '?column?': 1 }]);
    await expect(healthController.check()).resolves.toEqual({
      status: 'ok',
      database: 'up',
    });
  });

  it('should throw 503 when the database is unreachable', async () => {
    prisma.$queryRaw.mockRejectedValue(new Error('ECONNREFUSED'));
    await expect(healthController.check()).rejects.toBeInstanceOf(
      ServiceUnavailableException,
    );
  });
});
