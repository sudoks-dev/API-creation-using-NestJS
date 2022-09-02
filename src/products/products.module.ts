import { Module } from "@nestjs/common";
import {MongooseModule} from '@nestjs/mongoose';
import { ProductSchema } from "./product.model";
import { ProductController } from "./products.controller";
import { ProductsService } from "./products.service";

@Module({
    imports: [MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}])],
    controllers: [ProductController],
    providers: [ProductsService],
})

export class ProductsModule {}