<template>

<section class="carParts" id="Parts">
        <div class="carParts_nad">ЧАСТИ АВТОМОБИЛЯ</div>
        <div class="typesRow">
            <div class="typesRow_card typesRow_card1" v-on:click="setEng">Двигатели</div>
            <div class="typesRow_card typesRow_card2" v-on:click="setMod">Внешние модули</div>
            <div class="typesRow_card typesRow_card3" v-on:click="setPet">Шины</div>
        </div>
</section>

<section>
    <Carousel v-if="isEng" :itemsToShow="3.1" :wrapAround="true" :transition="500">
        <Slide :key="1">
            <div class="engine_card">
                    <div class="engine_name">Engine BMW B38</div>
                    <img src="../assets/engine1.png" alt="" class="engine1_img">
                    <div class="engine_harac_all">
                        <div class="engine_harac_col">
                            <div class="engine_harac">Number of cylinders:</div>
                            <div class="engine_harac">Number of valves:</div>
                            <div class="engine_harac">Volume:</div>
                        </div>
                        <div class="engine_harac_col1">
                            <div class="engine_harac1">3</div>
                            <div class="engine_harac1">12</div>
                            <div class="engine_harac1">1500 ml</div>
                        </div>
                    </div>
                    <button class="engine_price">58 750 AED</button>
            </div>
        </Slide> 
        <Slide :key="2">
                <div class="engine_card">
                    <div class="engine_name">Engine BMW B38</div>
                    <img src="../assets/engine1.png" alt="" class="engine1_img">
                    <div class="engine_harac_all">
                        <div class="engine_harac_col">
                            <div class="engine_harac">Number of cylinders:</div>
                            <div class="engine_harac">Number of valves:</div>
                            <div class="engine_harac">Volume:</div>
                        </div>
                        <div class="engine_harac_col1">
                            <div class="engine_harac1">3</div>
                            <div class="engine_harac1">12</div>
                            <div class="engine_harac1">1500 ml</div>
                        </div>
                    </div>
                    <button class="engine_price">58 750 AED</button>
                </div>
        </Slide>
        <Slide :key="3">
                <div class="engine_card">
                    <div class="engine_name">Engine BMW B38</div>
                    <img src="../assets/engine1.png" alt="" class="engine1_img">
                    <div class="engine_harac_all">
                        <div class="engine_harac_col">
                            <div class="engine_harac">Number of cylinders:</div>
                            <div class="engine_harac">Number of valves:</div>
                            <div class="engine_harac">Volume:</div>
                        </div>
                        <div class="engine_harac_col1">
                            <div class="engine_harac1">3</div>
                            <div class="engine_harac1">12</div>
                            <div class="engine_harac1">1500 ml</div>
                        </div>
                    </div>
                    <button class="engine_price">58 750 AED</button>
                </div>
        </Slide>
        <Slide :key="4">
                <div class="engine_card">
                    <div class="engine_name">Engine BMW B38</div>
                    <img src="../assets/engine1.png" alt="" class="engine1_img">
                    <div class="engine_harac_all">
                        <div class="engine_harac_col">
                            <div class="engine_harac">Number of cylinders:</div>
                            <div class="engine_harac">Number of valves:</div>
                            <div class="engine_harac">Volume:</div>
                        </div>
                        <div class="engine_harac_col1">
                            <div class="engine_harac1">3</div>
                            <div class="engine_harac1">12</div>
                            <div class="engine_harac1">1500 ml</div>
                        </div>
                    </div>
                    <button class="engine_price">58 750 AED</button>
                </div>
        </Slide>
    </Carousel>
    <Carousel v-if="isMod" :itemsToShow="3.1" :wrapAround="true" :transition="500">
        <Slide :key="1">
                <div class="engine_card">
                    <div class="engine_name">Подогрев сидений</div>
                    <img src="../assets/sid.png" alt="" class="engine1_img">
                    <div class="engine_harac_all">
                        <div class="engine_harac_col">
                            <div class="engine_harac">Температура:</div>
                            <div class="engine_harac">Количество мест:</div>
                            <div class="engine_harac">Гарантия:</div>
                        </div>
                        <div class="engine_harac_col1">
                            <div class="engine_harac1">20-40 С</div>
                            <div class="engine_harac1">1-6</div>
                            <div class="engine_harac1">2 года</div>
                        </div>
                    </div>
                    <button class="engine_price">58 750 AED</button>
                </div>
        </Slide>
        <Slide :key="2">
                <div class="engine_card">
                    <div class="engine_name">Видеорегистратор</div>
                    <img src="../assets/videoreg.png" alt="" class="engine1_img">
                    <div class="engine_harac_all">
                        <div class="engine_harac_col">
                            <div class="engine_harac">Время съемки:</div>
                            <div class="engine_harac">Память:</div>
                            <div class="engine_harac">Гарантия:</div>
                        </div>
                        <div class="engine_harac_col1">
                            <div class="engine_harac1">30 дней</div>
                            <div class="engine_harac1">10 гб</div>
                            <div class="engine_harac1">3 года</div>
                        </div>
                    </div>
                    <button class="engine_price">58 750 AED</button>
                </div>
        </Slide>
        <Slide :key="3">
                <div class="engine_card">
                    <div class="engine_name">Сигнализация</div>
                    <img src="../assets/sign.png" alt="" class="engine1_img">
                    <div class="engine_harac_all">
                        <div class="engine_harac_col">
                            <div class="engine_harac">Громкость:</div>
                            <div class="engine_harac">Чувствительность:</div>
                            <div class="engine_harac">Гарантия:</div>
                        </div>
                        <div class="engine_harac_col1">
                            <div class="engine_harac1">80 дб</div>
                            <div class="engine_harac1">Средняя</div>
                            <div class="engine_harac1">2 года</div>
                        </div>
                    </div>
                    <button class="engine_price">58 750 AED</button>
                </div>
        </Slide>
        <Slide :key="4">
                <div class="engine_card">
                    <div class="engine_name">Музыкальный центр</div>
                    <img src="../assets/music.png" alt="" class="engine1_img">
                    <div class="engine_harac_all">
                        <div class="engine_harac_col">
                            <div class="engine_harac">Громкость</div>
                            <div class="engine_harac">Радио:</div>
                            <div class="engine_harac">Гарантия:</div>
                        </div>
                        <div class="engine_harac_col1">
                            <div class="engine_harac1">20-100 дб</div>
                            <div class="engine_harac1">Есть</div>
                            <div class="engine_harac1">3 года</div>
                        </div>
                    </div>
                    <button class="engine_price">58 750 AED</button>
                </div>
        </Slide>
    </Carousel>
    <Carousel v-if="isPet" :itemsToShow="3.1" :wrapAround="true" :transition="500">
        <Slide :key="1">
            <div class="engine_card">
                    <div class="engine_name">Summer tires</div>
                    <img src="../assets/tire-sum.png" alt="" class="engine1_img">
                    <div class="engine_harac_all">
                        <div class="engine_harac_col">
                            <div class="engine_harac">Size:</div>
                            <div class="engine_harac">Outside temp:</div>
                            <div class="engine_harac">Tread pattern:</div>
                        </div>
                        <div class="engine_harac_col1">
                            <div class="engine_harac1">13-22 inches</div>
                            <div class="engine_harac1">more 7 deg</div>
                            <div class="engine_harac1">Light</div>
                        </div>
                    </div>
                    <button class="engine_price">58 750 AED</button>
                </div>  
        </Slide>
        <Slide :key="2">
            <div class="engine_card">
                    <div class="engine_name">Winter tires</div>
                    <img src="../assets/tire-win.png" alt="" class="engine1_img">
                    <div class="engine_harac_all">
                        <div class="engine_harac_col">
                            <div class="engine_harac">Size:</div>
                            <div class="engine_harac">Outside temp:</div>
                            <div class="engine_harac">Tread pattern:</div>
                        </div>
                        <div class="engine_harac_col1">
                            <div class="engine_harac1">13-22 inches</div>
                            <div class="engine_harac1">less 7 deg</div>
                            <div class="engine_harac1">Hard</div>
                        </div>
                    </div>
                    <button class="engine_price">58 750 AED</button>
                </div>
        </Slide>
        <Slide :key="3">
            <div class="engine_card">
                    <div class="engine_name">All season</div>
                    <img src="../assets/tire-all.png" alt="" class="engine1_img">
                    <div class="engine_harac_all">
                        <div class="engine_harac_col">
                            <div class="engine_harac">Size:</div>
                            <div class="engine_harac">Outside temp:</div>
                            <div class="engine_harac">Tread pattern:</div>
                        </div>
                        <div class="engine_harac_col1">
                            <div class="engine_harac1">13-22 inches</div>
                            <div class="engine_harac1">-</div>
                            <div class="engine_harac1">Light</div>
                        </div>
                    </div>
                    <button class="engine_price">58 750 AED</button>
                </div>
        </Slide>
        <Slide :key="4">
            <div class="engine_card">
                    <div class="engine_name">Sports tires</div>
                    <img src="../assets/tire-sport.png" alt="" class="engine1_img">
                    <div class="engine_harac_all">
                        <div class="engine_harac_col">
                            <div class="engine_harac">Size:</div>
                            <div class="engine_harac">Outside temp:</div>
                            <div class="engine_harac">Tread pattern:</div>
                        </div>
                        <div class="engine_harac_col1">
                            <div class="engine_harac1">13-22 inches</div>
                            <div class="engine_harac1">-</div>
                            <div class="engine_harac1">Ultra Hard</div>
                        </div>
                    </div>
                    <button class="engine_price">58 750 AED</button>
                </div>
        </Slide>
    </Carousel>
</section>

</template>

<script>
export default {
    components: {
    Carousel,
    Slide,
  },
    data () {
      return {
        isEng: false,
        isMod: false,
        isPet: false
      }
    },
    methods: {
      setEng () {
        if (this.isEng == false) this.isEng = true
        else this.isEng = false;
        this.isMod = false;
        this.isPet = false;
      },
      setMod () {
        if (this.isMod == false) this.isMod = true
        else this.isMod = false;
        this.isEng = false;
        this.isPet = false;
      },
      setPet () {
        if (this.isPet == false) this.isPet = true
        else this.isPet = false;
        this.isEng = false;
        this.isMod = false;
      },
    }
  };
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'


</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel {
  margin-bottom: 20px;
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


@font-face {
	font-family: 'eurostyle'; 
	src: url(../assets/Fonts/eurostileextended_roman_dtc.ttf); 
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');

.Modules .engine_row{
    width: 90%;
}

.Modules {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.Tires .engine_row{
    width: 90%;
}

.Tires {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.Tires img {
    margin: 10px;
}
.carParts {
    display:  flex;
    flex-direction: column;
    font-family: 'eurostyle';
    align-items: center;
    margin-bottom: 50px;
  }

  .typesRow {
    display: flex;
    width: 1440px;
    justify-content: space-around;
  }

  .typesRow_card {
    width: 31%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid gray 5px;
    font-size: 35px;
    border-radius: 10px;
    font-weight: bold;
    color: white;
  }

  .typesRow_card1 {
    background-image: url(../assets/engineBack.png);
    background-size: cover;
  }

  .typesRow_card2 {
    background-image: url(../assets/spoiler.png);
    background-size: cover;
  }

  .typesRow_card3 {
    background-image: url(../assets/tires.jpeg);
    background-size: cover;
  }

  .carParts_nad {
    margin-left: auto;
    margin-right: auto;
    font-size: 30px;
    font-weight: bold;
    line-height: 39px;
    letter-spacing: 0.05em;
    text-align: left;
    margin-bottom: 40px;
  }


.engine_row {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }


  .engine_name {
    font-size: 25px;
    font-weight: bold;
  }

  .engine1_img {
    height: 200px;
  } 


  .engine_harac {
    font-size: 15px;
    font-weight: 500;
    margin-top: 7px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .engine_harac1 {
    font-size: 15px;
    font-weight: 500;
    margin-top: 7px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .engine_harac_col1 {
    margin-top: 1px;
    margin-left: 15px;
  }

  .engine_harac_all {
    display: flex;
    margin: 8px;
  }

  .engine_price {
    font-family: 'eurostyle';
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    height: 40px;
    border-radius: 5px;
    font-size: 17px;
  }

  .engine_card {
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background-color: rgb(227, 222, 222);
    border: solid 3px grey;
    border-radius: 10px;
  }

  .carousel {
    font-family: 'eurostyle';
  }
</style>