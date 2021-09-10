import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreditCardsService } from './credit-cards.service';
import { CreateCreditCardDto } from './dto/create-credit-card.dto';

@Controller('credit-card')
export class CreditCardController {
  constructor(private readonly creditCardService: CreditCardsService) {}

  @Post()
  create(@Body() createCreditCardDto: CreateCreditCardDto) {
    return this.creditCardService.create(createCreditCardDto);
  }

  @Get()
  findAll() {
    return this.creditCardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creditCardService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreditCardDto) {
    return this.creditCardService.update(id, updateCreditCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creditCardService.remove(id);
  }
}
