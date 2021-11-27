import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CoffeesController } from './coffees/coffees.controller';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, CoffeesController],
  providers: [AppService],
})
export class AppModule { }
