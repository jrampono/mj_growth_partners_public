<script setup lang="ts">
import { ArrowRight, ArrowLeft, CheckCircle2, Mountain, RotateCcw, Download } from 'lucide-vue-next'
import { useDiagnostic, getBand } from '~/composables/useDiagnostic'

useSeoMeta({
  title: 'Growth Diagnostic — Take the Assessment | MJ Growth Partner',
  description: 'Answer 48 honest questions about your business across 8 dimensions. Get your scored Growth Scorecard instantly.',
})

const {
  state,
  progress,
  currentDimension,
  canProceed,
  dimensionScores,
  overallScore,
  overallBand,
  next,
  prev,
  setScore,
  reset,
} = useDiagnostic()

const ratingLabels = [
  { value: 1, label: 'Strongly Disagree', short: '1' },
  { value: 2, label: 'Disagree', short: '2' },
  { value: 3, label: 'Neutral', short: '3' },
  { value: 4, label: 'Agree', short: '4' },
  { value: 5, label: 'Strongly Agree', short: '5' },
]

function handleNext() {
  if (state.currentStep === 9) {
    state.currentStep = 10
  } else {
    next()
  }
}

const lowestDimension = computed(() => {
  const sorted = [...dimensionScores.value].sort((a, b) => a.average - b.average)
  return sorted[0]
})

const highestDimension = computed(() => {
  const sorted = [...dimensionScores.value].sort((a, b) => b.average - a.average)
  return sorted[0]
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Progress bar -->
    <div v-if="state.currentStep < 10" class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div class="h-1 bg-gray-100">
        <div
          class="h-full bg-brand-teal transition-all duration-500 ease-out"
          :style="{ width: `${progress}%` }"
        />
      </div>
      <div class="container-narrow mx-auto px-6 py-3 flex items-center justify-between">
        <NuxtLink to="/diagnostic" class="flex items-center gap-2 text-sm text-brand-grey hover:text-brand-black transition-colors">
          <MjLogo :size="28" />
          <span class="font-semibold hidden sm:inline">Growth Diagnostic</span>
        </NuxtLink>
        <span class="text-xs text-brand-grey">
          <template v-if="state.currentStep >= 1 && state.currentStep <= 8">
            Dimension {{ state.currentStep }} of 8
          </template>
          <template v-else-if="state.currentStep === 9">
            Almost done
          </template>
        </span>
      </div>
    </div>

    <div class="pt-20 pb-16 px-6">
      <div class="container-narrow mx-auto max-w-2xl">

        <!-- ========== STEP 0: INTRO ========== -->
        <Transition
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
          mode="out-in"
        >
          <div v-if="state.currentStep === 0" key="intro" class="text-center py-12">
            <div class="w-16 h-16 rounded-2xl bg-brand-teal/10 flex items-center justify-center mx-auto mb-6">
              <Mountain :size="32" class="text-brand-teal" />
            </div>
            <h1 class="heading-lg mb-4">The Growth Diagnostic</h1>
            <p class="body-md max-w-lg mx-auto mb-8">
              48 honest questions across 8 dimensions of your business. Rate each statement
              based on where your business is <strong>right now</strong> — not where you hope to be.
            </p>

            <div class="bg-white rounded-2xl p-6 text-left mb-8 border border-gray-100 max-w-md mx-auto">
              <h3 class="font-semibold text-sm mb-4">Rating scale</h3>
              <div class="space-y-2">
                <div v-for="r in ratingLabels" :key="r.value" class="flex items-center gap-3 text-sm">
                  <span class="w-6 h-6 rounded-full bg-brand-teal/10 text-brand-teal font-bold text-xs flex items-center justify-center flex-shrink-0">{{ r.value }}</span>
                  <span class="text-brand-grey">{{ r.label }}</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center gap-3">
              <button class="btn-primary" @click="next">
                Start the Assessment
                <ArrowRight :size="18" />
              </button>
              <p class="text-xs text-brand-grey">Takes about 15 minutes</p>
            </div>
          </div>

          <!-- ========== STEPS 1-8: DIMENSIONS ========== -->
          <div v-else-if="state.currentStep >= 1 && state.currentStep <= 8" :key="'dim-' + state.currentStep" class="py-8">
            <div class="mb-8">
              <p class="text-brand-teal text-xs font-semibold uppercase tracking-wider mb-2">
                Dimension {{ state.currentStep }} of 8
              </p>
              <h2 class="heading-md mb-1">{{ currentDimension?.name }}</h2>
              <p class="text-sm text-brand-grey">{{ currentDimension?.subtitle }}</p>
            </div>

            <div class="space-y-4">
              <div
                v-for="(q, qi) in currentDimension?.questions"
                :key="q.id"
                class="bg-white rounded-xl p-5 border transition-all duration-200"
                :class="q.score !== null ? 'border-brand-teal/20' : 'border-gray-100'"
              >
                <p class="text-sm font-medium mb-4 leading-relaxed">
                  <span class="text-brand-grey mr-1">{{ q.id }}</span>
                  {{ q.statement }}
                </p>

                <!-- Rating buttons -->
                <div class="flex gap-2">
                  <button
                    v-for="r in ratingLabels"
                    :key="r.value"
                    class="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 border"
                    :class="q.score === r.value
                      ? 'bg-brand-teal text-white border-brand-teal'
                      : 'bg-gray-50 text-brand-grey border-gray-100 hover:border-brand-teal/30 hover:bg-brand-teal/5'
                    "
                    @click="setScore(q.id, r.value)"
                  >
                    <span class="block">{{ r.value }}</span>
                    <span class="block text-[10px] font-normal opacity-70 hidden sm:block">{{ r.label.split(' ')[0] }}</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Nav buttons -->
            <div class="flex items-center justify-between mt-8">
              <button class="flex items-center gap-2 text-sm text-brand-grey hover:text-brand-black transition-colors" @click="prev">
                <ArrowLeft :size="16" />
                Back
              </button>
              <button
                class="btn-primary"
                :class="{ 'opacity-40 cursor-not-allowed': !canProceed }"
                :disabled="!canProceed"
                @click="handleNext"
              >
                {{ state.currentStep === 8 ? 'Almost done' : 'Next Dimension' }}
                <ArrowRight :size="18" />
              </button>
            </div>
          </div>

          <!-- ========== STEP 9: CONTACT INFO ========== -->
          <div v-else-if="state.currentStep === 9" key="contact" class="py-12">
            <div class="text-center mb-8">
              <CheckCircle2 :size="48" class="text-brand-green mx-auto mb-4" />
              <h2 class="heading-md mb-2">All 48 questions answered</h2>
              <p class="body-md">Tell us who you are so we can send your results.</p>
            </div>

            <div class="bg-white rounded-2xl p-8 border border-gray-100 max-w-md mx-auto">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-1.5">Your name *</label>
                  <input
                    v-model="state.contactInfo.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-sm"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1.5">Email *</label>
                  <input
                    v-model="state.contactInfo.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-sm"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1.5">Company</label>
                  <input
                    v-model="state.contactInfo.company"
                    type="text"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-sm"
                    placeholder="Company name"
                  />
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between mt-8 max-w-md mx-auto">
              <button class="flex items-center gap-2 text-sm text-brand-grey hover:text-brand-black transition-colors" @click="prev">
                <ArrowLeft :size="16" />
                Back
              </button>
              <button
                class="btn-primary"
                :class="{ 'opacity-40 cursor-not-allowed': !canProceed }"
                :disabled="!canProceed"
                @click="handleNext"
              >
                See My Results
                <ArrowRight :size="18" />
              </button>
            </div>
          </div>

          <!-- ========== STEP 10: RESULTS ========== -->
          <div v-else-if="state.currentStep === 10" key="results" class="py-8 max-w-3xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-10">
              <p class="text-brand-teal text-xs font-semibold uppercase tracking-wider mb-2">Your Growth Scorecard</p>
              <h1 class="heading-lg mb-2">
                {{ state.contactInfo.name ? state.contactInfo.name.split(' ')[0] + ', here\'s' : 'Here\'s' }} where you stand
              </h1>
              <div class="inline-flex items-center gap-3 mt-4 px-6 py-3 rounded-full" :style="{ backgroundColor: overallBand.bgColor }">
                <span class="text-3xl font-bold" :style="{ color: overallBand.color }">{{ overallScore }}</span>
                <span class="text-sm font-medium" :style="{ color: overallBand.color }">/ 5.0 — {{ overallBand.label }}</span>
              </div>
            </div>

            <!-- Radar Chart -->
            <div class="bg-white rounded-2xl p-8 border border-gray-100 mb-8">
              <ClientOnly>
                <RadarChart :scores="dimensionScores" :size="360" />
              </ClientOnly>
            </div>

            <!-- Dimension breakdown -->
            <div class="space-y-3 mb-8">
              <h3 class="heading-sm mb-4">Dimension Breakdown</h3>
              <div
                v-for="dim in dimensionScores"
                :key="dim.key"
                class="bg-white rounded-xl p-5 border border-gray-100"
              >
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-semibold text-sm">{{ dim.name }}</h4>
                  <div class="flex items-center gap-2">
                    <span
                      class="text-xs font-semibold px-2 py-0.5 rounded-full"
                      :style="{ color: dim.band.color, backgroundColor: dim.band.bgColor }"
                    >
                      {{ dim.band.label }}
                    </span>
                    <span class="font-bold text-sm" :style="{ color: dim.band.color }">{{ dim.average }}</span>
                  </div>
                </div>
                <!-- Score bar -->
                <div class="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                  <div
                    class="h-full rounded-full transition-all duration-700 ease-out"
                    :style="{ width: `${(dim.average / 5) * 100}%`, backgroundColor: dim.band.color }"
                  />
                </div>
                <p class="text-xs text-brand-grey">{{ dim.band.interpretation }}</p>
              </div>
            </div>

            <!-- Key insights -->
            <div class="grid md:grid-cols-2 gap-4 mb-8">
              <div class="bg-red-50 rounded-xl p-5 border border-red-100">
                <p class="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">Biggest gap</p>
                <p class="font-bold text-red-800">{{ lowestDimension?.name }}</p>
                <p class="text-sm text-red-700 mt-1">Score: {{ lowestDimension?.average }} / 5.0</p>
              </div>
              <div class="bg-green-50 rounded-xl p-5 border border-green-100">
                <p class="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">Strongest area</p>
                <p class="font-bold text-green-800">{{ highestDimension?.name }}</p>
                <p class="text-sm text-green-700 mt-1">Score: {{ highestDimension?.average }} / 5.0</p>
              </div>
            </div>

            <!-- CTA -->
            <div class="bg-brand-navy rounded-2xl p-8 text-white text-center">
              <h3 class="text-xl font-bold mb-3">Want to know what to do about it?</h3>
              <p class="text-white/70 text-sm mb-6 max-w-md mx-auto">
                Book a free 90-minute discovery session where we go deeper on your results,
                identify root causes, and map out what to fix first.
              </p>
              <div class="flex flex-wrap justify-center gap-3">
                <NuxtLink to="/contact" class="btn-primary !bg-brand-green !text-brand-black hover:!bg-white">
                  Book Discovery Session
                  <ArrowRight :size="18" />
                </NuxtLink>
              </div>
            </div>

            <!-- Reset -->
            <div class="text-center mt-8">
              <button class="text-sm text-brand-grey hover:text-brand-black transition-colors flex items-center gap-2 mx-auto" @click="reset">
                <RotateCcw :size="14" />
                Start over
              </button>
            </div>
          </div>
        </Transition>

      </div>
    </div>
  </div>
</template>
