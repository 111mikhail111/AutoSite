<template>
    <section class="onas_sec">
        <div class="history">
            <div class="zagolovok">1. Начало становления</div>
            <div class="text">В 1994 году в Санкт-Петербурге один молодой предприниматель, соответственно я, решил открыть свой бизнес по продаже автомобилей. Я арендовал небольшой офис и начали предлагать свои услуги по продаже автомобилей с пробегом. </div>
            <div class="krug">
                <img @click="showSec" src="../assets/vniz.png">
            </div>
            
            
        </div>
        <div v-bind:style="{ height: second + 'px'}" class="history">
            <div v-if="second!=0" class="zagolovok">2. Расширение бизнеса</div>
            <div v-if="second!=0" class="text">В 1996 году бизнес компании начал расти. Я открыл свой первый автосалон, где стали предлагать новые автомобили. Они также начали расширять сеть своих продаж, открывая новые офисы в других городах России. </div>
            <div v-if="second!=0" class="krug">
                <img @click="showThird" src="../assets/vniz.png">
            </div>    
        </div>
        <div v-bind:style="{ height: third + 'px' }" class="history">
            <div v-if="third!=0" class="zagolovok">3. Появление новых услуг</div>
            <div v-if="third!=0" class="text">В 2000 году компания начала предлагать новые услуги своим клиентам. Они открыли свой собственный сервисный центр, где стали предлагать услуги по ремонту и обслуживанию автомобилей. Также я начал предлагать услуги по кредитованию и страхованию автомобилей. </div>
            <div v-if="third!=0" class="krug">
                <img @click="showForth" src="../assets/vniz.png">
            </div>
        </div>
        <div v-bind:style="{ height: forth + 'px' }" class="history">
            <div v-if="forth!=0" class="zagolovok">4. Международное развитие</div>
            <div v-if="forth!=0" class="text">В 2010 году компания начала развиваться за рубежом. Я открыл свой первый филиал в Казахстане. Затем я открыл филиалы в других странах СНГ и Европы.</div>
            <div v-if="forth!=0" class="krug">
                <img @click="showFifth" src="../assets/vniz.png">
            </div>
        </div>
        <div v-bind:style="{ height: fifth + 'px' }" class="history lastbox">
            <div v-if="fifth!=0" class="zagolovok">5. Успешный бизнес</div>
            <div v-if="fifth!=0" class="text">В настоящее время компания является одним из крупнейших дистрибьюторов автомобилей в России и странах СНГ. Она предлагает широкий выбор автомобилей новых и с пробегом, а также широкий спектр услуг по обслуживанию и ремонту автомобилей. Компания является лидером рынка в своем сегменте и продолжает развиваться и расти.</div>
            <div v-if="fifth!=0" class="krug">
                <img @click="hideAll" class="last" src="../assets/vniz.png">
            </div>
        </div>

    </section>
</template>

<script>
export default {
    data: () => {
    return {
      first: true,
      interval: null,
      second: 0,
      third: 0,
      forth: 0,
      fifth: 0
    }
  },
  methods : {
    showSec() {
        this.interval = setInterval(this.setSec, 5);
        
    },
    setSec() {
        if (this.second > 340) clearInterval(this.interval);
        this.second += 3;
    },
    showThird() {
        this.interval = setInterval(this.setThird, 5);
        
    },
    setThird() {
        if (this.third > 370) clearInterval(this.interval);
        this.third += 3;
    },
    showForth() {
        this.interval = setInterval(this.setForth, 5);
        
    },
    setForth() {
        if (this.forth > 290) clearInterval(this.interval);
        this.forth += 3;
    },
    showFifth() {
        this.interval = setInterval(this.setFifth, 5);
        
    },
    setFifth() {
        if (this.fifth > 400) clearInterval(this.interval);
        this.fifth += 3;
    },
    hideAll() {
        this.second = 0;
        this.third = 0;
        this.forth = 0;
        this.fifth = 0;
    }

  }
}
</script>

<style scoped>

@font-face {
	font-family: 'eurostyle'; 
	src: url(../assets/Fonts/eurostileextended_roman_dtc.ttf); 
}
.history {
    width: 70%;
    height: 350px;
    margin-top: 20px;
    background-color: rgb(46, 46, 46);
    display: flex;
    flex-direction: column;
    color: white;
    font-family: 'eurostyle';
    border-radius: 10px;
}

.zagolovok {
    font-size: 50px;
    font-weight: 900;
    margin: 20px;
}

.text {
    font-size: 24px;
    text-align: right;
    margin: 30px;
    width: 80%;
    align-self: flex-end;
}
.onas_sec {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(70, 70, 70);
}

.krug {
    height: 35px;
    align-self : center;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 50%;
}

.krug img {
    height: 30px;
}

.last {
    transform: rotate(180deg);
}

.lastbox {
    margin-bottom: 20px;
}
</style>