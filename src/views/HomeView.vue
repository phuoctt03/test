<template>
    <div>
      <Header />
      <main>
        <img src="https://cdn6.agoda.net/images/MVC/default/background_image/illustrations/bg-agoda-homepage.png" alt="bg-homepage"/>
        <section class="hero">
          <h1>RONG CHƠI BỐN PHƯƠNG, GIÁ VẪN "YÊU THƯƠNG"</h1>
          <nav class="nav1">
            <ul>
              <li><a href="#Flight">🛫 Máy bay</a></li>
              <li><a href="#Hotel">🏨 Khách sạn</a></li>
              <li><a href="#Activity">🎢 Hoạt động</a></li>
              <li><a href="#Combo">🛫🏨🎢 Máy bay + K.sạn + H.động</a></li>
            </ul>
          </nav>
          <nav class="nav2">
            <input v-model="searchQuery" placeholder="Where are you going?" />
          <button @click="search">Search</button>
          </nav>
        </section>
        <section class="popular-destinations">
          <h2>Popular Destinations</h2>
          <ul>
            <li v-for="(destination, index) in filteredDestinations" :key="index">
              {{ destination.name }}
            </li>
          </ul>
        </section>
        <section class="popular-destinations">
          <h2>Popular Destinations</h2>
          <ul>
            <li v-for="(destination, index) in filteredDestinations" :key="index">
              {{ destination.name }}
            </li>
          </ul>
        </section>
        <section class="popular-destinations">
          <h2>Popular Destinations</h2>
          <ul>
            <li v-for="(destination, index) in filteredDestinations" :key="index">
              {{ destination.name }}
            </li>
          </ul>
        </section>
        <section class="popular-destinations">
          <h2>Popular Destinations</h2>
          <ul>
            <li v-for="(destination, index) in filteredDestinations" :key="index">
              {{ destination.name }}
            </li>
          </ul>
        </section>
        <section class="popular-destinations">
          <h2>Popular Destinations</h2>
          <ul>
            <li v-for="(destination, index) in filteredDestinations" :key="index">
              {{ destination.name }}
            </li>
          </ul>
        </section>
        <section class="popular-destinations">
          <h2>Popular Destinations</h2>
          <h2>Popular Destinations</h2>

          <h2>Popular Destinations</h2>

          <h2>Popular Destinations</h2>
          <h2>Popular Destinations</h2>

          <h2>Popular Destinations</h2>

          <h2>Popular Destinations</h2>

          <h2>Popular Destinations</h2>

          <h2>Popular Destinations</h2>

          <h2>Popular Destinations</h2>

          <h2>Popular Destinations</h2>

          <h2>Popular Destinations</h2>


          <ul>
            <li v-for="(destination, index) in filteredDestinations" :key="index">
              {{ destination.name }}
            </li>
          </ul>
        </section>
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
  main{
    padding: 0;
    margin: 0;
  }
  nav {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  .nav1{
    position: relative;
    z-index: 1;
  }
  .nav2 {
    position: absolute;
    top: 70px;
    width: 100vh;
    left: -15vh;
    height: 200px;
    border-radius: 10px;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  a {
    color: rgb(0, 0, 0);
    text-decoration: none;
  }
  a:hover {
    color: rgb(42, 159, 255);
    background-color: none;
  }
  img{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 300px;
  }
  .hero {
    text-align: center;
    margin: 20px 0;
    position: absolute;
    top: 55px;
  }
  .popular-destinations {
    margin-top: 30px;
  }
  h1{
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
  }
  </style>
  