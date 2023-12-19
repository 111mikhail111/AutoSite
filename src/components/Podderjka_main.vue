<template>
    <section>
        <input class="theme" type="input" placeholder="Напишите тему">
        <textarea type="text" class="text" placeholder="Опишите ваш вопрос"></textarea>
        <button  @click="$emit('close')" class="send">Отправить</button>
    </section>
</template>

<script>

</script>

<style scoped>
@font-face {
	font-family: 'eurostyle'; 
	src: url(../assets/Fonts/eurostileextended_roman_dtc.ttf); 
}

section {
    width: 800px;
    height: 500px;
    background: rgb(180, 180, 180);
    border: 3px solid rgb(0, 0, 0);
    border-radius: 50px;
    position: fixed;
    top: 100px;
    left: 360px;
    right: auto;
    background-image: url(../assets/phone.png);
    background-repeat: no-repeat;
    background-size: cover;
    color: rgb(199, 199, 199);
    display: flex;
    flex-direction: column;
    font-family: 'eurostyle';
    align-items: center;
}

.theme {
    margin-top: 30px;
    width: 60%;
    height: 40px;
    font-family: 'eurostyle';
    font-size: 22px;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: rgba(255, 255, 255, 0.653);
}

.text {
    width: 90%;
    font-family: 'eurostyle';
    height: 300px;
    font-size: 18px;
    border-radius: 15px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.653);
}

.send {
    width: 300px;
    font-family: 'eurostyle';
    border-radius: 5px;
    height: 50px;
    font-weight: 900;
    font-size: 30px;
    margin-top: 10px;
}


</style>