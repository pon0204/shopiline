import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { GetKeyValidationPipe } from 'src/common/get-key-validation.pipe';

@Injectable()
export class ClientValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    return GetKeyValidationPipe({ entityName: 'client', uuid: value });
  }
}
