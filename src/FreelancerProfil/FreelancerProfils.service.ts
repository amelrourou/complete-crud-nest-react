import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FreelancerProfilDto } from './dto/FreelancerPofils.dto';
import {
  FreelancerProfil,
  FreelancerProfilDocument,
} from './models/FreelancerProfils.models';

@Injectable()
export class FreelancerProfilsService {
  constructor(
    @InjectModel(FreelancerProfil.name)
    private FreelancerProfilModel: Model<FreelancerProfilDocument>,
  ) {}
  Add(body: FreelancerProfilDto) {
    return this.FreelancerProfilModel.create(body);
  }

  FindAll() {
    return this.FreelancerProfilModel.find();
  }

  FindOne(id: string) {
    return this.FreelancerProfilModel.findOne({ _id: id });
  }

  Update(id: string, body: FreelancerProfilDto) {
    return this.FreelancerProfilModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  Delete(id: string) {
    return this.FreelancerProfilModel.remove({ _id: id });
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
    return this.FreelancerProfilModel.find(keyword);
  }
}
