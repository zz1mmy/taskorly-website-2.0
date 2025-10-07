const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for individuals and small teams getting started',
    features: [
      'Up to 5 team members',
      'Basic task management',
      'Mobile app access',
      'Email support',
      '1GB storage'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Professional',
    price: '$12',
    period: '/month per user',
    description: 'Advanced features for growing teams and businesses',
    features: [
      'Unlimited team members',
      'Advanced analytics',
      'Custom workflows',
      'Priority support',
      '100GB storage',
      'Integrations'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      'Everything in Professional',
      'Advanced security',
      'Custom integrations',
      'Dedicated support',
      'Unlimited storage',
      'SLA guarantee'
    ],
    cta: 'Contact Sales',
    popular: false
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Choose the plan that fits your team&apos;s needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg relative ${
                plan.popular ? 'border-2 border-primary-600 scale-105' : 'border border-secondary-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-secondary-900">{plan.price}</span>
                  {plan.period && <span className="text-secondary-600">{plan.period}</span>}
                </div>
                <p className="text-secondary-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-secondary-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular 
                    ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                    : 'bg-secondary-100 hover:bg-secondary-200 text-secondary-900'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
