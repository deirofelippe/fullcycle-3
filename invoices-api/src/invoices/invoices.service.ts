import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoicesService {
   constructor(
      @InjectRepository(Invoice)
      private invoiceRepo: Repository<Invoice>
   ){}
   
   create(createInvoiceDto: CreateInvoiceDto) {
      console.log(createInvoiceDto);
      return this.invoiceRepo.create(createInvoiceDto)
   }

   findAll() {
      return this.invoiceRepo.find()
   }
}
