import { Module } from '@nestjs/common';
import { CreateLineUserUsecase } from './usecase/create-line-user.usecase';
import { LineUserController } from './presentation/line-user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LineUserRepository } from './infra/line-user.repository';
import { ILineUserRepository } from './domain/interface/line-user.repository';

@Module({
  imports: [PrismaModule],
  controllers: [LineUserController],
  providers: [
    CreateLineUserUsecase,
    LineUserRepository,
    {
      provide: ILineUserRepository,
      useClass: LineUserRepository,
    },
  ],
})
export class LineUserModule {}
