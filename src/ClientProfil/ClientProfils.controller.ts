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

import { ClientProfilsService } from './ClientProfils.service';
import { ClientProfilDto } from './dto/ClientPofils.dto';

@Controller('Clientprofils')
export class ClientProfilsController {
  constructor(private readonly service: ClientProfilsService) {}

  @Post()
  Add(@Body() body: ClientProfilDto) {
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
  Update(@Param('id') id: string, @Body() body: ClientProfilDto) {
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
