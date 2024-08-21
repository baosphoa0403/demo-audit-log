import { SetMetadata } from '@nestjs/common';

export enum Model {
  USER = 'USER',
  POLICY = 'POLICY',
}

export const MODEL_KEY = 'model';

export const ModelDecorator = (model: Model) => SetMetadata(MODEL_KEY, model);
