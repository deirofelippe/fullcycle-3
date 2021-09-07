import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { In, Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
   constructor(
      @InjectRepository(Order) private orderRepo: Repository<Order>,
      @InjectRepository(Product) private productRepo: Repository<Product>
   ) { }

   async create(createOrderDto: CreateOrderDto) {
      const order = this.orderRepo.create(createOrderDto)
      const products = await this.productRepo.find({
         where: {
            id: In(order.items.map(item => item.product_id))
         }
      })

      order.items.forEach(item => {
         const product = products.find(
            product => product.id === item.product_id
         )
         item.price = product.price
      })
      
      return this.orderRepo.save(order)
   }

   findAll() {
      return `This action returns all orders`;
   }

   findOne(id: number) {
      return `This action returns a #${id} order`;
   }

   update(id: number, updateOrderDto: UpdateOrderDto) {
      return `This action updates a #${id} order`;
   }

   remove(id: number) {
      return `This action removes a #${id} order`;
   }
}
