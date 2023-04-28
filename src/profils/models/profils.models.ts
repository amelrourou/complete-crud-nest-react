import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfilDocument = Profil & Document;

@Schema()
export class Profil {
  @Prop({ required: true })
  firstName: string;
  @Prop({ required: true })
  lastName: string;
  @Prop({ required: true })
  categorie: string;
  @Prop({ required: true })
  competences: string;
  @Prop({ required: true })
  pays: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  avatar: string;
  @Prop({ required: true })
  portfolio: string;
  @Prop({ required: true })
  CIN: number;
  @Prop({ required: true })
  phone: number;
  @Prop({ required: true })
  dateNaissance: Date;
  @Prop({ required: true })
  adresse: string;
  @Prop({ required: true })
  pricebyhour: number;
  @Prop({ required: true })
  NumCompte: number;
}

export const ProfilSchema = SchemaFactory.createForClass(Profil);
