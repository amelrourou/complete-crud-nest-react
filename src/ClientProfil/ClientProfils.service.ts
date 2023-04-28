import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  ClientProfil,
  ClientProfilDocument,
} from './models/ClientProfils.models';
import { ClientProfilDto } from './dto/ClientPofils.dto';

@Injectable()
export class ClientProfilsService {
  constructor(
    @InjectModel(ClientProfil.name)
    private ClientProfilModel: Model<ClientProfilDocument>,
  ) {}
  Add(body: ClientProfilDto) {
    return this.ClientProfilModel.create(body);
  }

  FindAll() {
    return this.ClientProfilModel.find();
  }

  FindOne(id: string) {
    return this.ClientProfilModel.findOne({ _id: id });
  }

  Update(id: string, body: ClientProfilDto) {
    return this.ClientProfilModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  Delete(id: string) {
    return this.ClientProfilModel.remove({ _id: id });
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
    return this.ClientProfilModel.find(keyword);
  }
}
