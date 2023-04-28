import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProfilDto } from 'src/dto/Profils.dto';
import { Profil, ProfilDocument } from 'src/models/Profils.models';
import { faker } from '@faker-js/faker';

@Injectable()
export class ProfilsService {
  constructor(
    @InjectModel(Profil.name) private ProfilModel: Model<ProfilDocument>,
  ) {}
  Add(body: ProfilDto) {
    return this.ProfilModel.create(body);
  }

  FindAll() {
    return this.ProfilModel.find();
  }

  FindOne(id: string) {
    return this.ProfilModel.findOne({ _id: id });
  }

  Update(id: string, body: ProfilDto) {
    return this.ProfilModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  Delete(id: string) {
    return this.ProfilModel.remove({ _id: id });
  }

  Search(key: string) {
    const keyword = key
      ? {
          $or: [
            { firstName: { $regex: key, $options: 'i' } },
            { lastName: { $regex: key, $options: 'i' } },
          ],
        }
      : {};
    return this.ProfilModel.find(keyword);
  }

  /* Faker() {
    for (let index = 0; index < 30; index++) {
      const fakeProfil = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        categorie: faker.random.words(),
        competences: faker.random.words(),
        pays: faker.address.cityName(),
        avatar: faker.random.words(),
        portfolio: faker.random.words(),
        pricebyhour: 23,
        description: faker.random.words(),
        phone: 233442244,
        dateNaissance: faker.date.birthdate(),
        NumCompte: 2332,
        adresse: faker.address.city(),
      };
      this.ProfilModel.create(fakeProfil);
    }
    return 'success';
  }*/
}
