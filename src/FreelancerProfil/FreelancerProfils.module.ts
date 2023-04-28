import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FreelancerProfilsController } from './FreelancerProfils.controller';
import { FreelancerProfilsService } from './FreelancerProfils.service';
import {
  FreelancerProfil,
  FreelancerProfilSchema,
} from './models/FreelancerProfils.models';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FreelancerProfil.name, schema: FreelancerProfilSchema },
    ]),
  ],
  controllers: [FreelancerProfilsController],
  providers: [FreelancerProfilsService],
})
export class ProfilsModule {}
