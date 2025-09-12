import { Injectable } from '@nestjs/common';
import { Product } from '../../prisma/generated';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getProducts(): Promise<Product[]> {
    return this.prisma.product.findMany({});
  }
}
