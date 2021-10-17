import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreditCardsService } from './credit-cards.service';
import { CreateCreditCardDto } from './dto/create-credit-card.dto';

@Controller('credit-cards')
export class CreditCardController {
   constructor(private readonly creditCardService: CreditCardsService) { }

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
}