import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfilsModule } from './profils/profils.module';
import { FreelancerProfilsModule } from './FreelancerProfil/FreelancerProfils.module';
import { ClientProfilsModule } from './ClientProfil/ClientProfils.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ProfilsModule,
    FreelancerProfilsModule,
    ClientProfilsModule,
  ],
})
export class AppModule {}
