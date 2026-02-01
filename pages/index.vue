<script setup lang="ts">
import { ArrowRight, Clock, TrendingUp, Users, Zap, CheckCircle2, XCircle, Mountain, Compass, Route, Flag } from 'lucide-vue-next'

useSeoMeta({
  title: 'MJ Growth Partner — Build the System That Runs Your Business',
  description: 'Structured growth strategy and practical AI enablement for owner-operated businesses between $1M and $20M. Stop being the bottleneck.',
})

const painPoints = [
  { icon: Users, text: 'You are the bottleneck.', detail: 'Every decision, every client relationship, every important task runs through you. Step away for a week and things slip.' },
  { icon: Clock, text: "You know what needs fixing — but there's no bandwidth.", detail: "The strategy is clear enough. The problem is finding time to actually execute it while running the day-to-day." },
  { icon: Zap, text: "Manual processes are eating your team alive.", detail: "Proposals, reports, onboarding, follow-ups — all done by hand, every single time. Your team is busy, but not efficient." },
  { icon: TrendingUp, text: "Everyone says 'use AI' but nobody shows you where.", detail: "You're not against technology. You just need someone to cut through the noise and show you what actually works for your business." },
]

const phases = [
  { phase: 1, name: 'Growth Diagnostic', trail: 'Base Camp', icon: 'Compass', description: 'Establish where you really are. A scored assessment across 8 business dimensions — honest, data-driven, no guesswork.' },
  { phase: 2, name: 'Growth Roadmap', trail: 'Plot the Route', icon: 'Route', description: "Build your 90-day action plan using proven playbooks. Concrete milestones, clear owners, measurable outcomes." },
  { phase: 3, name: 'AI Accelerator', trail: 'The Climb', icon: 'Mountain', description: 'Implement AI-assisted workflows on the processes draining your time. Practical tools, real training, running in your business.' },
  { phase: 4, name: 'Growth Partnership', trail: 'The Summit & Beyond', icon: 'Flag', description: 'Ongoing accountability, KPI reviews, quarterly roadmap refreshes. The system keeps running and improving.' },
]

const comparisons = [
  { theirs: 'Motivational conversations', ours: 'A scored diagnostic and prioritised action plan' },
  { theirs: '"You should fix your sales process"', ours: 'A documented sales process with AI-assisted pipeline management' },
  { theirs: 'Advice about AI', ours: 'Actual AI workflows running in your business' },
  { theirs: 'Dependency on the coach', ours: 'Templates, playbooks, and systems that work without us' },
  { theirs: 'Vague ROI', ours: 'Before-and-after metrics on every engagement' },
]

const logos = [
  'Xcend', 'WeMoney', 'We Are Emersyn', 'Central Regional TAFE', 'Jygro', 'Insight222',
  'EarthFlix', 'Novata Solutions', 'Paramount Fabrication', 'Bis Tax', 'Quax', 'Louise M Shoes',
]
</script>

<template>
  <div>
    <!-- ============ HERO ============ -->
    <section class="relative min-h-screen flex items-center bg-gradient-to-br from-brand-navy via-brand-navy to-brand-teal-dark overflow-hidden">
      <!-- Background texture -->
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" />

      <div class="container-narrow mx-auto px-6 pt-32 pb-40 relative z-10">
        <div class="max-w-3xl">
          <FadeIn>
            <p class="inline-flex items-center gap-2 text-brand-green text-sm font-semibold tracking-wider uppercase mb-6">
              <Mountain :size="16" />
              Your guide to the summit
            </p>
          </FadeIn>

          <FadeIn :delay="100">
            <h1 class="heading-xl text-white mb-6">
              You Built This Business.<br>
              <span class="text-brand-green">Now Build the System</span><br>
              That Runs It.
            </h1>
          </FadeIn>

          <FadeIn :delay="200">
            <p class="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
              Every mountain needs a proven trail. MJ Growth Partner combines business strategy
              with practical AI enablement to help owner-operated businesses break through
              the ceiling and scale — without everything depending on you.
            </p>
          </FadeIn>

          <FadeIn :delay="300">
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/diagnostic" class="btn-primary !bg-brand-green !text-brand-black hover:!bg-white">
                Take the Growth Diagnostic
                <ArrowRight :size="18" />
              </NuxtLink>
              <NuxtLink to="/contact" class="btn-light">
                Book a Call
              </NuxtLink>
            </div>
          </FadeIn>
        </div>
      </div>

      <!-- Mountain scene -->
      <MountainScene variant="hero" />
    </section>

    <!-- ============ PAIN POINTS ============ -->
    <section class="section-pad bg-white">
      <div class="container-narrow mx-auto">
        <FadeIn>
          <p class="text-brand-teal font-semibold text-sm uppercase tracking-wider mb-3">The terrain looks familiar</p>
          <h2 class="heading-lg mb-4">Sound Familiar?</h2>
          <p class="body-lg max-w-2xl mb-12">
            You started this business because you were good at what you do. But somewhere
            between $1M and $20M, the job changed. Now you spend more time managing chaos
            than building something great.
          </p>
        </FadeIn>

        <div class="grid md:grid-cols-2 gap-6">
          <FadeIn v-for="(point, i) in painPoints" :key="i" :delay="i * 100">
            <div class="p-6 rounded-2xl border border-gray-100 hover:border-brand-teal/20 hover:shadow-md transition-all duration-300 h-full">
              <div class="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                <component :is="point.icon" :size="20" class="text-red-400" />
              </div>
              <h3 class="font-bold text-lg mb-2">{{ point.text }}</h3>
              <p class="text-brand-grey text-sm leading-relaxed">{{ point.detail }}</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn :delay="400">
          <p class="text-center body-lg mt-12 font-medium text-brand-black">
            The result: growth stalls, you burn out, and the business stays dependent on one person.
            <span class="text-brand-teal font-bold">There's a better trail.</span>
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- ============ THE TRAIL (4 Phases) ============ -->
    <section class="section-pad bg-gray-50">
      <div class="container-narrow mx-auto">
        <FadeIn>
          <div class="text-center mb-16">
            <p class="text-brand-teal font-semibold text-sm uppercase tracking-wider mb-3">The proven trail</p>
            <h2 class="heading-lg mb-4">The Growth System</h2>
            <p class="body-lg max-w-2xl mx-auto">
              Every ascent follows the same proven path. The methodology is fixed.
              The route is tailored to your terrain.
            </p>
          </div>
        </FadeIn>

        <!-- Trail line -->
        <div class="relative">
          <!-- Connecting trail (desktop) -->
          <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-teal/20 via-brand-teal/40 to-brand-green/40" style="transform: translateY(-50%)" />
          <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-teal via-brand-teal to-brand-green" style="transform: translateY(-50%); clip-path: polygon(0 0, 25% 0, 25% 100%, 0 100%)" />

          <div class="grid lg:grid-cols-4 gap-6 relative">
            <FadeIn v-for="(phase, i) in phases" :key="i" :delay="i * 150">
              <PhaseCard v-bind="phase" :active="i === 0" />
            </FadeIn>
          </div>
        </div>

        <FadeIn :delay="600">
          <div class="text-center mt-12">
            <NuxtLink to="/services" class="btn-secondary">
              See the Full Journey
              <ArrowRight :size="18" />
            </NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- ============ DIFFERENTIATOR ============ -->
    <section class="section-pad bg-white">
      <div class="container-narrow mx-auto">
        <FadeIn>
          <p class="text-brand-teal font-semibold text-sm uppercase tracking-wider mb-3">Different altitude, different view</p>
          <h2 class="heading-lg mb-4">What Makes This Different</h2>
          <p class="body-lg max-w-2xl mb-12">
            You've probably worked with a business coach or consultant before. Here's what
            typically happens — and how this is different.
          </p>
        </FadeIn>

        <FadeIn>
          <div class="space-y-4">
            <div
              v-for="(row, i) in comparisons"
              :key="i"
              class="grid md:grid-cols-2 gap-4 p-5 rounded-xl border border-gray-100 hover:border-brand-teal/10 transition-colors"
            >
              <div class="flex items-start gap-3">
                <XCircle :size="18" class="text-gray-300 flex-shrink-0 mt-0.5" />
                <span class="text-brand-grey text-sm">{{ row.theirs }}</span>
              </div>
              <div class="flex items-start gap-3">
                <CheckCircle2 :size="18" class="text-brand-green flex-shrink-0 mt-0.5" />
                <span class="text-sm font-medium text-brand-black">{{ row.ours }}</span>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn :delay="400">
          <div class="mt-12 p-8 rounded-2xl bg-brand-navy text-white text-center">
            <p class="text-xl md:text-2xl font-bold mb-2">
              We don't just tell you what to do —
            </p>
            <p class="text-xl md:text-2xl font-bold text-brand-green">
              we build the system that does it.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- ============ SOCIAL PROOF ============ -->
    <section class="section-pad bg-gray-50">
      <div class="container-narrow mx-auto text-center">
        <FadeIn>
          <p class="text-brand-teal font-semibold text-sm uppercase tracking-wider mb-3">Fellow travellers</p>
          <h2 class="heading-lg mb-12">Trusted by Founders Across Australia</h2>
        </FadeIn>

        <FadeIn :delay="100">
          <div class="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
            <span v-for="logo in logos" :key="logo" class="text-sm font-semibold text-brand-grey tracking-wide">
              {{ logo }}
            </span>
          </div>
        </FadeIn>

        <!-- Testimonial placeholders -->
        <div class="grid md:grid-cols-3 gap-6 mt-16">
          <FadeIn v-for="i in 3" :key="i" :delay="i * 100">
            <div class="bg-white rounded-2xl p-8 text-left border border-gray-100">
              <div class="flex gap-1 mb-4">
                <div v-for="s in 5" :key="s" class="w-5 h-5 rounded-full bg-brand-green/20" />
              </div>
              <p class="text-brand-grey text-sm italic leading-relaxed mb-6">
                "{{ i === 1 ? 'Testimonial about measurable before-and-after results from working with Marlon and the Growth System methodology.' : i === 2 ? 'Testimonial about how this was different from other coaches — focused on implementation, not just advice.' : 'Testimonial from a portfolio company about operational involvement and building real systems.' }}"
              </p>
              <div>
                <p class="font-semibold text-sm text-brand-black">Client Name</p>
                <p class="text-xs text-brand-grey">Title, Company</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ============ FINAL CTA ============ -->
    <section class="relative section-pad bg-gradient-to-br from-brand-navy to-brand-teal-dark text-white overflow-hidden">
      <div class="absolute inset-0 opacity-5" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" />

      <div class="container-narrow mx-auto text-center relative z-10">
        <FadeIn>
          <Compass :size="48" class="mx-auto mb-6 text-brand-green" />
          <h2 class="heading-lg mb-4">Find Out Where Your Business Really Stands</h2>
          <p class="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            The Growth Diagnostic takes 15 minutes and gives you a scored assessment
            across 8 dimensions of your business. No commitment. No sales pitch.
            Just a clear picture of the terrain ahead.
          </p>
        </FadeIn>

        <FadeIn :delay="200">
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/diagnostic" class="btn-primary !bg-brand-green !text-brand-black hover:!bg-white">
              Take the Growth Diagnostic
              <ArrowRight :size="18" />
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-light">
              Prefer to talk first? Book a call
            </NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
