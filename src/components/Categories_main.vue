<template>
    <section class="categories">
          <div class="cars_for_sale">
              <div class="cars_for_sale_nad">ГОРЯЧИЕ ПРЕДЛОЖЕНИЯ</div>
              <div @click="$emit('opencars')" class="cars_for_sale_more">БОЛЬШЕ</div>
          </div>
          <div class="categories_right">
              <div class="right_autoparts">
                  <div class="autoparts_nad">ЧАСТИ АВТОМОБИЛЯ</div>
                  <div @click="$emit('openmods')" class="cars_for_sale_more">БОЛЬШЕ</div>
              </div>
              <div class="right_servicing">
                  <div class="servising_nad">СЕРВИС</div>
                  <div @click="$emit('opendel')" class="cars_for_sale_more">БОЛЬШЕ</div>
              </div>
          </div>
    </section>
</template>

<script>


</script>

<style scoped>

@font-face {
	font-family: 'eurostyle'; 
	src: url(../assets/Fonts/eurostileextended_roman_dtc.ttf); 
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');

.right_autoparts {
    background-image: url(../assets/AutoParts.png);
    background-repeat: no-repeat;
    width: 658px;
    height: 308px;
    margin: auto;
    margin-bottom: 12px;
    display: flex;
  }
.categories {
    font-family: 'eurostyle';
}
.categories_right {
      display: flex;
      flex-direction: column;
      margin-right: auto;
      margin-left: 12px;
      justify-content: space-between;
  }

.cars_for_sale_more {
    margin-top: auto;
    margin-left: auto;
    margin-bottom: 30px;
    margin-right: 30px;
    width: 250px;
    height: 80px;
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

  .right_servicing {
    background-image: url(../assets/Service.png);
    background-repeat: no-repeat;
    background-size: cover;
    width: 658px;
    height: 308px;
    margin-top: 12px;
    display: flex;
  }
</style>