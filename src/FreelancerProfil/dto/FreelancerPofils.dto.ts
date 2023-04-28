import { IsNotEmpty, IsOptional } from 'class-validator';

export class FreelancerProfilDto {
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  categorie: string;
  @IsOptional()
  skills: string;
  @IsOptional()
  Bio: string;
  @IsOptional()
  picture: string;
  @IsOptional()
  portfolio: string;
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
  priceperhour: number;
}
