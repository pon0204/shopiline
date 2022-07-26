import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateLineUserUsecase } from '../usecase/create-line-user.usecase';
import { ClientValidationPipe } from 'src/common/pipes/client-validation.pipe';

@Controller('client/:clientId/line-user')
export class LineUserController {
  constructor(private createLineUserUsecase: CreateLineUserUsecase) {}

  @Post()
  async createLineUser(
    @Param('clientId', ClientValidationPipe) clientId: number,
  ) {
    return await this.createLineUserUsecase.handle('lineId', clientId);
  }
}
