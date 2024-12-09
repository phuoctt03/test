<template>
  <Header />
  <img alt="Background Home" src="https://cdn6.agoda.net/images/MVC/default/background_image/illustrations/bg-agoda-homepage.png" />
  <div class="container">
    <h1>RONG CHƠI BỐN PHƯƠNG, GIÁ VẪN "YÊU THƯƠNG"</h1>
  </div>
  <div class="nav1">
    <ul>
      <li><a href="#Flight">🛫 Máy bay</a></li>
      <li><a href="#Hotel">🏨 Khách sạn</a></li>
      <li><a href="#Activity">🎢 Hoạt động</a></li>
      <li><a href="#Combo">🛫🏨🎢 Combo</a></li>
    </ul>
  </div>
  <div class="nav2">
    <div class="line1">
      <div>Chỗ Ở Qua Đêm</div>
      <div>Chỗ Ở Trong Ngày</div>
    </div>
    <span>🔍</span><input v-model="searchQuery" placeholder="Nhập điểm du lịch hoặc tên khách sạn" />
    <button @click="search" class="search">Tìm</button>
    <div class="line2">
      <DatePicker
        id="datePicker"
        v-model="dates"
        selectionMode="range"
        :minDate="minDate"
        :manualInput="false"
        dateFormat="dd/mm/yy"
        placeholder="Chọn khoảng thời gian đặt phòng"
      />
      <FloatLabel variant="on" id="inputPerson">
        <InputNumber v-model="person" id="person" :useGrouping="false" fluid/>
        <label for="person">Số người</label>
      </FloatLabel>
    </div>
  </div>
  <body>
    <div class="attractive-destination">
      <h2>Các điểm đến thu hút nhất Việt Nam</h2>
      <Carousel :value="destinations" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
        <template #item="slotProps">
          <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4" style="height: 210px; align-items: center; display: flex;">
            <div class="mb-4">
              <div class="relative-mx-auto">
                <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-full-rounded" />
              </div>
            </div>
          </div>
          <div class="text" style="position: relative; align-items: center; justify-content: center; display: grid;">
            <div class="mb-4 font-medium text-lg" style="font-size: 20px;font-weight: 700; margin: auto;">{{ slotProps.data.name }}</div>
            <div class="font-semibold text-xl">{{ slotProps.data.rooms }} chỗ ở</div>
          </div>
        </template>
      </Carousel>
    </div>
    <div class="promo-hotel">
      <h2>Chương trình khuyến mại chỗ ở</h2>
      <Carousel :value="destinations" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
        <template #item="slotProps">
          <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4" style="height: 210px; align-items: center; display: flex;">
            <div class="mb-4">
              <div class="relative-mx-auto">
                <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-full-rounded" />
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </body>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import {DatePicker} from 'primevue';
import {FloatLabel} from 'primevue';
import {InputNumber} from 'primevue';
import {Carousel} from 'primevue';


const searchQuery = ref('');
const person = ref(null);
const dates = ref(null);
const now = new Date();
const minDate = ref(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
const search = () => {
  console.log(searchQuery.value);
  console.log(dates.value);
  console.log(person.value);
}
const destinations = ref([
  {
    name: 'Hồ Chí Minh',
    description: 'Thành phố sôi động và hiện đại nhất Việt Nam',
    rooms: 15546,
    image: 'https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?ca=6&ce=1&s=375x&ar=1x1',
  },
  {
    name: 'Hà Nội',
    description: 'Thủ đô ngàn năm văn hiến',
    rooms: 10744,
    image: 'https://pix6.agoda.net/geo/city/2758/065f4f2c9fa263611ab65239ecbeaff7.jpg?ce=0&s=375x&ar=1x1',
  },
  {
    name: 'Vũng Tàu',
    description: 'Điểm nghỉ dưỡng ven biển lý tưởng',
    rooms: 6329,
    image: 'https://pix6.agoda.net/geo/city/17190/1_17190_02.jpg?ca=6&ce=1&s=375x&ar=1x1',
  },
  {
    name: 'Đà Nẵng',
    description: 'Thành phố của những cây cầu và biển xanh',
    rooms: 5534,
    image: 'https://pix6.agoda.net/geo/city/16440/1_16440_02.jpg?ca=6&ce=1&s=375x&ar=1x1',
  },
  {
    name: 'Đà Lạt',
    description: 'Thành phố ngàn hoa và khí hậu ôn đới',
    rooms: 5165,
    image: 'https://pix6.agoda.net/geo/city/15932/1_15932_02.jpg?ca=6&ce=1&s=375x&ar=1x1',
  },
]);

const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1,
  },
]);

</script>

<style scoped>
template{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
img{
  width: 100%;
  height: 20%;
  position: absolute;
  top: 0;
  z-index: -1;
}
.container{
  justify-content: center;
  display: flex;
  margin-top: 4%;
  color: white;
  font-size: 12px;
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
  width: 40%;
  align-items: center;
  justify-items: center;
  margin: auto;
}
.nav2 {
  position: relative;
  background-color: #f5f5f5;
  margin: auto;
  top: -20px;
  width: 60%;
  height: 270px;
  padding: 20px 40px;
  border-radius: 10px;
}
.line1 {
  margin-top: 2%;
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
  top: 34%;
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
  top: 86%;
  cursor: pointer;
}
.line2 {
  position: relative;
  display: flex;
  gap: 4%;
}
#datePicker {
  width: 48%;
  height: 59px;
  left: 0%;
  top: -5px;
}
#inputPerson {
  height: 59px;
  width: 48%;
  top: -5px;
  left: calc(54% - 20px);
  font-size: 20px;
}
#person {
  left: 0;
  height: 59px;
  width: 100%;
  top: 1px;
}
ul {
  list-style: none;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  padding: 0;
}
a{
  text-decoration: none;
  color: black;
}
.attractive-destination{
  width: 60%;
  margin: auto;
  margin-top: 100px;
  height: 350px;
}
.promo-hotel{
  width: 60%;
  margin: auto;
  margin-top: 10px;
  height: 500px;
}
.relative-mx-auto img {
  height: 200px;
  width: 200px;
  object-fit:cover;
  border-radius: 10px;
  margin-left: 25px;
}

</style>