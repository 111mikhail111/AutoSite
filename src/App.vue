<template>
  <div>
    <!-- Ваши основные контент и компоненты здесь -->
    <section class="mainscreen">
      <MyHeader></MyHeader>
      <Categories_main></Categories_main>
      <Carousel_cars></Carousel_cars>
      <AutoParts_main></AutoParts_main>
      <Pluses_main></Pluses_main>
      <Carousel_del></Carousel_del>
      <MyFooter></MyFooter>
    </section>

    <section class="carr">
      <HeaderCar></HeaderCar>
       <Carousel_del></Carousel_del>
      <MyFooter></MyFooter>
      <Carousel_cars></Carousel_cars>
      <MainMa1></MainMa1>
    </section>

    
    <!-- Использование компонента Footer -->
    
  </div>
</template>

<script>
import MyFooter from './components/FooterMulty.vue';

import MyHeader from './components/HeaderMy.vue';

import MainMa1 from './components/MainMa1.vue';

import HeaderCar from './components/HeaderCar.vue';

import Carousel_del from './components/Carousel_del.vue';

import Carousel_cars from './components/Carousel_cars.vue';

import AutoParts_main from './components/AutoParts_main.vue';

import Categories_main from './components/Categories_main.vue';

import Pluses_main from './components/Pluses_main.vue';

export default {
  components: {
    MyFooter,
    MyHeader,
    MainMa1,
    HeaderCar,
    Carousel_del,
    Carousel_cars,
    AutoParts_main,
    Categories_main,
    Pluses_main,
  },
};
</script>

<style> 
.carr {
  display: none;
}


</style>