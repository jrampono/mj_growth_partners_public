<script setup lang="ts">
import {
  ArrowRight, Compass, Map, Mountain, Flag, Zap, TrendingUp,
  Users, BarChart3, PenTool, UserPlus, BookOpen, FileText, ClipboardList
} from 'lucide-vue-next'

useSeoMeta({
  title: 'The Growth System — Four Phases to Summit | MJ Growth Partner',
  description: 'Diagnose. Strategise. Enable. Accelerate. A proven 4-phase methodology that takes your business from stuck to scaling.',
})

const playbooks = [
  'Founder Bottleneck Breaker',
  'Revenue Engine Build',
  'Ops Efficiency Sprint',
  'Cash Flow Stabiliser',
  'Customer Retention Reset',
  'Tech Stack Rationalisation',
  'Decision-Making Framework',
  'Scale Readiness Assessment',
]

const aiModules = [
  { icon: TrendingUp, name: 'Lead & Pipeline Management', detail: 'Single pipeline view, automated follow-ups, AI-drafted outreach in a CRM your team will actually use.' },
  { icon: PenTool, name: 'Smart Client Communications', detail: 'AI drafts emails, proposals, and follow-ups from your templates and tone. You review and send.' },
  { icon: BarChart3, name: 'Automated Reporting & Dashboards', detail: 'Replace manual reports with automated dashboards and AI-generated narrative summaries.' },
  { icon: Zap, name: 'Content & Marketing Engine', detail: 'Consistent social content and newsletters without depending on one person finding time to write.' },
  { icon: UserPlus, name: 'Client Onboarding Automation', detail: 'Welcome sequences, document collection, and setup tasks — handled consistently every time.' },
  { icon: BookOpen, name: 'Meeting & Knowledge Management', detail: 'AI-powered meeting notes, automatic action tracking, and a searchable knowledge base.' },
  { icon: FileText, name: 'Document & Proposal Generation', detail: 'SOWs, contracts, and quotes from templates in minutes instead of hours.' },
  { icon: ClipboardList, name: 'Process Documentation & SOPs', detail: 'Turn tribal knowledge into documented, searchable procedures your business needs to scale.' },
]

const tiers = [
  {
    name: 'Essentials',
    trail: 'Steady Pace',
    features: ['Monthly check-in call', 'KPI dashboard review', 'Async support (email + voice)', 'Monthly progress summary'],
    best: 'Businesses that want a steady rhythm and a second pair of eyes on the numbers.',
  },
  {
    name: 'Growth',
    trail: 'Active Climb',
    popular: true,
    features: ['Fortnightly check-in calls', 'Quarterly roadmap refresh', 'AI workflow optimisation', 'Annual re-diagnostic (full Phase 1)'],
    best: 'Businesses in an active growth phase needing closer support and regular course corrections.',
  },
  {
    name: 'Partner',
    trail: 'Summit Team',
    features: ['Weekly calls with direct senior access', 'Strategic advisory on major decisions', 'Priority support for urgent issues', 'Quarterly refresh + annual re-diagnostic'],
    best: 'Owners who want a true operational partner in their corner every week.',
  },
]

const timeline = [
  { weeks: 'Week 1–2', phase: 'Diagnostic', detail: 'Complete assessment, discovery session, receive scorecard and gap analysis.' },
  { weeks: 'Week 3–6', phase: 'Roadmap', detail: 'Deep-dive workshops, proven playbooks applied, 90-day action plan with AI opportunities flagged.' },
  { weeks: 'Week 7–12', phase: 'AI Accelerator', detail: 'Implement 2-4 AI workflows. Tools live, team trained, before-and-after metrics captured.' },
  { weeks: 'Month 4+', phase: 'Partnership', detail: 'Ongoing accountability, KPI reviews, quarterly refreshes, continuous optimisation.' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-gradient-to-br from-brand-navy to-brand-teal-dark text-white pt-32 pb-24">
      <div class="container-narrow mx-auto px-6">
        <FadeIn>
          <p class="text-brand-green text-sm font-semibold tracking-wider uppercase mb-4">The proven trail to the summit</p>
          <h1 class="heading-xl mb-6 max-w-3xl">
            The Growth System
          </h1>
          <p class="text-xl text-white/70 max-w-2xl mb-2">
            Every client follows the same structured pathway. The methodology is fixed.
            The route is tailored to your terrain.
          </p>
          <p class="text-lg text-white/50">
            Diagnose. Strategise. Enable. Accelerate.
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- Phase 1: Diagnostic -->
    <section class="section-pad bg-white">
      <div class="container-narrow mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-sm font-bold text-brand-teal">1</div>
                <p class="text-brand-green text-sm font-semibold uppercase tracking-wider">Base Camp</p>
              </div>
              <h2 class="heading-lg mb-4">Growth Diagnostic</h2>
              <p class="body-md mb-6">
                Every expedition starts by understanding the terrain. A scored assessment
                across 8 critical dimensions, followed by a structured discovery session
                and a full set of diagnostic deliverables.
              </p>
              <NuxtLink to="/diagnostic" class="btn-secondary">
                Learn More
                <ArrowRight :size="18" />
              </NuxtLink>
            </div>
          </FadeIn>
          <FadeIn :delay="200">
            <div class="bg-gray-50 rounded-2xl p-8">
              <div class="space-y-4 text-sm">
                <div class="flex justify-between"><span class="text-brand-grey">Timeline</span><span class="font-semibold">~2 weeks</span></div>
                <div class="h-px bg-gray-200" />
                <div><span class="text-brand-grey">Deliverables:</span></div>
                <ul class="space-y-2 ml-4">
                  <li v-for="d in ['Growth Scorecard', 'Gap Analysis Report', 'Opportunity Map', 'Phase 2 Recommendation']" :key="d" class="flex items-center gap-2">
                    <Compass :size="14" class="text-brand-teal" />
                    {{ d }}
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- Phase 2: Roadmap -->
    <section id="roadmap" class="section-pad bg-gray-50">
      <div class="container-narrow mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <div class="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 class="font-bold text-sm text-brand-grey uppercase tracking-wider mb-6">Growth Playbooks</h3>
              <div class="grid grid-cols-2 gap-3">
                <div v-for="(pb, i) in playbooks" :key="i" class="text-sm p-3 rounded-lg bg-gray-50 font-medium">
                  {{ pb }}
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn :delay="100">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-sm font-bold text-brand-teal">2</div>
                <p class="text-brand-green text-sm font-semibold uppercase tracking-wider">Plot the Route</p>
              </div>
              <h2 class="heading-lg mb-4">Growth Roadmap</h2>
              <p class="body-md mb-4">
                Your 90-day action plan built from proven playbooks. Not generic advice — a concrete
                implementation plan with owners assigned, milestones defined, and measurable outcomes.
              </p>
              <p class="body-md mb-6">
                We run 2-3 deep-dive workshops focused on the dimensions where your diagnostic
                scored lowest, applying the right playbook for each priority area.
              </p>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between"><span class="text-brand-grey">Timeline</span><span class="font-semibold">3–4 weeks</span></div>
                <div class="flex justify-between"><span class="text-brand-grey">Pricing</span><span class="font-semibold">Fixed fee by scope</span></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- Phase 3: AI Accelerator -->
    <section id="accelerator" class="section-pad bg-white">
      <div class="container-narrow mx-auto">
        <FadeIn>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-sm font-bold text-brand-teal">3</div>
            <p class="text-brand-green text-sm font-semibold uppercase tracking-wider">The Climb</p>
          </div>
          <h2 class="heading-lg mb-4">AI Accelerator</h2>
          <p class="body-lg max-w-3xl mb-4">
            This is where most advisory firms stop. We don't. We take the processes from your
            roadmap and build AI-assisted workflows that save your team hours every week.
          </p>
          <p class="text-brand-teal font-medium mb-12">
            Our principle: fix the process first, then apply AI. AI on a broken process just produces faster broken outputs.
          </p>
        </FadeIn>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FadeIn v-for="(mod, i) in aiModules" :key="i" :delay="i * 80">
            <div class="p-5 rounded-xl border border-gray-100 hover:border-brand-teal/20 hover:shadow-md transition-all duration-300 h-full">
              <component :is="mod.icon" :size="20" class="text-brand-teal mb-3" />
              <h4 class="font-bold text-sm mb-2">{{ mod.name }}</h4>
              <p class="text-xs text-brand-grey leading-relaxed">{{ mod.detail }}</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn :delay="600">
          <div class="mt-8 flex gap-8 text-sm text-brand-grey">
            <div><span class="text-brand-black font-semibold">Timeline:</span> 4–6 weeks</div>
            <div><span class="text-brand-black font-semibold">Scope:</span> 2–4 modules per engagement</div>
            <div><span class="text-brand-black font-semibold">Pricing:</span> Fixed fee per module</div>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- Phase 4: Partnership -->
    <section id="partnership" class="section-pad bg-gray-50">
      <div class="container-narrow mx-auto">
        <FadeIn>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-sm font-bold text-brand-teal">4</div>
            <p class="text-brand-green text-sm font-semibold uppercase tracking-wider">The Summit & Beyond</p>
          </div>
          <h2 class="heading-lg mb-4">Growth Partnership</h2>
          <p class="body-lg max-w-3xl mb-12">
            The summit isn't the end — it's a new vantage point. Ongoing accountability,
            KPI reviews, and continuous optimisation keep your systems running and improving.
          </p>
        </FadeIn>

        <div class="grid md:grid-cols-3 gap-6">
          <FadeIn v-for="(tier, i) in tiers" :key="i" :delay="i * 150">
            <div
              class="rounded-2xl p-8 h-full relative"
              :class="tier.popular
                ? 'bg-brand-navy text-white shadow-xl'
                : 'bg-white border border-gray-100'
              "
            >
              <div v-if="tier.popular" class="absolute -top-3 left-6 bg-brand-green text-brand-black text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </div>
              <p class="text-xs font-semibold uppercase tracking-wider mb-2" :class="tier.popular ? 'text-brand-green' : 'text-brand-green'">
                {{ tier.trail }}
              </p>
              <h3 class="text-2xl font-bold mb-6">{{ tier.name }}</h3>
              <ul class="space-y-3 mb-8">
                <li v-for="f in tier.features" :key="f" class="flex items-start gap-2 text-sm" :class="tier.popular ? 'text-white/80' : 'text-brand-grey'">
                  <Flag :size="14" class="flex-shrink-0 mt-1" :class="tier.popular ? 'text-brand-green' : 'text-brand-teal'" />
                  {{ f }}
                </li>
              </ul>
              <p class="text-xs leading-relaxed" :class="tier.popular ? 'text-white/60' : 'text-brand-grey'">
                {{ tier.best }}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="section-pad bg-white">
      <div class="container-narrow mx-auto">
        <FadeIn>
          <div class="text-center mb-16">
            <p class="text-brand-teal font-semibold text-sm uppercase tracking-wider mb-3">The trail map</p>
            <h2 class="heading-lg">The Full Journey</h2>
          </div>
        </FadeIn>

        <div class="max-w-2xl mx-auto">
          <div class="relative">
            <!-- Vertical trail line -->
            <div class="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-teal via-brand-teal to-brand-green" />

            <div v-for="(step, i) in timeline" :key="i" class="relative pl-16 pb-12 last:pb-0">
              <FadeIn :delay="i * 150">
                <!-- Trail marker -->
                <div class="absolute left-3.5 top-1 w-5 h-5 rounded-full border-2 border-brand-teal bg-white" />

                <p class="text-brand-teal text-xs font-bold uppercase tracking-wider mb-1">{{ step.weeks }}</p>
                <h3 class="font-bold text-lg mb-2">{{ step.phase }}</h3>
                <p class="text-brand-grey text-sm leading-relaxed">{{ step.detail }}</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-pad bg-gradient-to-br from-brand-navy to-brand-teal-dark text-white text-center">
      <div class="container-narrow mx-auto">
        <FadeIn>
          <h2 class="heading-lg mb-4">Every Journey Starts at Base Camp</h2>
          <p class="text-xl text-white/70 max-w-xl mx-auto mb-10">
            The Growth Diagnostic is the fastest way to understand where your business stands
            and what to focus on first. Everything else flows from there.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/diagnostic/start" class="btn-primary !bg-brand-green !text-brand-black hover:!bg-white">
              Take the Growth Diagnostic
              <ArrowRight :size="18" />
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-light">
              Book a call to discuss
            </NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
