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

import { ProfilsService } from './Profils.service';
import { ProfilDto } from './dto/profils.dto';

@Controller('profils')
export class ProfilsController {
  constructor(private readonly service: ProfilsService) {}

  @Post()
  Add(@Body() body: ProfilDto) {
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
  Update(@Param('id') id: string, @Body() body: ProfilDto) {
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
