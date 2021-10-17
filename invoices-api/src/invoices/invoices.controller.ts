import { Controller, Get, ValidationPipe } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { KafkaCreateInvoiceDto } from './dto/create-invoice.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('invoices')
export class InvoicesController {
   constructor(private readonly invoicesService: InvoicesService) { }

   // create(@Payload() message: CreateInvoiceDto) {
   //    return this.invoicesService.create(message);
   @MessagePattern('transactions')
   create(@Payload(new ValidationPipe()) message: KafkaCreateInvoiceDto) {
      return this.invoicesService.create(message.value);
   }

   @Get()
   findAll() {
      return this.invoicesService.findAll();
   }
}