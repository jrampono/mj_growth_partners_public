<script setup lang="ts">
import { ArrowRight, Phone, FileSearch, Mail, Clock, MessageSquare, CheckCircle2 } from 'lucide-vue-next'

useSeoMeta({
  title: "Let's Start With a Conversation | MJ Growth Partner",
  description: 'Book a 15-minute discovery call, take the Growth Diagnostic, or send us a message.',
})

const form = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  // Placeholder — wire to form handler (Formspree, Netlify, etc.)
  submitted.value = true
}

const callSteps = [
  'You tell us about your business — where you are, what\'s working, what\'s not.',
  'We ask a few focused questions to understand whether the Growth Diagnostic fits.',
  'We give you an honest recommendation. If we\'re not the right fit, we\'ll say so.',
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-gradient-to-br from-brand-navy to-brand-teal-dark text-white pt-32 pb-24">
      <div class="container-narrow mx-auto px-6">
        <FadeIn>
          <h1 class="heading-xl mb-6">
            Let's Start With<br><span class="text-brand-green">a Conversation</span>
          </h1>
          <p class="text-xl text-white/70 max-w-2xl">
            Whether you're ready to take the diagnostic or just want to talk through
            your situation, pick the option that suits you.
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- Three Options -->
    <section class="section-pad bg-white">
      <div class="container-narrow mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Option 1: Book a Call -->
          <FadeIn>
            <div class="rounded-2xl border-2 border-brand-teal/20 p-8 h-full flex flex-col">
              <div class="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-4">
                <Phone :size="24" class="text-brand-teal" />
              </div>
              <h3 class="heading-sm mb-3">Book a Discovery Call</h3>
              <p class="text-brand-grey text-sm leading-relaxed mb-6 flex-1">
                The fastest way to find out if we can help. A 15-minute conversation — no
                preparation needed, no commitment required.
              </p>
              <a href="#" class="btn-primary justify-center w-full">
                Book Your 15-Min Call
                <ArrowRight :size="18" />
              </a>
              <p class="text-xs text-brand-grey text-center mt-3">Calendly link — Marlon to provide</p>
            </div>
          </FadeIn>

          <!-- Option 2: Diagnostic -->
          <FadeIn :delay="100">
            <div class="rounded-2xl border border-gray-100 p-8 h-full flex flex-col">
              <div class="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4">
                <FileSearch :size="24" class="text-brand-green" />
              </div>
              <h3 class="heading-sm mb-3">Take the Growth Diagnostic</h3>
              <p class="text-brand-grey text-sm leading-relaxed mb-6 flex-1">
                Skip the call and go straight to the assessment. 15 minutes, scored across
                8 dimensions, immediate picture of where you stand.
              </p>
              <NuxtLink to="/diagnostic/start" class="btn-secondary justify-center w-full">
                Start the Diagnostic
                <ArrowRight :size="18" />
              </NuxtLink>
            </div>
          </FadeIn>

          <!-- Option 3: General -->
          <FadeIn :delay="200">
            <div class="rounded-2xl border border-gray-100 p-8 h-full flex flex-col">
              <div class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <Mail :size="24" class="text-brand-grey" />
              </div>
              <h3 class="heading-sm mb-3">General Enquiry</h3>
              <p class="text-brand-grey text-sm leading-relaxed mb-6 flex-1">
                Have a question that doesn't fit the options above? Send us a message
                and we'll get back to you within one business day.
              </p>
              <a href="#contact-form" class="btn-secondary justify-center w-full !border-gray-200 !text-brand-grey hover:!border-brand-teal hover:!text-brand-teal">
                Send a Message
                <ArrowRight :size="18" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- What to Expect -->
    <section class="section-pad bg-gray-50">
      <div class="container-narrow mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <p class="text-brand-teal font-semibold text-sm uppercase tracking-wider mb-3">No pitch, no pressure</p>
              <h2 class="heading-lg mb-6">What Happens When You Book a Call</h2>
              <p class="body-md mb-8">
                This is a 15-minute conversation, not a sales presentation. Here's what it looks like:
              </p>
              <ol class="space-y-4">
                <li v-for="(step, i) in callSteps" :key="i" class="flex gap-4">
                  <span class="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0 text-sm font-bold text-brand-teal">{{ i + 1 }}</span>
                  <p class="text-brand-grey text-sm leading-relaxed pt-1">{{ step }}</p>
                </li>
              </ol>
            </div>
          </FadeIn>

          <FadeIn :delay="200">
            <div class="bg-white rounded-2xl p-8 border border-gray-100">
              <div class="flex items-center gap-3 mb-6">
                <Clock :size="20" class="text-brand-teal" />
                <span class="font-semibold">Response time</span>
              </div>
              <p class="text-brand-grey text-sm mb-6">We respond to all enquiries within one business day.</p>

              <div class="space-y-4 text-sm">
                <div class="flex items-center gap-3">
                  <Mail :size="16" class="text-brand-grey" />
                  <span class="text-brand-grey">marlon@mjgrowthpartner.com</span>
                </div>
                <div class="flex items-center gap-3">
                  <MessageSquare :size="16" class="text-brand-grey" />
                  <span class="text-brand-grey">LinkedIn — Marlon Juenemann</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand-grey"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8Z"/></svg>
                  <span class="text-brand-grey">Australia</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section id="contact-form" class="section-pad bg-white">
      <div class="container-narrow mx-auto max-w-2xl">
        <FadeIn>
          <h2 class="heading-lg mb-8 text-center">Send a Message</h2>
        </FadeIn>

        <FadeIn :delay="100">
          <div v-if="submitted" class="text-center py-16">
            <CheckCircle2 :size="48" class="text-brand-green mx-auto mb-4" />
            <h3 class="heading-sm mb-2">Message sent</h3>
            <p class="text-brand-grey">We'll get back to you within one business day.</p>
          </div>

          <form v-else class="space-y-6" @submit.prevent="handleSubmit">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium mb-2">Name *</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Email *</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-sm"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium mb-2">Company</label>
                <input
                  v-model="form.company"
                  type="text"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-sm"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Phone</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-sm"
                  placeholder="+61 ..."
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium mb-2">Message *</label>
              <textarea
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-sm resize-y"
                placeholder="Tell us about your situation..."
              />
            </div>

            <button type="submit" class="btn-primary w-full justify-center">
              Send Message
              <ArrowRight :size="18" />
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
