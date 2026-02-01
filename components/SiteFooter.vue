<script setup lang="ts">
const footerLinks = [
  {
    title: 'The Journey',
    links: [
      { label: 'Growth Diagnostic', to: '/diagnostic' },
      { label: 'Growth Roadmap', to: '/services#roadmap' },
      { label: 'AI Accelerator', to: '/services#accelerator' },
      { label: 'Growth Partnership', to: '/services#partnership' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Book a Call', to: '/contact' },
    ],
  },
]
</script>

<template>
  <MountainScene variant="footer" />
  <footer class="bg-brand-navy text-white">
    <div class="container-narrow mx-auto px-6 py-16">
      <div class="grid md:grid-cols-4 gap-12">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <MjLogo :size="36" color="#FFFFFF" accent="#61CE70" />
            <span class="font-bold text-lg">MJ Growth Partner</span>
          </div>
          <p class="text-white/60 text-sm leading-relaxed max-w-sm">
            Practical growth strategy and AI enablement for businesses that build things,
            sell things, and employ people. Part of the Ubuntu Ventures ecosystem.
          </p>
        </div>

        <!-- Link columns -->
        <div v-for="group in footerLinks" :key="group.title">
          <h4 class="font-semibold text-sm text-white/40 uppercase tracking-wider mb-4">{{ group.title }}</h4>
          <ul class="space-y-3">
            <li v-for="link in group.links" :key="link.to">
              <NuxtLink :to="link.to" class="text-sm text-white/70 hover:text-brand-green transition-colors">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-white/40">&copy; {{ new Date().getFullYear() }} MJ Growth Partner. All rights reserved.</p>
        <div class="flex items-center gap-6">
          <a href="#" class="text-sm text-white/40 hover:text-white/60 transition-colors">Privacy Policy</a>
          <a href="#" class="text-sm text-white/40 hover:text-white/60 transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>
