import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FreelancerProfilDocument = FreelancerProfil & Document;

@Schema()
export class FreelancerProfil {
  @Prop({ required: true })
  firstName: string;
  @Prop({ required: true })
  lastName: string;
  @Prop({ required: true })
  categorie: string;
  @Prop()
  skills: string;
  @Prop()
  Bio: string;
  @Prop()
  picture: string;
  @Prop()
  portfolio: string;
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
}

export const FreelancerProfilSchema =
  SchemaFactory.createForClass(FreelancerProfil);
