import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfilsModule } from './profils/profils.module';
import { FreelancerProfilsModule } from './FreelancerProfil/FreelancerProfils.module';
import { ClientProfilsModule } from './ClientProfil/ClientProfils.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ProfilsModule,
    FreelancerProfilsModule,
    ClientProfilsModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
