<template>
  <div>
    <!-- Ваши основные контент и компоненты здесь -->
    <section class="mainscreen">
      <MyHeader @open="Open" :name="name" :surname="surname"></MyHeader>
      <Categories_main></Categories_main>
      <Carousel_cars></Carousel_cars>
      <AutoParts_main></AutoParts_main>
      <Pluses_main></Pluses_main>
      <Carousel_del></Carousel_del>
      <MyFooter></MyFooter>
      <Registration_main v-if="ifReg" @close="Close" @name="Getname"></Registration_main>
    </section>

    <section class="carr">
      <HeaderCar></HeaderCar>
       <Carousel_del></Carousel_del>
      <MyFooter></MyFooter>
      <Carousel_cars></Carousel_cars>
      <MainMa1></MainMa1>
    </section>
    <!-- Использование компонента Footer -->
    <div>{{ name }}</div>
    <div>{{ surname }}</div>
    <a href="second.html">lala</a>
  </div>
</template>

<script>

import MyFooter from '../../components/FooterMulty.vue';

import MyHeader from '../../components/HeaderMy.vue';

import MainMa1 from '../../components/MainMa1.vue';

import HeaderCar from '../../components/HeaderCar.vue';

import Carousel_del from '../../components/Carousel_del.vue';

import Carousel_cars from '../../components/Carousel_cars.vue';

import AutoParts_main from '../../components/AutoParts_main.vue';

import Categories_main from '../../components/Categories_main.vue';

import Pluses_main from '../../components/Pluses_main.vue';

import Registration_main from '../../components/Registration_main.vue';

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
    Registration_main,
  },

  data: () => {
    return {
      name: null,
      surname: null,
      ifReg: false
    }
  },

  methods : {
    Getname(value, value2, value3) {
      this.name = value;
      this.surname= value2;
      this.ifReg = value3;
    },

    Close() {
      this.ifReg = false;
    },

    Open() {
      this.ifReg = true;
    }
  }

  
};
</script>

<style> 
.carr {
  display: none;
}


</style>