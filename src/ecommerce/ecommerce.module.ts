import { Module } from '@nestjs/common';
import { EcommerceController } from './ecommerce.controller';
import { EcommerceService } from './ecommerce.service';

@Module({
  controllers: [EcommerceController],
  providers: [EcommerceService]
})
export class EcommerceModule {}
