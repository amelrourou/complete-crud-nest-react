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
import { ProfilDto } from 'src/dto/Profils.dto';
import { ProfilsService } from './Profils.service';

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

  /* @Post('faker')
  Faker() {
    return this.service.Faker();
  }*/
}
