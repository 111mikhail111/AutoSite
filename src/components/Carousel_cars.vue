<template>
  <section class="deals">
          <div class="deals_nad">ГОРЯЧИЕ ПРЕДЛОЖЕНИЯ</div>
  </section >
  <div class="main">
    
    <Carousel :itemsToShow="3.1" :wrapAround="true" :transition="500">
    <Slide :key="2">
      <div class="carousel__item">
        <div class="card">
                  <div class="nad1">Mitsubishi Pajero Sport</div>
                  <div class="year">2023</div>
                  <img src="../assets/mits.png" alt="" class="car">
                  <div class="harac">
                      <img src="../assets/engine.png" alt="" class="harac_img">
                      <div class="harac_nad">2.4 L</div>
                      <img src="../assets/awd.png" alt="" class="harac_img">
                      <div class="harac_nad">AWD</div>
                      <img src="../assets/suv.png" alt="" class="harac_img">
                      <div class="harac_nad">SUV</div>
                  </div>
                  <button class="price">458 750 AED</button>
              </div>
      </div>
    </Slide>
    <Slide :key="3">
      <div class="carousel__item">
        <div class="card">
                  <div class="nad1">Lexus UX UX200 Luxury</div>
                  <div class="year">2022</div>
                  <img src="../assets/lexus2.png" alt="" class="car">
                  <div class="harac">
                      <img src="../assets/engine.png" alt="" class="harac_img">
                      <div class="harac_nad">2.0 L</div>
                      <img src="../assets/awd.png" alt="" class="harac_img">
                      <div class="harac_nad">AWD</div>
                      <img src="../assets/suv.png" alt="" class="harac_img">
                      <div class="harac_nad">SUV</div>
                  </div>
                  <button class="price">458 750 AED</button>
              </div>
      </div>
    </Slide>
    <Slide :key="4">
      <div class="carousel__item">
        <div class="card">
                  <div class="nad1">Mercedes-Benz G-Class</div>
                  <div class="year">2022</div>
                  <img src="../assets/mers.png" alt="" class="car">
                  <div class="harac">
                      <img src="../assets/engine.png" alt="" class="harac_img">
                      <div class="harac_nad">4.0 L</div>
                      <img src="../assets/awd.png" alt="" class="harac_img">
                      <div class="harac_nad">AWD</div>
                      <img src="../assets/suv.png" alt="" class="harac_img">
                      <div class="harac_nad">SUV</div>
                  </div>
                  <button class="price">458 750 AED</button>
              </div>
      </div>
    </Slide>
    <Slide :key="1">
      <div class="carousel__item">
        <div class="card">
                  <div class="nad1">Lexus LX LX500d</div>
                  <div class="year">2022</div>
                  <img src="../assets/lexus.png" alt="" class="car">
                  <div class="harac">
                      <img src="../assets/engine.png" alt="" class="harac_img">
                      <div class="harac_nad">5.7 L</div>
                      <img src="../assets/awd.png" alt="" class="harac_img">
                      <div class="harac_nad">AWD</div>
                      <img src="../assets/suv.png" alt="" class="harac_img">
                      <div class="harac_nad">SUV</div>
                  </div>
                  <button class="price">458 750 AED</button>
              </div>
      </div>
    </Slide>

    
  </Carousel>

  </div>
  
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'AutoplayLALA',
  components: {
    Carousel,
    Slide,
  },
})
</script>

<style scoped>

@font-face {
	font-family: 'eurostyle'; 
	src: url(../assets/Fonts/eurostileextended_roman_dtc.ttf); 
}
.carousel__slide {
  padding: 5px;
}


.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.8);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.8);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.9);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.9);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}

.carousel {
  margin-bottom: 50px;
}

.carousel__viewport {
    overflow: visible; 
}

.card {
    height: 325px;
    width: 325px;
    display: flex;
    flex-direction: column;
    margin: auto;
    border: solid 2px gray;
    border-radius: 10px;
    padding: 10px;
    justify-content: space-around;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }


  .harac {
    display: flex;
    justify-content: space-around;
    margin: 10px;
    align-items: center;
  }

  .nad1 {  
    font-size: 22px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-align: left;
  }

  .car {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 10px;
    
  }

  .year {
    font-size: 14px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.12em;
    text-align: left;
  }

  .harac_nad {
    font-size: 12px;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: 0.12em;
    text-align: left;
  }

  .price {
    display: flex;
    font-size: 16px;
    font-weight: bold;
    line-height: 16px;
    letter-spacing: 0.17em;
    text-align: left;
    width: 90%;
    height: 35px;
    margin-left: auto;
    margin-right: auto;
    border: solid 1px black;
    border-radius: 5px;
    font-family: 'eurostyle';
    justify-content: center;
    align-items: center;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }

  .price:hover {
    width: 85%;
    height: 30px;
    margin-top: 5px;
  }

  .carousel {
    width: 80%;
  }

  .main {
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: 'eurostyle';
  }

  .deals {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      font-family: 'eurostyle';
  }

  .deals_nad {
font-size: 30px;
font-weight: bold;
line-height: 39px;
letter-spacing: 0.05em;
text-align: left;
margin-bottom: 40px;
  }
</style>