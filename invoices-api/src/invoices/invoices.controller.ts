import { Controller, Get } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('invoices')
export class InvoicesController {
   constructor(private readonly invoicesService: InvoicesService) { }

   @MessagePattern('transactions')
   create(@Payload() createInvoiceDto: CreateInvoiceDto) {
      return this.invoicesService.create(createInvoiceDto);
   }

   @Get()
   findAll() {
      return this.invoicesService.findAll();
   }
}