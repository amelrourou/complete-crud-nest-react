import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfilsController } from './Profils.controller';
import { ProfilsService } from './Profils.service';
import { Profil, ProfilSchema } from './models/profils.models';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Profil.name, schema: ProfilSchema }]),
  ],
  controllers: [ProfilsController],
  providers: [ProfilsService],
})
export class ProfilsModule {}
