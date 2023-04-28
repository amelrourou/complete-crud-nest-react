import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ClientProfilsController } from './ClientProfils.controller';
import { ClientProfilsService } from './ClientProfils.service';
import {
  ClientProfil,
  ClientProfilSchema,
} from './models/ClientProfils.models';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ClientProfil.name, schema: ClientProfilSchema },
    ]),
  ],
  controllers: [ClientProfilsController],
  providers: [ClientProfilsService],
})
export class ProfilsModule {}
