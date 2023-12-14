<template>
    <header>
            <!-- (div.lang>div.lang_word+img.lang_strel)+(div.curr>div.curr_word+img.curr_strel)+div.number+div.callback+(div.messange>img.messange_whats+img.messange_teleg) -->
            <div class="header_left">
                <div class="lang">
                    <div class="lang_word">English</div>
                    <img src="../assets/HeaderArrow.png" alt="" class="lang_strel">
                </div>
                <div class="curr">
                    <div class="curr_word">Currency: AED</div>
                    <img src="../assets/HeaderArrow.png" alt="" class="curr_strel">
                </div>
            </div>
            <div class="header_right">
                <div class="number">+ 971 4 608 68 08</div>
                <div class="callback">Request a callback</div>
                <div class="messange">
                    <img src="../assets/Telegram.png" alt="" class="messange_whats">
                    <img src="../assets/WhatsApp.png" alt="" class="messange_teleg">
                </div>
            </div>
            
        </header>
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
    color: #000;
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
    justify-content: space-between;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    padding-left:  52px;
}

.header_left img {
   height: 5px; 
   width: 10px;
   margin-left: 5px;
}

.callback {
    font-family: 'Inter', sans-serif;
    padding-top: 3px;
}

header {
    background-color: #F1F0EB;
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
}

.lang, .curr {
    display: flex;
    align-items: center;
}

</style>