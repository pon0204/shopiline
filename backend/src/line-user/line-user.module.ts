import { Module } from '@nestjs/common';
import { CreateLineUserUsecase } from './usecase/create-line-user.usecase';
import { LineUserController } from './presentation/line-user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LineUserRepository } from './infra/line-user.repository';
import { ILineUserRepository } from './domain/interface/line-user.repository';
import { LineModule } from 'src/line/line.module';
import { StripeModule } from '../stripe/stripe.module';

@Module({
  imports: [PrismaModule, LineModule, StripeModule],
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
