<template>
<div class="main">

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
</div>
        
</template>

<script>

</script>

<style scoped>

.main {
    width: 100%;
    display: flex;
    justify-content: center;
}
.pluses {
      display: flex;
      justify-content: space-around;
      height: 500px;
      align-items: flex-end;
      border-radius: 30px;
      padding: 10px;
      padding-bottom: 15px;
      width: 95%;
  }
  
  .plus {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 250px;
      border-radius: 18px;
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
    font-size: 28px;
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
</style>