<script setup lang="ts">
import { ArrowRight, Mountain, CheckCircle2 } from 'lucide-vue-next'

useSeoMeta({
  title: 'About — Built From the Inside, Not the Textbook | MJ Growth Partner',
  description: 'MJ Growth Partner was built from real operational experience across dozens of businesses — not theory.',
})

const principles = [
  { title: 'Systems over heroics', detail: "If growth depends on one person working harder, it's not sustainable. Build the system." },
  { title: 'Fix the fundamentals first', detail: "AI is a powerful tool, but it doesn't fix a broken process. Get the foundation right, then accelerate." },
  { title: 'Measure everything that matters', detail: "If you can't measure it, you can't improve it. Every engagement starts and ends with data." },
  { title: 'Implementation beats advice', detail: "The world doesn't need more strategy decks. It needs strategies that get implemented." },
]

const whyItWorks = [
  { title: 'Built from real operational experience', detail: 'Every playbook, every diagnostic question, every AI module was developed from problems personally encountered and solved. Not theory — documented pattern recognition from years in the trenches.' },
  { title: 'Structured but not rigid', detail: "The methodology is fixed because it works. The outputs are always tailored. Rigour of a proven system with the flexibility of someone who understands every business has its own context." },
  { title: 'Includes implementation, not just recommendations', detail: "The biggest failure mode of advisory work is the handover gap. Phase 3 exists specifically to make sure the plan becomes reality." },
  { title: 'AI as a practical tool, not a buzzword', detail: "We identify the specific processes where AI saves the most time and delivers the most value — then we implement it. If AI isn't right for a process, we'll say so." },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-gradient-to-br from-brand-navy to-brand-teal-dark text-white pt-32 pb-24">
      <div class="container-narrow mx-auto px-6">
        <FadeIn>
          <p class="text-brand-green text-sm font-semibold tracking-wider uppercase mb-4">
            <Mountain :size="16" class="inline -mt-0.5 mr-1" />
            The guide
          </p>
          <h1 class="heading-xl mb-6 max-w-3xl">
            Built From the Inside,<br><span class="text-brand-green">Not the Textbook</span>
          </h1>
          <p class="text-xl text-white/70 max-w-2xl">
            MJ Growth Partner exists because the same growth problems show up in every
            business — and most of the available help doesn't actually fix them.
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- Marlon's Story -->
    <section class="section-pad bg-white">
      <div class="container-narrow mx-auto">
        <div class="grid lg:grid-cols-5 gap-12 items-start">
          <!-- Photo placeholder -->
          <FadeIn class="lg:col-span-2">
            <div class="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="/images/team/marlon-juenemann.png"
                alt="Marlon Juenemann — Principal Growth Partner"
                class="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </FadeIn>

          <!-- Story -->
          <FadeIn :delay="200" class="lg:col-span-3">
            <h2 class="heading-lg mb-6">Meet Marlon Juenemann</h2>

            <div class="space-y-4 body-md">
              <p>
                I've spent 17 years building, managing, and fixing businesses — not advising
                from the sidelines.
              </p>

              <p>
                As an entrepreneur, I co-founded and scaled a hypergrowth fintech and a B2B SaaS,
                experiencing the highs and lows firsthand. I know what it feels like to be the
                person every decision runs through, to work weekends because no one else can do
                what you do, and to wonder if the business will ever run without you in the room.
              </p>

              <p>
                As a consultant, I co-founded and grew a strategy boutique from 0 to 50 employees,
                advising 100+ clients on market-entry and strategy. As a venture capital portfolio
                manager, I've overseen 8+ portfolio companies simultaneously — each at a different
                stage, each with different problems, each needing practical help, not theoretical
                frameworks.
              </p>

              <p>
                Along the way, I've mentored founders through accelerator programs including
                Antler, We Are Emersyn, Startmate, and PlusEight — and backed five promising
                companies (and counting) as an investor, supporting founders beyond just capital.
              </p>

              <p>
                That experience taught me something: the same growth problems show up everywhere.
                Founder dependency. Manual processes. Unclear strategy. Tool sprawl. And the
                solution was never more advice — it was better systems.
              </p>

              <p>
                I created MJ Growth Partner because I saw a gap that frustrated me. On one side,
                business coaches who offer great conversations but don't change how the business
                operates. On the other, tech consultants who implement tools without understanding
                the business. Neither solves the real problem.
              </p>

              <p class="text-brand-black font-medium">
                The real problem is that most growing businesses need someone who understands both —
                someone who can diagnose the fundamentals, build a practical plan, and implement
                the systems that make it repeatable. That's what I do.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- Principles -->
    <section class="section-pad bg-gray-50">
      <div class="container-narrow mx-auto">
        <FadeIn>
          <p class="text-brand-teal font-semibold text-sm uppercase tracking-wider mb-3">Trail rules</p>
          <h2 class="heading-lg mb-12">The Philosophy</h2>
        </FadeIn>

        <div class="grid md:grid-cols-2 gap-6">
          <FadeIn v-for="(p, i) in principles" :key="i" :delay="i * 100">
            <div class="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 class="font-bold text-lg mb-2">{{ p.title }}</h3>
              <p class="text-brand-grey text-sm leading-relaxed">{{ p.detail }}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- Why the methodology works -->
    <section class="section-pad bg-white">
      <div class="container-narrow mx-auto">
        <FadeIn>
          <p class="text-brand-teal font-semibold text-sm uppercase tracking-wider mb-3">Why this trail</p>
          <h2 class="heading-lg mb-12">Why the Methodology Works</h2>
        </FadeIn>

        <div class="space-y-6 max-w-3xl">
          <FadeIn v-for="(item, i) in whyItWorks" :key="i" :delay="i * 100">
            <div class="flex gap-4">
              <CheckCircle2 :size="24" class="text-brand-green flex-shrink-0 mt-1" />
              <div>
                <h3 class="font-bold mb-1">{{ item.title }}</h3>
                <p class="text-brand-grey text-sm leading-relaxed">{{ item.detail }}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- Ubuntu Ventures Connection -->
    <section class="section-pad bg-gray-50">
      <div class="container-narrow mx-auto">
        <FadeIn>
          <div class="max-w-3xl mx-auto text-center">
            <p class="text-brand-teal font-semibold text-sm uppercase tracking-wider mb-3">Part of the ecosystem</p>
            <h2 class="heading-lg mb-6">The Ubuntu Ventures Connection</h2>
            <p class="body-md mb-8">
              MJ Growth Partner is the services arm of Ubuntu Ventures — an active,
              family-office-style investment platform.
            </p>
          </div>
        </FadeIn>

        <FadeIn :delay="200">
          <div class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div class="bg-white rounded-2xl p-8 border border-gray-100 text-center">
              <div class="w-12 h-12 rounded-full bg-brand-teal/10 mx-auto mb-4 flex items-center justify-center">
                <span class="text-brand-teal font-bold text-sm">UV</span>
              </div>
              <h3 class="font-bold mb-2">Ubuntu Ventures</h3>
              <p class="text-sm text-brand-grey">Patient capital and strategic support for early-stage and growth-stage companies.</p>
            </div>
            <div class="bg-white rounded-2xl p-8 border-2 border-brand-teal/20 text-center">
              <div class="w-12 h-12 rounded-full bg-brand-teal/10 mx-auto mb-4 flex items-center justify-center">
                <MjLogo :size="28" />
              </div>
              <h3 class="font-bold mb-2">MJ Growth Partner</h3>
              <p class="text-sm text-brand-grey">Structured growth services — diagnostic, strategy, AI enablement, and ongoing partnership.</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn :delay="300">
          <p class="text-center text-sm text-brand-grey mt-8 max-w-xl mx-auto">
            Same principal. Same philosophy. Different relationship. The methodology has been
            tested and refined across a real portfolio of companies — not developed in isolation.
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-pad bg-gradient-to-br from-brand-navy to-brand-teal-dark text-white text-center">
      <div class="container-narrow mx-auto">
        <FadeIn>
          <h2 class="heading-lg mb-4">Ready for an Honest Conversation?</h2>
          <p class="text-xl text-white/70 max-w-xl mx-auto mb-10">
            No pitch, no pressure. Just a straightforward discussion about where you are,
            where you want to go, and whether the Growth Diagnostic is the right starting point.
          </p>
          <NuxtLink to="/contact" class="btn-primary-green">
            Book a 15-Minute Call
            <ArrowRight :size="18" />
          </NuxtLink>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
