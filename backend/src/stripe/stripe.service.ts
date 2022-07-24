import { Injectable } from '@nestjs/common';
import { Stripe } from 'stripe';

@Injectable()
export class StripeService {
  constructor(
    private stripe: Stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
      apiVersion: '2020-08-27',
      maxNetworkRetries: 3,
    }),
  ) {}

  async createStripeCustomer(createValue: Stripe.CustomerCreateParams) {
    await this.stripe.customers.create(createValue);
  }
}
