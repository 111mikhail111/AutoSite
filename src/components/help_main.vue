<template>
<section class="reshenie">
    <div class="problems">Возникли проблемы?</div>
    <div class="wetry">Мы постараемся все решить!</div>

    <div class="spisok">
        <div class="spisok_nad">Часто задаваемые вопросы:</div>
        <ul>
            <li class="chasto">
                <div @click="setFirst" class="ask">Как найти подходящий автомобиль?</div>
                <div v-if="answers[0]" class="strelka">
                    <img class="l_img" src="../assets/strelka_otvet.png">
                </div>
                
                <div v-if="answers[0]" class="answer rigth">На сайт вскоре будут добавлениы фукции поиска и фильтрации предложений</div>
            </li>
            <li class="chasto">
                <div @click="setSec" class="ask rigth">Как узнать подробности о конкретном автомобиле?</div>
                <div v-if="answers[1]" class="strelka r_str">
                    <img class="r_img" src="../assets/strelka_otvet.png">
                </div>
                <div v-if="answers[1]" class="answer">Нажав на карточка автомобиля вы можете открыть страницу с полной информацией о нем</div>
            </li>
            <li class="chasto">
                <div @click="setThird" class="ask">Как забронировать автомобиль?</div>
                <div v-if="answers[2]" class="strelka">
                    <img class="l_img" src="../assets/strelka_otvet.png">
                </div>
                <div v-if="answers[2]" class="answer rigth">Оставте заявку нажав на цену любого автомобиля</div>
            </li>
            <li class="chasto">
                <div @click="setForth" class="ask rigth">Как узнать о наличии автомобиля в автосалоне?</div>
                <div v-if="answers[3]" class="strelka r_str">
                    <img class="r_img" src="../assets/strelka_otvet.png">
                </div>
                <div v-if="answers[3]" class="answer">Каталог обновляется ежедневно, так что все машины которые вы видите доступны к приобретению</div>
            </li>
            <li class="chasto">
                <div @click="setFifth" class="ask">Как узнать о ценах на автомобили?</div>
                <div v-if="answers[4]" class="strelka">
                    <img class="l_img" src="../assets/strelka_otvet.png">
                </div>
                <div v-if="answers[4]" class="answer rigth">Внизу каждой карточки автомобиля указана его цена</div>
            </li>
            <li class="chasto">
                <div @click="setSixth" class="ask rigth">Как узнать об условиях покупки автомобиля?</div>
                <div v-if="answers[5]" class="strelka r_str">
                    <img class="r_img" src="../assets/strelka_otvet.png">
                </div>
                <div v-if="answers[5]" class="answer">Все условия указаны в разделе ГЛАВНАЯ-Сервис</div>
            </li>
            <li class="chasto">
                <div @click="setSeventh" class="ask">Как узнать о способах оплаты автомобиля?</div>
                <div v-if="answers[6]" class="strelka">
                    <img class="l_img" src="../assets/strelka_otvet.png">
                </div>
                <div v-if="answers[6]" class="answer rigth">У нас доступна какмединоразовая выплата, так и выплаты по частям</div>
            </li>
            <li class="chasto">
                <div @click="setEight" class="ask rigth">Как получить консультацию по вопросам покупки автомобиля?</div>
                <div v-if="answers[7]" class="strelka r_str">
                    <img class="r_img" src="../assets/strelka_otvet.png">
                </div>
                <div v-if="answers[7]" class="answer">Напишите в поддежку на этой же странице ниже и мы ответим вам как можно скорее</div>
            </li>
        </ul>
    </div>

    <div class="neNashli">
        <div class="neNashli_nad">Не нашли ответ на ваш вопрос <br> или <br> нужна консультация по какому либо вопросу?</div>
        <button  @click="$emit('close')" class="writeUs">Напишите нам</button>
    </div>
</section>
</template>

<script>
export default {
    data: () => {
        return {
            n: [0, 1, 2, 3, 4, 5, 6, 7],
            answers: [false, false, false, false, false, false, false, false]
        }
    },

    methods: {
        HideAll() {
            this.n.forEach((value) => {
                this.answers[value] = false;
            })
        },
        setFirst() {
            this.HideAll();
            if (this.answers[0] == false)
            this.answers[0] = true;
        },
        setSec() {
            this.HideAll();
            this.answers[1] = true;
        },
        setThird() {
            this.HideAll();
            this.answers[2] = true;
        },
        setForth() {
            this.HideAll();
            this.answers[3] = true;
        },
        setFifth() {
            this.HideAll();
            this.answers[4] = true;
        },
        setSixth() {
            this.HideAll();
            this.answers[5] = true;
        },
        setSeventh() {
            this.HideAll();
            this.answers[6] = true;
        },
        setEight() {
            this.HideAll();
            this.answers[7] = true;
        }

    }
}
</script>

<style scoped>
@font-face {
	font-family: 'eurostyle'; 
	src: url(../assets/Fonts/eurostileextended_roman_dtc.ttf); 
}

.reshenie {
    background-color: rgb(70, 70, 70);
    color: white;
    font-family: 'eurostyle';
    display: flex;
    flex-direction: column;
    align-items: center;
}

.problems {
    font-size: 50px;
    margin-top: 20px;
}
.wetry {
    font-size: 20px;
    margin-bottom: 40px;
}
.spisok_nad {
    font-size: 40px;
    margin-bottom: 20px;
    align-self: center;
    font-weight: 900;
}

.spisok {
    width: 70%;
    color: black;
    background-color: white;
    padding: 30px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
}

ul {
    list-style-type: none;

}

li {
    margin-bottom: 20px;   
    display: flex;
    flex-direction: column;
    width: 100%;
}

.ask {
    font-size: 25px;
    border: solid black 2px;
    display: inline-block;
    width:fit-content;
    padding: 5px 15px;
    border-radius: 20px;
    transition: 0.2s ease-in-out;
}

.ask:hover {
    background-color: rgb(218, 218, 218);
}

.answer {
    border: dashed 2px black;
    font-size: 20px;
    border-radius: 10px;
    margin-left: 50px;
    width: 50%;
    padding: 5px 15px;
    text-align: center;
    margin-bottom: 30px;
}

.rigth {
    align-self: flex-end;
}

.l_img {
    height: 90px;
    width: 60px;
    transform: rotate(-60deg);
}

.strelka {
    align-self: center;
    padding-right: 170px;
    padding-top: 20px;
}

.r_img {
    height: 90px;
    width: 60px;
    transform: scaleX(-1) rotate(-60deg)
}

.r_str {
    padding-right: 0px;
    padding-left: 250px;
}

.neNashli {
    display: flex;
    flex-direction: column;
    border: solid white 2px;
    padding: 20px 50px;
    border-radius: 20px;
    margin: 20px;
    font-size: 23px;
}

.neNashli_nad {
    text-align: center;
}

.neNashli button {
    width: 320px;
    margin-top: 20px;
    border-radius: 10px;
    align-self: center;
    font-family: 'eurostyle';
    font-size: 30px;
    font-weight: 900;
}




</style>