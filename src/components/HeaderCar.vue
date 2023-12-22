<template>
    <header>
            <!-- (div.lang>div.lang_word+img.lang_strel)+(div.curr>div.curr_word+img.curr_strel)+div.number+div.callback+(div.messange>img.messange_whats+img.messange_teleg) -->
            <div class="header_left">
                <img class="avatar" src="../assets/avatar.png" alt="">
                <div v-if="name!=null"  @click="$emit('open')" class="Username">{{ name + ' ' + surname }}</div>
                <div v-else  @click="$emit('open')" class="Username">Зарегистрироваться</div>
            </div>
            <div class="header_right">
                <div class="number">+ 8-904-111-11-11</div>
                <div class="callback"><a href="help.html">Обратиться в поддержку</a></div>
                <div class="messange">
                    <a href="https://vk.com/id325016321"><img  src="../assets/Telegram.png" alt="" class="messange_whats"> </a>
                    <a href="https://vk.com/id325016321"> <img  src="../assets/WhatsApp.png" alt="" class="messange_teleg"></a>
                    
                    
                </div>
            </div>
            
        </header>
        <container class="under_header_small">
            <!--img.logo+ul.under_header_small_ul>li.under_header_small_li*3 -->
            <a href="index.html"><img href="index.html" src="../assets/logoHeader.png" alt="" class="logo"></a>
            
            <ul class="under_header_small_ul">
                <a href="index.html"><li class="under_header_small_li">ГЛАВНАЯ</li></a>    
                <a href="second.html"><li class="under_header_small_li">О НАС</li></a>
                <a href="help.html"><li class="under_header_small_li">ПОДДЕРЖКА</li></a> 
            </ul>
        </container>
</template>

<script>

</script>

<style scoped>
@font-face {
	font-family: 'eurostyle'; 
	src: url(../assets/Fonts/eurostileextended_roman_dtc.ttf); 
}

template {
    background-color: #F1F0EB;
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');

header {
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(49, 49, 49);
    font-family: 'eurostyle';
    height: 55px;
}

a:active, /* активная/посещенная ссылка */
a:hover,  /* при наведении */
a {
  text-decoration: none;
  color: #ffffff;
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
    margin-top: 0px;
    margin-bottom: 10px;
    padding: 10px;
    align-items: center;
    justify-content: left;
    font-family: 'eurostyle';
    background-color: rgb(49, 49, 49);
    margin-bottom: 0px;
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

</style>