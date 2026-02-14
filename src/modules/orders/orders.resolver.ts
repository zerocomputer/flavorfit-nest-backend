import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { OrdersService } from "./services";
import { OrderModel } from "./models";
import { AuthAccessGuard } from "src/common/guards";
import { CurrentUser } from "src/common/decorators/current-user.decorator";
import type { JwtPayload } from "src/common/interfaces";
import { BadRequestException, NotFoundException, UseGuards } from "@nestjs/common";
import { CreateOrderInput, FindAllOrderInput, FindOneOrderInput, UpdateOrderInput } from "./dto";

@Resolver()
export class OrdersResolver {
    constructor(
        private readonly ordersService: OrdersService,
    ) { }

    @Mutation(() => OrderModel)
    @UseGuards(AuthAccessGuard)
    async createOrder(
        @CurrentUser() user: JwtPayload,
        @Args('input') input: CreateOrderInput,
    ) {
        return this.ordersService.create(user.sub, input);
    }

    @Query(() => OrderModel)
    @UseGuards(AuthAccessGuard)
    async findOneOrder(
        @CurrentUser() user: JwtPayload,
        @Args('input') input: FindOneOrderInput,
    ) {
        const order = await this.ordersService.findOne(input);
        if (!order) throw new NotFoundException('Order not exists');
        if (order?.customerId !== user.sub && !['SUPPORT', 'ADMIN'].includes(user.r)) {
            throw new NotFoundException('Order not exists');
        }

        return order;
    }

    @Query(() => [OrderModel])
    @UseGuards(AuthAccessGuard)
    async findAllOrders(
        @CurrentUser() user: JwtPayload,
        @Args('input') input: FindAllOrderInput,
        @Args('userId', { nullable: true }) userId: string | null = null,
    ) {
        if (['SUPPORT', 'ADMIN'].includes(user.r) && userId === null)
            throw new BadRequestException('User ID was not provided');

        let customerId = user.sub;
        if (['SUPPORT', 'ADMIN'].includes(user.r)) {
            customerId = userId!;
        }

        const orders = await this.ordersService.findAll(customerId, input);
        if (!orders) throw new NotFoundException('User has not orders');

        return orders;
    }

    @Mutation(() => OrderModel)
    @UseGuards(AuthAccessGuard)
    async updateOrder(
        @CurrentUser() user: JwtPayload,
        @Args('orderId') orderId: string,
        @Args('input') input: UpdateOrderInput,
    ) {
        const order = await this.ordersService.findOne({ id: orderId });
        if (!order) throw new NotFoundException('Order not exists');
        if (order?.customerId !== user.sub && !['SUPPORT', 'ADMIN'].includes(user.r)) {
            throw new NotFoundException('Order not exists');
        }

        return this.ordersService.update(orderId, input);
    }

    @Mutation(() => OrderModel)
    @UseGuards(AuthAccessGuard)
    async closeOrder(
        @CurrentUser() user: JwtPayload,
        @Args('orderId') orderId: string,
    ) {
        const order = await this.ordersService.findOne({ id: orderId });
        if (!order) throw new NotFoundException('Order not exists');
        if (order?.customerId !== user.sub && !['SUPPORT', 'ADMIN', 'COURIER'].includes(user.r)) {
            throw new NotFoundException('Order not exists');
        }

        return this.ordersService.close(orderId);
    }

    @Mutation(() => OrderModel)
    @UseGuards(AuthAccessGuard)
    async removeOrder(
        @CurrentUser() user: JwtPayload,
        @Args('orderId') orderId: string,
    ) {
        const order = await this.ordersService.findOne({ id: orderId });
        if (!order) throw new NotFoundException('Order not exists');
        if (order?.customerId !== user.sub && !['SUPPORT', 'ADMIN'].includes(user.r)) {
            throw new NotFoundException('Order not exists');
        }

        return this.ordersService.remove(orderId);
    }
}