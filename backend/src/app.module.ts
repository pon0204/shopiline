import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LineUserModule } from './line-user/line-user.module';
import { PrismaModule } from './prisma/prisma.module';
import { StripeModule } from './stripe/stripe.module';
import { LineModule } from 'src/line/line.module';

@Module({
  imports: [PrismaModule, LineUserModule, StripeModule, LineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
