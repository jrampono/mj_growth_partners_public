<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'

const mobileOpen = ref(false)
const scrolled = ref(false)
const mobileMenuRef = ref<HTMLElement>()

const navLinks = [
  { label: 'The Journey', to: '/services' },
  { label: 'Growth Diagnostic', to: '/diagnostic' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 20
}

function trapFocus(e: KeyboardEvent) {
  if (!mobileMenuRef.value || e.key !== 'Tab') return
  const focusable = mobileMenuRef.value.querySelectorAll<HTMLElement>('a, button')
  if (focusable.length === 0) return
  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) {
    document.addEventListener('keydown', trapFocus)
  } else {
    document.removeEventListener('keydown', trapFocus)
  }
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'"
  >
    <div class="container-narrow mx-auto flex items-center justify-between px-6 py-4">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group" @click="mobileOpen = false">
        <MjLogo :size="40" />
        <span class="font-bold text-lg tracking-tight" :class="scrolled ? 'text-brand-black' : 'text-white'">
          MJ Growth Partner
        </span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium transition-colors duration-200"
          :class="scrolled ? 'text-brand-grey hover:text-brand-teal' : 'text-white/80 hover:text-white'"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/diagnostic" class="btn-primary !py-2.5 !px-6 !text-sm">
          Start Your Ascent
        </NuxtLink>
      </nav>

      <!-- Mobile toggle -->
      <button
        type="button"
        :aria-expanded="mobileOpen"
        aria-label="Toggle navigation menu"
        class="md:hidden p-2 rounded-lg transition-colors"
        :class="scrolled ? 'text-brand-black' : 'text-white'"
        @click="mobileOpen = !mobileOpen"
      >
        <X v-if="mobileOpen" :size="24" />
        <Menu v-else :size="24" />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileOpen" ref="mobileMenuRef" class="md:hidden fixed inset-0 top-[72px] bg-white z-40" role="dialog" aria-label="Navigation menu">
        <nav class="flex flex-col p-6 gap-2">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-lg font-medium text-brand-black py-3 px-4 rounded-lg hover:bg-brand-grey-light transition-colors"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/diagnostic" class="btn-primary mt-4 justify-center" @click="mobileOpen = false">
            Start Your Ascent
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>
