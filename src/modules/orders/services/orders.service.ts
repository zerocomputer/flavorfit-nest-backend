import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/modules/prisma/services";
import { CreateOrderInput, FindAllOrderInput, FindOneOrderInput, UpdateOrderInput } from "../dto";

@Injectable()
export class OrdersService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async create(input: CreateOrderInput) { }

    async findOne(input: FindOneOrderInput) { }

    async findAll(input: FindAllOrderInput) { }

    async update(input: UpdateOrderInput) { }

    async remove(id: string) { }
}