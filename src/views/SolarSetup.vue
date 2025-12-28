<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <NavBar />

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">Solar</h1>
        <p class="text-xl">Harness the power of the sun with our solar solutions</p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Sustainable Energy Solutions</h2>
            <p class="text-gray-600 mb-4">
              NinthSense provides comprehensive solar energy solutions, including both off-grid and on-grid
              installations. We help you transition to clean, renewable energy while maximizing your return
              on investment through our flexible OPEX and CAPEX financing models.
            </p>
            <p class="text-gray-600 mb-4">
              Our solar systems are designed for optimal performance and longevity, using premium components
              and advanced technology. Whether you're looking to reduce your carbon footprint or achieve
              energy independence, we have the solution for you.
            </p>
            <h3 class="text-xl font-semibold mb-3">Our Services Include:</h3>
            <ul class="list-disc list-inside text-gray-600 mb-6">
              <li>Off-grid solar system design and installation</li>
              <li>On-grid solar panel setup</li>
              <li>Battery storage solutions</li>
              <li>OPEX and CAPEX financing options</li>
              <li>System maintenance and monitoring</li>
            </ul>
            <div class="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <a href="tel:+8801775541090" class="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition duration-300 text-center">
                📞 Call for Consultation
              </a>
              <a href="mailto:info@ninthsense.com.bd" class="bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-700 transition duration-300 text-center">
                ✉️ Email for Consultation
              </a>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Solar Panels" class="rounded-lg shadow-lg">
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
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  name: 'SolarSetup',
  components: {
    NavBar
  }
}
</script>

<style scoped>
/* Additional styles if needed */
</style>