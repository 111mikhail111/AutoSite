<template>
<div class="picture_cont">
        <header>
            <!-- (div.lang>div.lang_word+img.lang_strel)+(div.curr>div.curr_word+img.curr_strel)+div.number+div.callback+(div.messange>img.messange_whats+img.messange_teleg) -->
            <div class="header_left">
                <img class="avatar" src="../assets/avatar.png" alt="">
                <div v-if="name!=null"  @click="$emit('open')" class="Username">{{ name + ' ' + surname }}</div>
                <div v-else  @click="$emit('open')" class="Username">Зарегистрироваться</div>
            </div>
            <div class="header_right">
                <div class="number">+ 971 4 608 68 08</div>
                <div class="callback">Обратиться в поддержку</div>
                <div class="messange">
                    <img src="../assets/Telegram.png" alt="" class="messange_whats">
                    <img src="../assets/WhatsApp.png" alt="" class="messange_teleg">
                </div>
            </div>
            
        </header>
        <container class="under_header_small">
            <!--img.logo+ul.under_header_small_ul>li.under_header_small_li*3 -->
            <img src="../assets/logoHeader.png" alt="" class="logo">
            <ul class="under_header_small_ul">
                <a href="index.html"><li class="under_header_small_li">ГЛАВНАЯ</li></a>    
                <a href="second.html"><li class="under_header_small_li">О НАС</li></a>
                <a href="help.html"><li class="under_header_small_li">ПОДДЕРЖКА</li></a> 
            </ul>
        </container>
        <continer class="under_header_big">
            <!-- (div.under_header_big_center>div.under_header_big_center_up+div.under_header_big_center_down)+button.lets_go -->
            <div class="under_header_big_center">
                <div class="under_header_big_center_up">НАЙДИ СВОЮ МАШИНУ</div>
                <div class="under_header_big_center_down">ПРЕМИУМ МАШИНЫ ИЗ ДУБАЯ</div>
            </div>
            <div class="under_header_big_bottom">
                <button class="under_header_big_but">ПОЕХАЛИ</button>
            </div>
            
        </continer>
</div>
</template>

<script>
export default {
    props: [
        'name',
        'surname'
    ],

    data () {
        return {
            Name : this.name,
            Surname : this.surname
        }
    }
}
</script>

<style scoped>
@font-face {
	font-family: 'eurostyle'; 
	src: url(../assets/Fonts/eurostileextended_roman_dtc.ttf); 
}

a:active, /* активная/посещенная ссылка */
a:hover,  /* при наведении */
a {
  text-decoration: none;
  color: #ffffff;
}

template {
    background-color: #F1F0EB;
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
.picture_cont {
    background-image: url(../assets/HeaderBack.png);
    font-family: 'eurostyle';
    color: #fff;
    height: 780px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0 0 20px 20px;
    background-color: #F1F0EB;

}
header {
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    padding-bottom: 0;
}
.header_right {
    display: flex;
    width: 40%;
    justify-content: space-between;
    padding-right: 50px;
}
.header_left {
    display: flex;
    width: 15%;
    justify-content: flex-start;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    align-items: center;
    padding-left:  52px;
}



.callback {
    font-family: 'Inter', sans-serif;
    padding-top: 3px;
    transition: 0.2s ease-in-out;
    cursor: pointer;
}

.callback:hover {
    font-size: 15px;
}



.number {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.02em;
    text-align: left;
    align-items: center;
    padding-top: 5px;
}

header img {
    width: 25px;
    margin-right: 10px;
    transition: 0.2s ease-in-out;
    cursor: pointer;
}

header img:hover {
    width: 23px;
    
}

.lang, .curr {
    display: flex;
    align-items: center;
}

.under_header_small {
    display: flex;
    border-top: solid white 1px;
    border-bottom: solid white 1px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    align-items: center;
    justify-content: left;
}

.under_header_small img {
    padding-right: 260px;
    padding-left: 50px ;
}

.under_header_small ul {
    display: flex;
    list-style-type: none;
}

.under_header_small li {
    margin-left: 20px;
}

.under_header_big_center {
    margin-top: 250px;
    margin-left: 80px;
}

.under_header_big_center_down {
font-size: 39px;
font-weight: 400;
line-height: 51px;
letter-spacing: 0.01em;
text-align: left;
}
.under_header_big_center_up {
font-size: 49px;
font-weight: 700;
line-height: 51px;
letter-spacing: 0.01em;
text-align: left;
}

.under_header_big {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 82.3%;
    align-items: center;
}

.under_header_big_bottom {
    display: flex;
    align-items: flex-end;
}
.under_header_big_but {
background-color: #fff;
font-family: 'eurostyle';
font-size: 18px;
font-weight: 700;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
border-radius: 10px 10px 0 0;
height: 35px;
width: 150px;
text-align: center;
border: 0px;
transition: 0.2s ease-in-out;
cursor: pointer;
}

.under_header_big_but:hover {
    background-color: black;
    color: #fff;
}

.avatar {
    width: 30px;
    height: 30px;
    
}

.Username {
    transition: 0.2s ease-in-out;
    cursor: pointer;
}

.Username:hover {
    font-size: 13px;
}


</style>