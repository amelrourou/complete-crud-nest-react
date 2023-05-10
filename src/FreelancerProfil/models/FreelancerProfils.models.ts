import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FreelancerProfilDocument = FreelancerProfil & Document;

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

@Schema()
export class FreelancerProfil {
  @Prop({ required: true })
  firstName: string;
  @Prop({ required: true })
  lastName: string;
  @Prop({ required: true })
  categorie: Category[];
  @Prop()
  skills: string;
  @Prop()
  Bio: string;
  @Prop()
  picture: string;
  @Prop()
  CV: string;
  @Prop()
  pays: string;
  @Prop()
  address: string;
  @Prop()
  CIN: number;
  @Prop()
  NumCompt: number;
  @Prop()
  phone: number;
  @Prop()
  Birthdate: Date;
  @Prop()
  priceperhour: number;
  @Prop()
  Avis: string;
  @Prop()
  status: status[];
}

export const FreelancerProfilSchema =
  SchemaFactory.createForClass(FreelancerProfil);
