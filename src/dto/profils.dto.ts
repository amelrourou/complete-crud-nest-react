import { IsNotEmpty } from 'class-validator';

export class ProfilDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  categorie: string;

  @IsNotEmpty()
  competences: string;

  @IsNotEmpty()
  pays: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  avatar: string;

  @IsNotEmpty()
  portfolio: string;

  @IsNotEmpty()
  CIN: number;

  @IsNotEmpty()
  phone: number;

  @IsNotEmpty()
  dateNaissance: Date;

  @IsNotEmpty()
  adresse: string;

  @IsNotEmpty()
  pricebyhour: number;

  @IsNotEmpty()
  NumCompte: number;
}
