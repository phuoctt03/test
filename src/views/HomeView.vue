<template>
    <div>
      <Header />
      <main>
        <img src="https://cdn6.agoda.net/images/MVC/default/background_image/illustrations/bg-agoda-homepage.png" alt="bg-homepage"/>
        <section class="hero">
          <h1>RONG CHƠI BỐN PHƯƠNG, GIÁ VẪN "YÊU THƯƠNG"</h1>
          <div class="nav1">
            <ul>
              <li><a href="#Flight">🛫 Máy bay</a></li>
              <li><a href="#Hotel">🏨 Khách sạn</a></li>
              <li><a href="#Activity">🎢 Hoạt động</a></li>
              <li><a href="#Combo">🛫🏨🎢 Máy bay + K.sạn + H.động</a></li>
            </ul>
          </div>
          <div class="nav2">
            <div class="line1">
              <div>Chỗ Ở Qua Đêm</div>
              <div>Chỗ Ở Trong Ngày</div>
            </div>
            <span>🔍</span><input v-model="searchQuery" placeholder="Nhập điểm du lịch hoặc tên khách sạn" />
          <button @click="search" class="search">Tìm</button>
          </div>
        </section>
        <section class="popular-destinations">
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
  .nav1, .nav2 {
    margin-top: 15px;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  .nav1{
    display: flex;
    position: relative;
    z-index: 1;
    background-color: #fff;
  }
  .nav2 {
    position: absolute;
    background-color: #f5f5f5;
    top: 70px;
    width: 100vh;
    left: -15vh;
    padding: 20px 40px;
    border-radius: 10px;
  }
  .line1 {
    display: flex;
    gap: 10px;
  }
  .line1 div {
    cursor: pointer;
    border-radius: 20px;
    padding: 5px 10px;
    background-color: #fff;
    border: solid 1px #a1a1a1;
  }
  .nav2 span{
    position: absolute;
    font-size: 30px;
    left: 50px;
    top: 70px;
    cursor: pointer;
  }
  .nav2 input {
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    padding: 20px;
    padding-left: 60px;
    border-radius: 5px;
    font-size: 15px;
    border: solid 1px #a1a1a1;
  }
  .search {
    position: absolute;
    width: 40%;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #4787ff;
    color: #fff;
    font-size: 20px;
    left: 30%;
    top: 85%;
    cursor: pointer;
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
  