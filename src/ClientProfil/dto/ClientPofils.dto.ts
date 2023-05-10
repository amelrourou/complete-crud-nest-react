import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

export enum status {
  ENLIGNE = 'enligne',
  INVISIBLE = 'invisible',
  INACTIFS = 'inactifs',
  NPD = 'ne pas deranger',
}

export class ClientProfilDto {
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsOptional()
  company: string;
  @IsOptional()
  Bio: string;
  @IsOptional()
  picture: string;
  @IsOptional()
  pays: string;
  @IsOptional()
  address: string;
  @IsOptional()
  CIN: number;
  @IsOptional()
  NumCompt: number;
  @IsOptional()
  phone: number;
  @IsOptional()
  Birthdate: Date;
  @IsOptional()
  Avis: string;
  @IsOptional()
  @IsEnum(status, { each: true })
  status: status[];
}
