<script setup lang="ts">
import { ArrowRight, Clock, TrendingUp, Users, Zap, CheckCircle2, XCircle, Mountain, Compass, Route, Flag } from 'lucide-vue-next'

useSeoMeta({
  title: 'MJ Growth Partner — Build the System That Runs Your Business',
  description: 'Structured growth strategy and practical AI enablement for owner-operated businesses between $1M and $20M. Stop being the bottleneck.',
})

const { baseURL } = useRuntimeConfig().app

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

const testimonials = [
  {
    quote: 'Working with Marlon has been transformative for both me and my business. His relentless pursuit of solutions, combined with clear and precise communication, gave me the confidence to make important decisions and set clear aspirations for the future.',
    name: 'Aiden Smith',
    title: 'Managing Director',
    company: 'Paramount Fabrication',
    photo: 'images/testimonials/aiden-smith.jpg',
  },
  {
    quote: 'Marlon is present, listens with intent, assesses what the problems are within the business and identifies solutions that could be used to achieve the founders\' goals in a timely and efficient manner. He is an honest, ethical, straight shooter yet compassionate and knowledgeable. He understands your business quickly and identifies ways to improve it out of sight.',
    name: 'Ryan Smith',
    title: 'Founder of Quax',
    company: 'Owner of Bis Tax',
    photo: 'images/testimonials/ryan-smith.png',
  },
  {
    quote: 'Marlon\'s approach to team building and leadership was exactly what I needed. He offered actionable solutions I hadn\'t considered before. Thanks to his guidance, I\'ve transformed my team dynamics and grown as a leader. The systems Marlon helped me implement have made managing staff so much easier, and I feel confident and supported.',
    name: 'Lisa Munro',
    title: 'Managing Director',
    company: 'Happy Tummies',
    photo: 'images/testimonials/lisa-munro.jpg',
  },
  {
    quote: 'Marlon has been an invaluable asset to our company\'s growth journey. As a growth expert, mentor, and advisor within our programs, his genuine approach and exceptional knowledge have been instrumental in guiding the directions of the founders as well as shaping our program\'s success.',
    name: 'Megan Del Borrello',
    title: 'CEO & Founder',
    company: 'We Are Emersyn',
    photo: 'images/testimonials/megan-del-borrello.png',
  },
]

const logos = [
  { name: 'Xcend', file: 'Xcend-Logo-1.png' },
  { name: 'WeMoney', file: 'WeMoney-Logo.png' },
  { name: 'We Are Emersyn', file: 'EMERSYN-Logo.png' },
  { name: 'Central Regional TAFE', file: 'Central-Regional.png' },
  { name: 'Jygro', file: 'Jygro-Logo.png' },
  { name: 'Insight222', file: 'insight222.png' },
  { name: 'EarthFlix', file: 'EarthFlix-Logo.png' },
  { name: 'Novata Solutions', file: 'Novata-Soloutions-Logo-1-1.png' },
  { name: 'Paramount Fabrication', file: 'Paramount-Fabrication.png' },
  { name: 'Bis Tax', file: 'Bis-Tax-Team-Logo.png' },
  { name: 'Quax', file: 'Quax.-Logo.png' },
  { name: 'Louise M Shoes', file: 'Louise-M-Shoes.png' },
]
</script>

<template>
  <div>
    <!-- ============ HERO ============ -->
    <section class="relative min-h-screen flex items-center bg-gradient-to-br from-brand-navy via-brand-navy to-brand-teal-dark overflow-hidden">
      <!-- Background texture -->
      <div class="absolute inset-0 opacity-[0.03] bg-cross-pattern" aria-hidden="true" />

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
              <NuxtLink to="/diagnostic" class="btn-primary-green">
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
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center justify-items-center gap-10 md:gap-12">
            <div
              v-for="logo in logos"
              :key="logo.name"
              class="flex items-center justify-center rounded-xl bg-white border border-gray-100 p-6 h-28 md:h-32 lg:h-36 w-full hover:shadow-md transition-all duration-300"
            >
              <img
                :src="`${baseURL}images/clients/${logo.file}`"
                :alt="logo.name"
                class="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </FadeIn>

        <!-- Testimonials -->
        <div class="grid md:grid-cols-2 gap-6 mt-16 text-left">
          <FadeIn v-for="(t, i) in testimonials" :key="i" :delay="i * 100">
            <div class="bg-white rounded-2xl p-8 border border-gray-100 h-full flex flex-col">
              <div class="flex gap-1 mb-4" aria-label="5 star rating">
                <svg v-for="s in 5" :key="s" class="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p class="text-brand-grey text-sm italic leading-relaxed mb-6 flex-1">
                "{{ t.quote }}"
              </p>
              <div class="flex items-center gap-3">
                <img
                  :src="`${baseURL}${t.photo}`"
                  :alt="t.name"
                  class="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <p class="font-semibold text-sm text-brand-black">{{ t.name }}</p>
                  <p class="text-xs text-brand-grey">{{ t.title }}, {{ t.company }}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ============ FINAL CTA ============ -->
    <section class="relative section-pad bg-gradient-to-br from-brand-navy to-brand-teal-dark text-white overflow-hidden">
      <div class="absolute inset-0 opacity-5 bg-cross-pattern" aria-hidden="true" />

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
            <NuxtLink to="/diagnostic" class="btn-primary-green">
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
