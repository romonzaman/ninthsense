<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <NavBar />

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">Engineering Consultancy</h1>
        <p class="text-xl">Expert guidance for your engineering projects</p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Engineering Consultancy" class="rounded-lg shadow-lg">
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-6">Professional Engineering Advice</h2>
            <p class="text-gray-600 mb-4">
              NinthSense provides comprehensive engineering consultancy services to help you navigate complex
              projects with confidence. Our team of experienced engineers and consultants offers expert advice
              on all aspects of engineering, from initial concept to final implementation.
            </p>
            <p class="text-gray-600 mb-4">
              Whether you need feasibility studies, technical specifications, project planning, or regulatory
              compliance assistance, our consultancy services ensure your projects are executed efficiently
              and meet all industry standards.
            </p>
            <h3 class="text-xl font-semibold mb-3">Our Consultancy Services:</h3>
            <ul class="list-disc list-inside text-gray-600 mb-6">
              <li>Project feasibility analysis</li>
              <li>Technical design and specifications</li>
              <li>Regulatory compliance consulting</li>
              <li>Cost estimation and budgeting</li>
              <li>Risk assessment and mitigation</li>
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
  name: 'Consultancy',
  components: {
    NavBar
  }
}
</script>

<style scoped>
/* Additional styles if needed */
</style>