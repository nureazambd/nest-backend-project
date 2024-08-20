// import { Controller } from '@nestjs/common';

// @Controller('items')
// export class ItemsController {}

import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { ItemsService } from './items.service';
// import { Item } from './schemas/item.schema';
import { Item } from './schemas/items.schema';


@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  async create(@Body() item: Item): Promise<Item> {
    return this.itemsService.create(item);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() item: Item): Promise<Item> {
    return this.itemsService.update(id, item);
  }
}
