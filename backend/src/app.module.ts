import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LineUserModule } from './line-user/line-user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, LineUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
