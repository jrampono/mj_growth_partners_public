<script setup lang="ts">
import { ArrowRight, Compass, ChevronDown, CheckCircle2, XCircle, TrendingUp, Settings, Users, DollarSign, Heart, Cpu, Brain, Target } from 'lucide-vue-next'

useSeoMeta({
  title: 'Growth Diagnostic — Know Exactly Where You Stand | MJ Growth Partner',
  description: 'A scored assessment across 8 business dimensions. In 15 minutes, know your strengths, gaps, and what to fix first.',
})

const dimensions = [
  { icon: TrendingUp, name: 'Growth Engine', description: 'Revenue model clarity, pipeline health, and customer acquisition economics. Is your revenue engine built to scale — or built on hope?' },
  { icon: Settings, name: 'Operations & Delivery', description: 'Process maturity, bottlenecks, and capacity. Could your business handle a 30% volume increase without quality falling apart?' },
  { icon: Users, name: 'Team & Leadership', description: 'Founder dependency, role clarity, and delegation. If you went on holiday for two weeks, would the business run smoothly?' },
  { icon: DollarSign, name: 'Financial Health', description: 'Unit economics, cash flow, and margin structure. Growing revenue while bleeding cash is more common than you think.' },
  { icon: Heart, name: 'Customer Experience', description: 'Retention, satisfaction, and feedback loops. Acquiring customers is expensive. Keeping them is where real growth lives.' },
  { icon: Cpu, name: 'Technology & Tools', description: "Stack maturity, integration gaps, and data accessibility. Most SMBs are either under-tooled or over-tooled. We find the gaps." },
  { icon: Brain, name: 'AI Readiness', description: "Process documentation quality, data hygiene, and automation potential. Before AI can help, your business needs a foundation." },
  { icon: Target, name: 'Strategic Clarity', description: 'Vision alignment, prioritisation discipline, and decision-making speed. Growth stalls when the team pulls in different directions.' },
]

const steps = [
  { num: '01', title: 'Complete the Online Assessment', detail: 'Work through practical statements about your business across all 8 dimensions. Rate honestly — where you are today, not where you hope to be. Takes about 15 minutes.' },
  { num: '02', title: 'Book Your Discovery Session', detail: 'A structured 90-minute conversation going deeper on what the scores reveal. We review supporting data — financials, org chart, tech stack — and identify root causes.' },
  { num: '03', title: 'Receive Your Diagnostic Pack', detail: 'Within 5 business days: your Growth Scorecard, Gap Analysis Report, Opportunity Map, and a tailored Phase 2 recommendation.' },
]

const deliverables = [
  { name: 'Growth Scorecard', detail: 'One visual page showing your score across all 8 dimensions. Instantly see where you stand.' },
  { name: 'Gap Analysis Report', detail: "A narrative explaining the 'why' behind your scores — what's causing the gaps and what they're costing you." },
  { name: 'Opportunity Map', detail: 'A prioritised impact-vs-effort matrix. Know which improvements deliver the biggest return first.' },
  { name: 'Phase 2 Recommendation', detail: 'A tailored proposal for your Growth Roadmap, scoped directly from your results.' },
]

const faqs = ref<number | null>(null)

const faqItems = [
  { q: 'How long does the whole process take?', a: 'Approximately two weeks from start to receiving your completed deliverables. The online assessment takes about 15 minutes. The discovery session is 90 minutes. We deliver everything within 5 business days of the session.' },
  { q: 'Do I need to prepare anything?', a: "You'll need your recent P&L (last 12 months minimum), a current org chart or role list, and a list of tools and software your business uses. The more honest and complete your inputs, the more useful the outputs." },
  { q: "What if I already know what my problems are?", a: "Good — most owners have strong instincts about what's wrong. The diagnostic confirms that with data, quantifies the impact, and reveals the problems you haven't seen yet. It also prioritises everything so you know what to fix first." },
  { q: 'Who should be in the discovery session?', a: "Ideally, the business owner and one other person who has a clear view of day-to-day operations — a GM, operations lead, or senior team member. Two perspectives give a more accurate picture." },
  { q: 'What happens after I receive the deliverables?', a: "We walk you through the results and present a tailored recommendation for Phase 2: your Growth Roadmap. No obligation to proceed — the diagnostic deliverables are yours regardless. But most clients continue because the next steps become obvious." },
  { q: 'Is my information confidential?', a: 'Absolutely. All information shared during the diagnostic is treated as strictly confidential. We do not share client data with any third party without your written consent.' },
]

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      }),
    },
  ],
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-gradient-to-br from-brand-navy to-brand-teal-dark text-white pt-32 pb-24 overflow-hidden">
      <div class="container-narrow mx-auto px-6 relative z-10">
        <FadeIn>
          <p class="inline-flex items-center gap-2 text-brand-green text-sm font-semibold tracking-wider uppercase mb-4">
            <Compass :size="16" />
            Base Camp — Phase 1
          </p>
          <h1 class="heading-xl mb-6 max-w-3xl">
            Know Exactly Where<br><span class="text-brand-green">You Stand</span>
          </h1>
          <p class="text-xl text-white/70 max-w-2xl mb-8">
            Before you can plot the route, you need to know the terrain. The Growth Diagnostic
            is a scored assessment across 8 business dimensions that gives you an honest
            picture of your strengths, gaps, and highest-priority opportunities.
          </p>
          <NuxtLink to="/diagnostic/start" class="btn-primary-green">
            Start the Diagnostic
            <ArrowRight :size="18" />
          </NuxtLink>
        </FadeIn>
      </div>
    </section>

    <!-- How It Works -->
    <section class="section-pad bg-white">
      <div class="container-narrow mx-auto">
        <FadeIn>
          <p class="text-brand-teal font-semibold text-sm uppercase tracking-wider mb-3">Reading the map</p>
          <h2 class="heading-lg mb-12">How the Growth Diagnostic Works</h2>
        </FadeIn>

        <div class="grid md:grid-cols-3 gap-8">
          <FadeIn v-for="(step, i) in steps" :key="i" :delay="i * 150">
            <div class="relative">
              <span class="text-6xl font-bold text-brand-teal/10 absolute -top-4 -left-2">{{ step.num }}</span>
              <div class="relative pt-8">
                <h3 class="font-bold text-lg mb-3">{{ step.title }}</h3>
                <p class="text-brand-grey text-sm leading-relaxed">{{ step.detail }}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- 8 Dimensions -->
    <section class="section-pad bg-gray-50">
      <div class="container-narrow mx-auto">
        <FadeIn>
          <div class="text-center mb-16">
            <p class="text-brand-teal font-semibold text-sm uppercase tracking-wider mb-3">The 8 waypoints</p>
            <h2 class="heading-lg mb-4">The 8 Dimensions We Assess</h2>
            <p class="body-lg max-w-2xl mx-auto">
              Every business, regardless of industry, runs on the same fundamental pillars.
              We measure each one so there are no blind spots on the trail.
            </p>
          </div>
        </FadeIn>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeIn v-for="(dim, i) in dimensions" :key="i" :delay="i * 80">
            <div class="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-brand-teal/20 transition-all duration-300 h-full">
              <div class="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-4">
                <component :is="dim.icon" :size="20" class="text-brand-teal" />
              </div>
              <h3 class="font-bold text-sm mb-2">{{ dim.name }}</h3>
              <p class="text-brand-grey text-xs leading-relaxed">{{ dim.description }}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- Deliverables -->
    <section class="section-pad bg-white">
      <div class="container-narrow mx-auto">
        <FadeIn>
          <p class="text-brand-teal font-semibold text-sm uppercase tracking-wider mb-3">What you carry forward</p>
          <h2 class="heading-lg mb-12">What You Walk Away With</h2>
        </FadeIn>

        <div class="grid md:grid-cols-2 gap-6">
          <FadeIn v-for="(d, i) in deliverables" :key="i" :delay="i * 100">
            <div class="flex gap-4 p-6 rounded-2xl bg-gray-50">
              <CheckCircle2 :size="24" class="text-brand-green flex-shrink-0 mt-1" />
              <div>
                <h3 class="font-bold mb-1">{{ d.name }}</h3>
                <p class="text-brand-grey text-sm">{{ d.detail }}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- Who It's For -->
    <section class="section-pad bg-gray-50">
      <div class="container-narrow mx-auto">
        <FadeIn>
          <h2 class="heading-lg mb-12 text-center">Is the Growth Diagnostic Right for You?</h2>
        </FadeIn>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn>
            <div class="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 class="font-bold text-lg mb-6 text-brand-teal">Built for you if:</h3>
              <ul class="space-y-3">
                <li v-for="item in [
                  'Revenue between $1M and $20M',
                  'Team of 5 to 50 people',
                  'Past startup mode, struggling to scale',
                  'Know things need to change but unsure where to focus',
                  'Open to honest feedback and willing to act',
                ]" :key="item" class="flex items-start gap-3 text-sm">
                  <CheckCircle2 :size="18" class="text-brand-green flex-shrink-0 mt-0.5" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn :delay="100">
            <div class="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 class="font-bold text-lg mb-6 text-brand-grey">Probably not the right fit if:</h3>
              <ul class="space-y-3">
                <li v-for="item in [
                  'Pre-revenue or still validating your model',
                  'Looking for a developer to build custom software',
                  'Want advice but aren\'t prepared to implement',
                  'Business is in financial crisis or insolvency',
                ]" :key="item" class="flex items-start gap-3 text-sm text-brand-grey">
                  <XCircle :size="18" class="text-gray-300 flex-shrink-0 mt-0.5" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-pad bg-white">
      <div class="container-narrow mx-auto max-w-3xl">
        <FadeIn>
          <h2 class="heading-lg mb-12 text-center">Common Questions</h2>
        </FadeIn>

        <div class="space-y-3">
          <FadeIn v-for="(faq, i) in faqItems" :key="i" :delay="i * 60">
            <div class="border border-gray-100 rounded-xl overflow-hidden">
              <button
                type="button"
                :aria-expanded="faqs === i"
                :aria-controls="`faq-panel-${i}`"
                class="w-full flex items-center justify-between p-6 text-left font-semibold hover:bg-gray-50 transition-colors"
                @click="faqs = faqs === i ? null : i"
              >
                {{ faq.q }}
                <ChevronDown
                  :size="20"
                  class="flex-shrink-0 text-brand-grey transition-transform duration-300"
                  :class="faqs === i ? 'rotate-180' : ''"
                />
              </button>
              <div
                :id="`faq-panel-${i}`"
                role="region"
                class="grid transition-all duration-300 ease-out overflow-hidden"
                :class="faqs === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
              >
                <div class="overflow-hidden">
                  <p class="px-6 pb-6 text-brand-grey text-sm leading-relaxed">{{ faq.a }}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-pad bg-gradient-to-br from-brand-navy to-brand-teal-dark text-white text-center">
      <div class="container-narrow mx-auto">
        <FadeIn>
          <h2 class="heading-lg mb-4">Ready to Survey the Terrain?</h2>
          <p class="text-xl text-white/70 max-w-xl mx-auto mb-10">
            15 minutes for the assessment. 90 minutes for the discovery session.
            Clarity that lasts as long as you need it.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/diagnostic/start" class="btn-primary-green">
              Start the Growth Diagnostic
              <ArrowRight :size="18" />
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-light">
              Have questions? Book a call
            </NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
