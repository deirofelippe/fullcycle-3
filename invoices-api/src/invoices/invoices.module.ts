import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesController } from './invoices.controller';
import { CreditCard } from './entities/credit-card.entity';
import { CreditCardsService } from './credit-cards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { CreditCardController } from './credit-card.controller';

@Module({
   imports: [TypeOrmModule.forFeature([CreditCard, Invoice])],
   controllers: [InvoicesController, CreditCardController],
   providers: [InvoicesService, CreditCardsService]
})
export class InvoicesModule { }
