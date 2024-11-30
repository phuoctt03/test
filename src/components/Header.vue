<template>
    <header>
      <nav>
        <div class="logo"><img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="logo page" /></div>
        <ul>
          <li><a href="Combo">Máy bay + K.sạn + H.động</a></li>
          <li><a href="Flight">Máy bay</a></li>
          <li><a href="Hotel">Khách sạn</a></li>
          <li><a href="Activity">Hoạt động</a></li>
          <li><a href="Promo">Phiếu giảm giá và ưu đãi</a></li>
          <li><a href="SignIn" class="SignIn">Đăng nhập</a></li>
          <li><a href="SignUp" class="SignUp">Tạo tài khoản</a></li>
          <li><a href="Cart" class="Cart">🛒</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <style scoped>
  header {
    background-color: #ffffff;
    padding: 10px 20px;
    color: rgb(0, 0, 0);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 1;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img{
    width: 60px;
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
  </style>
  