import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientProfilDocument = ClientProfil & Document;

export enum status {
  ENLIGNE = 'enligne',
  INVISIBLE = 'invisible',
  INACTIFS = 'inactifs',
  NPD = 'ne pas deranger',
}

@Schema()
export class ClientProfil {
  @Prop({ required: true })
  firstName: string;
  @Prop({ required: true })
  lastName: string;
  @Prop()
  company: string;
  @Prop()
  Bio: string;
  @Prop()
  picture: string;
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
  Avis: string;
  @Prop()
  status: status[];
}

export const ClientProfilSchema = SchemaFactory.createForClass(ClientProfil);
