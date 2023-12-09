import { IsMongoId, IsNotEmpty } from 'class-validator';

export class ParamsDto {
  @IsNotEmpty()
  @IsMongoId()
  id: string;
}
