<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <NavBar />

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-4">NinthSense</h1>
        <p class="text-xl mb-8">Your Engineering Solution</p>
        <button @click="showContactModal = true" class="bg-white text-secondary-800 px-8 py-3 rounded-lg font-semibold hover:bg-secondary-50 transition duration-300">
          Get Started
        </button>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <router-link to="/construction" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 class="text-xl font-semibold mb-4">Construction</h3>
            <p class="text-gray-600">Comprehensive construction services including building development, pool setup, turf fields, and maintenance.</p>
          </router-link>
          <router-link to="/solar" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 class="text-xl font-semibold mb-4">Solar</h3>
            <p class="text-gray-600">Off-grid and on-grid solar installations with OPEX and CAPEX financing models.</p>
          </router-link>
          <router-link to="/consultancy" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 class="text-xl font-semibold mb-4">Consultancy</h3>
            <p class="text-gray-600">Expert engineering consultancy for your projects.</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">About NinthSense</h2>
        <p class="text-gray-600 text-center max-w-2xl mx-auto">
          NinthSense is your trusted partner for engineering solutions. We specialize in building construction,
          pool services, solar energy systems, and comprehensive consultancy to meet all your engineering needs.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8">Contact Us</h2>
        <p class="text-gray-600 mb-8">Ready to start your project? Get in touch with us today!</p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-4xl mb-4">📞</div>
            <h3 class="text-xl font-semibold mb-2">Call Us</h3>
            <a href="tel:+8801775541090" class="text-primary-600 hover:text-primary-800 font-semibold text-lg">
              +880 1775-541090
            </a>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-4xl mb-4">✉️</div>
            <h3 class="text-xl font-semibold mb-2">Email Us</h3>
            <a href="mailto:info@ninthsense.com.bd" class="text-primary-600 hover:text-primary-800 font-semibold text-lg">
              info@ninthsense.com.bd
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2026 NinthSense. All rights reserved.</p>
      </div>
    </footer>

    <!-- Contact Modal -->
    <div v-if="showContactModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="showContactModal = false">
      <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4" @click.stop>
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-secondary-800 mb-2">Get Started Today!</h3>
          <p class="text-secondary-600">Choose how you'd like to contact us</p>
        </div>
        <div class="space-y-4">
          <a href="tel:+8801775541090" class="flex items-center justify-center w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-700 transition duration-300">
            <span class="text-2xl mr-3">📞</span>
            Call +880 1775-541090
          </a>
          <a href="mailto:info@ninthsense.com.bd" class="flex items-center justify-center w-full bg-secondary-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-secondary-700 transition duration-300">
            <span class="text-2xl mr-3">✉️</span>
            Email info@ninthsense.com.bd
          </a>
        </div>
        <button @click="showContactModal = false" class="mt-6 w-full text-secondary-500 hover:text-secondary-700 font-medium">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    NavBar
  },
  data() {
    return {
      showContactModal: false
    }
  }
}
</script>

<style scoped>
/* Additional styles if needed */
</style>