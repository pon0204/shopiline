import { Module } from '@nestjs/common';
import { CreateLineUserUsecase } from './usecase/create-line-user.usecase';
import { LineUserController } from './presentation/line-user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LineUserController],
  providers: [CreateLineUserUsecase],
})
export class LineUserModule {}
