<template>
    <section class="categories">
          <div class="cars_for_sale">
              <div class="cars_for_sale_nad">CARS FOR SALE</div>
              <div class="cars_for_sale_more">MORE</div>
          </div>
          <div class="categories_right">
              <div class="right_autoparts">
                  <div class="autoparts_nad">AUTOPARTS</div>
                  <div class="cars_for_sale_more">MORE</div>
              </div>
              <div class="right_servicing">
                  <div class="servising_nad">SERVICING</div>
                  <div class="cars_for_sale_more">MORE</div>
              </div>
          </div>
     </section>
      <!-- section.sort>div.sort_nad+(div.sort_typeorbrand>div.sort_type+div.sort_brand)+(div.forms>img.forms_img+div.forms_nad)*6+button.showall -->
      
      <!-- section.deals>(div.row>(div.card>div.nad1+div.year+img.car+(div.harac>(img.harac_img+div.harac_nad)*3)+button.price)*4)*2 -->
      <section class="deals">
          <div class="deals_nad">HOT DEALS</div>
      </section >

      <section class="carParts" id="Parts">
        <div class="carParts_nad">AUTOPARTS</div>
        <div class="typesRow">
            <div class="typesRow_card typesRow_card1" v-on:click="setEng">Engines</div>
            <div class="typesRow_card typesRow_card2" v-on:click="setMod">External Modules</div>
            <div class="typesRow_card typesRow_card3" v-on:click="setPet">Tires</div>
        </div>

        <section class="engines" v-if="isEng">
            <div class="engine_row">
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
            </div>
            <div class="engine_row">
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
            </div>
        </section>
        <section class="engines" v-if="isMod">
            <div class="engine_row">
                <div class="engine_card">
                    <div class="engine_name">AZARD 2113</div>
                    <img src="../assets/spoiler_vid.png" alt="" class="engine1_img">
                    
                    <button class="engine_price">58 750 AED</button>
                </div>
                <div class="engine_card">
                    <div class="engine_name">AZARD 2113</div>
                    <img src="../assets/spoiler_vid.png" alt="" class="engine1_img">
                    
                    <button class="engine_price">58 750 AED</button>
                </div>
                <div class="engine_card">
                    <div class="engine_name">AZARD 2113</div>
                    <img src="../assets/spoiler_vid.png" alt="" class="engine1_img">
                    
                    <button class="engine_price">58 750 AED</button>
                </div>
                <div class="engine_card">
                    <div class="engine_name">AZARD 2113</div>
                    <img src="../assets/spoiler_vid.png" alt="" class="engine1_img">
                    
                    <button class="engine_price">58 750 AED</button>
                </div>
            </div>
            <div class="engine_row">
                <div class="engine_card">
                    <div class="engine_name">AZARD 2113</div>
                    <img src="../assets/spoiler_vid.png" alt="" class="engine1_img">
                    
                    <button class="engine_price">58 750 AED</button>
                </div>
                <div class="engine_card">
                    <div class="engine_name">AZARD 2113</div>
                    <img src="../assets/spoiler_vid.png" alt="" class="engine1_img">
                   
                    <button class="engine_price">58 750 AED</button>
                </div>
                <div class="engine_card">
                    <div class="engine_name">AZARD 2113</div>
                    <img src="../assets/spoiler_vid.png" alt="" class="engine1_img">
                    
                    <button class="engine_price">58 750 AED</button>
                </div>
                <div class="engine_card">
                    <div class="engine_name">AZARD 2113</div>
                    <img src="../assets/spoiler_vid.png" alt="" class="engine1_img">
                    
                    <button class="engine_price">58 750 AED</button>
                </div>
            </div>
        </section>
        <section class="engines" v-if="isPet">
            <div class="engine_row">
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
            </div>
            
        </section>
      </section>

      <section class="pluses">
          <div class="plus">
              <div class="plus_nad_vverh">ПОКУПКА АВТОМОБИЛЯ</div>
              <div class="plus_nad_niz">В нашем автосалоне можно приобрести новые машины.
                  Также можно воспользоваться услугой подбора автомобиля с пробегом и заказа авто с аукционов США.</div>
          </div>
          <div class="plus">
              <div class="plus_nad_vverh">ИНДИВИДУАЛЬНЫЙ ПОДХОД</div>
              <div class="plus_nad_niz">В спектр наших услуг дополнительно входит продажа и индивидуальный подбор мототехники, квадроциклов, коммерческого транспорта специальной техники.</div>
          </div>
          <div class="plus">
              <div class="plus_nad_vverh">ОПЫТ И НАДЕЖНОСТЬ</div>
              <div class="plus_nad_niz">Более 9 лет безупречной успешной работы, за это время мы обслужили огромное количество корпоративных и частных клиентов.</div>
          </div>
          <div class="plus">
              <div class="plus_nad_vverh">СОТРУДНИЧЕСТВО С НАМИ</div>
              <div class="plus_nad_niz">Гарантия надежного партнерства, доступных цен и индивидуального подхода к каждому клиенту.</div>
          </div>
      </section>

      
  </template>
  <script>


  
 export default {
    components: {
        
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

slide div {
    width: 100px;
    height: 100px;
}
  section {
      padding: 20px;
  }
  
  .cars_for_sale {
      display: flex;
      width: 658px;
      background-image: url(../assets/CarsForSale.png);
      background-repeat: no-repeat;
      background-size: cover;
      height: 640px;
      margin-left: auto;
      margin-right: 12px;

  }

  .cars_for_sale_nad, .autoparts_nad, .servising_nad {
    margin: 30px;
  }


  .cars_for_sale_more {
    margin-top: auto;
    margin-left: auto;
    margin-bottom: 30px;
    margin-right: 30px;
    width: 150px;
    height: 65px;
    border: solid 1px white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center; 
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }

  .cars_for_sale_more:hover {
    padding: 5px;
  }
  
  .categories_right {
      display: flex;
      flex-direction: column;
      margin-right: auto;
      margin-left: 12px;
      justify-content: space-between;
  }

  .right_autoparts {
    background-image: url(../assets/AutoParts.png);
    background-repeat: no-repeat;
    width: 658px;
    height: 308px;
    margin: auto;
    margin-bottom: 12px;
    display: flex;
  }


  
  .right_servicing {
    background-image: url(../assets/Service.png);
    background-repeat: no-repeat;
    background-size: cover;
    width: 658px;
    height: 308px;
    margin-top: 12px;
    display: flex;
  }
 
  
  .categories {
    padding: 0;
      display: flex;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-top: 50px;
      padding-bottom: 50px;
      color: white;
      font-family: 'eurostyle';
      font-size: 24px;
      font-weight: bold;
      line-height: 31px;
      letter-spacing: 0.12em;
      text-align: left;
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
  
  .row {
      display: flex;
      justify-content: space-around;
      width: 1440px;
      margin-bottom:30px;
  }

  .row image {
    display: block;
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

  .card:hover {
    width: 30%;
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
  }

  .car {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 10px;
    
  }
  
  .more {
    width: 150px;
    height: 30px;
    font-weight: bold;
    font-size: 16px;
    font-family: 'eurostyle';
    border-radius: 3px;
    margin: 30px;
    margin-top: 0;
  }
  .pluses {
      display: flex;
      justify-content: space-around;
      height: 500px;
      align-items: flex-end;
  }
  
  .plus {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 250px;
      border-radius: 10px;
      width: 20%;
      background: #FFFFFF;
      opacity: 60%;
      padding: 30px;
  }
  .plus_nad_niz {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.01em;
    text-align: left;
    height: 100px;
    color: black;
  }

  .plus_nad_vverh {
    font-family: 'Inter', sans-serif;
    font-size: 30px;
    font-weight: bold;
    line-height: 30px;
    letter-spacing: 0.01em;
    text-align: left;
  }

  .pluses {
    background-image: url(../assets/plusBack.png);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .carParts {
    display:  flex;
    flex-direction: column;
    font-family: 'eurostyle';
    align-items: center;
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
    width: 22%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background-color: rgb(227, 222, 222);
    border: solid 3px grey;
    border-radius: 10px;
  }



  </style>
  