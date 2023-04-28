import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { FreelancerProfilDto } from './dto/FreelancerPofils.dto';

import { FreelancerProfilsService } from './FreelancerProfils.service';

@Controller('Freelancerprofils')
export class FreelancerProfilsController {
  constructor(private readonly service: FreelancerProfilsService) {}

  @Post()
  Add(@Body() body: FreelancerProfilDto) {
    return this.service.Add(body);
  }

  @Get()
  FindAll() {
    return this.service.FindAll();
  }

  @Get('/:id')
  FindOne(@Param('id') id: string) {
    return this.service.FindOne(id);
  }

  @Put('/:id')
  Update(@Param('id') id: string, @Body() body: FreelancerProfilDto) {
    return this.service.Update(id, body);
  }

  @Delete('/:id')
  Delete(@Param('id') id: string) {
    return this.service.Delete(id);
  }

  @Post('/search')
  Search(@Query('key') key) {
    return this.service.Search(key);
  }
}
