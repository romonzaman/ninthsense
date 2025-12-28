<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <NavBar />

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">Construction</h1>
        <p class="text-xl">Expert construction services for your dream projects</p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Pool Setup</h3>
            <p class="text-gray-600">Professional pool installation and design services for residential and commercial properties.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Building Construction Management</h3>
            <p class="text-gray-600">Comprehensive project management for construction projects from planning to completion.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Building Development Service</h3>
            <p class="text-gray-600">Full-service building development including planning, design, and construction.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Turf Field Setup</h3>
            <p class="text-gray-600">Professional installation of turf fields for sports and recreational facilities.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Building Maintenance & Beautification</h3>
            <p class="text-gray-600">Ongoing maintenance and aesthetic improvements for existing buildings.</p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Comprehensive Construction Solutions</h2>
            <p class="text-gray-600 mb-4">
              At NinthSense, we provide end-to-end building construction and pool services that combine quality craftsmanship
              with modern engineering practices. From residential homes to commercial complexes and swimming pools, we ensure every
              project meets the highest standards of safety and durability.
            </p>
            <p class="text-gray-600 mb-4">
              Our team of experienced architects, engineers, and construction professionals work closely with clients
              to bring their visions to life. We handle everything from initial planning and design to final
              completion and handover.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <a href="tel:+8801775541090" class="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition duration-300 text-center">
                📞 Call for Quote
              </a>
              <a href="mailto:info@ninthsense.com.bd" class="bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-700 transition duration-300 text-center">
                ✉️ Email for Quote
              </a>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Building Construction" class="rounded-lg shadow-lg">
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
  name: 'BuildingConstruction',
  components: {
    NavBar
  }
}
</script>

<style scoped>
/* Additional styles if needed */
</style>