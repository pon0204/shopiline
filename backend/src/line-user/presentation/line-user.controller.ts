import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateLineUserRequestDto } from './create-line-user-request.dto';
import { CreateLineUserUsecase } from '../usecase/create-line-user.usecase';
import { ClientValidationPipe } from 'src/common/pipes/client-validation.pipe';

@Controller('client/:clientId/line-user')
export class LineUserController {
  constructor(private createLineUserUsecase: CreateLineUserUsecase) {}

  @Get()
  async createLineUser(
    @Body()
    dto: CreateLineUserRequestDto,
    @Param('clientId', ClientValidationPipe) clientId: number,
  ) {
    return await this.createLineUserUsecase.handle('lineId', clientId);
  }
}
