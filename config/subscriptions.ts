import { SubscriptionPlan } from "types"
import { env } from "@/env.mjs"

export const pricingData: SubscriptionPlan[] = [
  {
    title: 'Starter',
    description: 'For Beginners',
    benefits: [
      'Up to 10 monthly pages',
      '$5 for extra 100 pages',
      'Basic analytics and reporting',
      'Access to standard document types',
    ],
    limitations: [
      'Web only.',
      'Limited customer support',
    ],
    prices: {
      monthly: 0,
      yearly: 0,
    },
    stripeIds: {
      monthly: null,
      yearly: null,
    },
  },
  {
    title: 'Pro',
    description: 'Unlock Advanced Features',
    benefits: [
      'Up to 1000 monthly pages',
      '$40 for extra 1000 pages',
      'Locally scanning',
      'Build your own document types',
      'Access to advanced document types',
      'Advanced analytics and reporting',
      'Priority customer support',
    ],
    limitations: [
      'Locally scanning without page counting with a trained model',
    ],
    prices: {
      monthly: 40,
      yearly: 384,
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID,
    },
  },
  {
    title: 'Business',
    description: 'For Power Users',
    benefits: [
      'Up to 30000 monthly pages',
      '$300 for extra 10000 pages',
      'Unlimited pages counting with locally scanning with a standard trained model, $800+ per extra trained model',
      'Real-time analytics and reporting',
      '24/7 business customer support',
      'Personalized onboarding and account management.',
    ],
    limitations: [],
    prices: {
      monthly: 1000,
      yearly: 9600,
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID,
    },
  },
];
