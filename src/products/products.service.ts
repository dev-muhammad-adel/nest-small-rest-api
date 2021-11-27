import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
   getProducts(): string {
      return 'this action get all products'
   }
}
