import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
   constructor(private readonly proudctsService: ProductsService) {
   }
   // use static route
   @Get('phones')
   getProducts(): string {
      return this.proudctsService.getProducts()
   }

   // use param route (dynamic param)
   @Get(':id/:name')
   getProduct(@Param() params, @Param('name') name): string {
      return `ur id : #${params.id} and ur name : ${name}`
   }


}
