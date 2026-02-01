<template>
  <div class="min-h-screen flex flex-col">
    <a href="#main-content" class="skip-to-content">Skip to content</a>
    <SiteHeader />
    <main id="main-content" class="flex-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
