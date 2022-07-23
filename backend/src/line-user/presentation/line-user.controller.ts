import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateLineUserRequestDto } from './create-line-user-request.dto';
import { CreateLineUserUsecase } from '../usecase/create-line-user.usecase';

@Controller('line-user')
export class LineUserController {
  constructor(private createLineUserUsecase: CreateLineUserUsecase) {}

  @Post()
  async createLineUser(@Body() dto: CreateLineUserRequestDto) {
    return await this.createLineUserUsecase.handle('lineId');
  }
}
