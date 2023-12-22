<template>
    <div class="delivery">
        <div class="zayavka_nad">
Оствте заявку для доставки<br> в ваш родной город
        </div>
        <Carousel>
            <Slide :key="1">
                <div class="carousel__item">
                    <div class="num_zag">
                        <div class="number_of_slide">1</div>
                        <div class="zagolovok_of_slide">Заявка</div>
                    </div>
                    
                    <div class="text_of_slide">
                      <div class="text_of_slide_text">Вы звоните нам или оставляете заявку на сайте и с Вами связывается наш менеджер.</div>
                    </div>
                </div>
            </Slide>
            <Slide :key="2">
                <div class="carousel__item">
                    <div class="num_zag">
                        <div class="number_of_slide">2</div>
                        <div class="zagolovok_of_slide">Договор</div>
                    </div>
                    
                    <div class="text_of_slide">
                      <div class="text_of_slide_text">Согласовываем автомобиль, условия работы и подписываем договор. Вносите предоплату.</div>
                    </div>
                </div>
            </Slide>
            <Slide :key="3">
                <div class="carousel__item">
                    <div class="num_zag">
                        <div class="number_of_slide">3</div>
                        <div class="zagolovok_of_slide">Оплата</div>
                    </div>
                    
                    <div class="text_of_slide">
                      <div class="text_of_slide_text">После подписания договора, выставляется инвойс за автомобиль.</div>
                    </div>
                </div>
            </Slide>
            <Slide :key="4">
                <div class="carousel__item">
                    <div class="num_zag">
                        <div class="number_of_slide">4</div>
                        <div class="zagolovok_of_slide">Доставка</div>
                    </div>
                    
                    <div class="text_of_slide">
                      <div class="text_of_slide_text">Ожидаете от 30 до 60 дней (зависит от страны и пункта назначения).</div>
                    </div>
                </div>
            </Slide>
            <Slide :key="5">
                <div class="carousel__item">
                    <div class="num_zag">
                        <div class="number_of_slide">5</div>
                        <div class="zagolovok_of_slide">Спасибо</div>
                    </div>
                    
                    <div class="text_of_slide">
                      <div class="text_of_slide_text">Оставьте контактные данные и мы обязательно свяжемся с вами</div>
                    </div>
                </div>
            </Slide>

        
            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
    
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'BasicWord',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
  })
  </script>
  
  <style scoped>

html {
    background-color: #F1F0EB;
}

@font-face {
	font-family: 'eurostyle'; 
	src: url(../assets/Fonts/eurostileextended_roman_dtc.ttf); 
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');

  .carousel__item {
    min-height: 300px;
    width: 90%;
    background-color: rgb(179, 178, 178);
    background-image: url(../assets/back_slide.jpg);
    color: rgb(199, 199, 199);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'eurostyle';
  }
  
  .carousel__slide {
    padding: 10px;
  }
  
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid rgb(255, 255, 255);
  }

  .zayavka_nad {
    display: flex;
    align-self: center;
    font-size: 40px;
    font-family: 'eurostyle';
    font-weight: bold;
    text-align: center;
    margin: 30px;
    margin-bottom: 0px;
  }

  .delivery {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  
  .number_of_slide {
    display: flex;
    justify-self: start;
    font-size: 150px;
    text-align: center;
  }

  .zagolovok_of_slide {
    justify-self: start;
    align-self: flex-end;
    font-size: 80px;
  }

  .num_zag {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

  }

  .text_of_slide {
    width: 50%;
    padding-left: 50px;
  }

  .text_of_slide_text {
    font-size: 30px;
    border: solid 1px white;
    border-radius: 8px;
    padding: 5px;
  }

  
  </style>
