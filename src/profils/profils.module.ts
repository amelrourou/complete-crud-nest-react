import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Profil, ProfilSchema } from 'src/models/Profils.models';
import { ProfilsController } from './Profils.controller';
import { ProfilsService } from './Profils.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Profil.name, schema: ProfilSchema }]),
  ],
  controllers: [ProfilsController],
  providers: [ProfilsService],
})
export class ProfilsModule {}
