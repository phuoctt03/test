<template>
    <div>
      <Header />
      <main>
        <img src="https://cdn6.agoda.net/images/MVC/default/background_image/illustrations/bg-agoda-homepage.png" alt="bg-homepage"/>
        <h1>Discover your next destination</h1>
        <input
          type="text"
          v-model="searchQuery"
          @input="search"
          placeholder="Search for a destination..."
        />
        <ul>
          <li v-for="destination in filteredDestinations" :key="destination.name">
            {{ destination.name }}
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: 'Home',
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        searchQuery: '',
        destinations: [
          { name: 'Tokyo' },
          { name: 'New York' },
          { name: 'Paris' },
          { name: 'London' },
          { name: 'Bangkok' },
        ],
      };
    },
    computed: {
      filteredDestinations() {
        return this.destinations.filter(destination =>
          destination.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      search() {
        // Hiện tại, phương thức này không cần làm gì thêm
      },
    },
  };
  </script>
  
  <style scoped>
  img{
    width: 100%;
    height: 300px;
  }
  </style>
  