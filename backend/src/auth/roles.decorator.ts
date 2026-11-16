import { SetMetadata } from '@nestjs/common';
import { Role } from './role.enum.js';

export const ROLES_KEY = 'roles';

/** Declara os papéis autorizados em uma rota ou controller (RF14 / RN15). */
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
