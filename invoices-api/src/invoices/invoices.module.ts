import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesController } from './invoices.controller';
import { CreditCard } from './entities/credit-card.entity';
import { CreditCardsService } from './credit-cards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';

@Module({
   imports: [TypeOrmModule.forFeature([CreditCard, Invoice])],
   controllers: [InvoicesController, CreditCard],
   providers: [InvoicesService, CreditCardsService]
})
export class InvoicesModule { }
