import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
export enum Category {
  WEB = 'web',
  DESIGN = 'design',
  MARKETING = 'marketing',
  CUSTOMERSUPP = 'customer support',
  TRANSLATION = 'translation',
  EDITING = 'editing',
}

export enum status {
  ENLIGNE = 'enligne',
  INVISIBLE = 'invisible',
  INACTIFS = 'inactifs',
  NPD = 'ne pas deranger',
}

export class FreelancerProfilDto {
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  @IsEnum(Category, { each: true })
  categorie: Category[];
  @IsOptional()
  skills: string;
  @IsOptional()
  Bio: string;
  @IsOptional()
  picture: string;
  @IsOptional()
  CV: string;
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
  @IsOptional()
  Avis: string;
  @IsOptional()
  @IsEnum(status, { each: true })
  status: status[];
}
