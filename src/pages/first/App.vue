<template>
  <div>
    <!-- Ваши основные контент и компоненты здесь -->
    <section class="mainscreen">
      <MyHeader @open="Open" :name="name" :surname="surname"></MyHeader>
      <Categories_main @opencars="ShowCars" @opendel="ShowDel" @openmods="ShowMod"></Categories_main>
      <Carousel_cars v-if="ifcars"></Carousel_cars>
      <AutoParts_main v-if="ifmod"></AutoParts_main>
      <Pluses_main v-if="ifser"></Pluses_main>
      <Carousel_del v-if="ifser"></Carousel_del>
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
      ifReg: false,
      ifcars: false,
      ifmod: false,
      ifser: false
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
    },

    ShowCars() {
      
      if (this.ifcars == false) this.ifcars = true;
      else this.ifcars = false;
      this.ifmod = false;
      this.ifser == false;
    },

    ShowMod() {
      this.ifcars = false;
      this.ifser = false;
      if (this.ifmod == false) this.ifmod = true;
      else this.ifmod = false;
    },

    ShowDel() {
      this.ifmod = false;
      this.ifcars = false;
      if (this.ifser == false) this.ifser = true;
      else this.ifser = false;
    }

  }

  
};
</script>

<style> 
.carr {
  display: none;
}


</style>