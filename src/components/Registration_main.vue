<template>
    <div class="registration_box">
        <div class="reg_inner">
            <div class="reg_nad">Регистрация</div>
            <div class="reg_poles">
                <div class="poles_left">
                    <div class="poles_nad">Имя:</div>
                    <div class="poles_nad">Фамилия:</div>
                    <div class="poles_nad">E-mail:</div>
                    <div class="poles_nad">Номер телефона:</div>
                    <div class="poles_nad">Пароль:</div>
                    <div class="poles_nad">Подтвердите пароль:</div>
                </div>
                <div class="poles_right">
                    <input type="text" name="name" class="poles_val" v-model="Name"/>
                    <input type="text" name="name" class="poles_val" v-model="Surname" />
                    <input type="email" name="name" class="poles_val" v-model="email"/>
                    <input type="tel" name="name" class="poles_val" v-model="Phone"/>
                    <input type="password" name="name" class="poles_val" v-model="Pass"/>
                    <input type="password" name="name" class="poles_val" v-model="Conf"/>
                </div>
            </div>
            <div class="div_crest" @click="$emit('close')"><img class="crest" src="../assets/krest.png"></div>
            
            <button v-on:click="CheckFields" @click="$emit('name', Name, Surname, ifReg)">OK!</button>

        </div>
      
    </div>
  </template>
  
  <script>


  export default {
    
    data () {
      return {
        Name: "",
        Surname: "",
        email: "",
        Phone: "",
        Pass: "",
        Conf: "",
        ifReg : true
      }
    },
    methods: {
      CheckFields () {
        if (this.Name == "" || this.Surname == "" || this.Pass == "" || this.email == "" || this.Conf == "" || this.Phone == "") {
            alert("Заполните все поля!");
        }
        else if (this.Pass != this.Conf) {
            alert("Пароль не совпадает с подтверждением");
        }
        else {
            alert("Вы зарегистрированы");
            this.ifReg = false;
        }
      }
      
    }
  };
  </script>
  
  <style>
  @font-face {
	font-family: 'eurostyle'; 
	src: url(../assets/Fonts/eurostileextended_roman_dtc.ttf); 
}

.div_crest {
    background-color: aliceblue;
    position: absolute;
    width: 22px;
    border-radius: 50%;
    height: 22px;
    right: 20px;
    top: 20px;
}
.crest {
    width: 20px;
    margin-top: 1px;
    margin-left: 1px;
}


  .reg_nad {
    font-size: 40px;
    margin-bottom: 15px;
    font-weight: 900;
  }

  .reg_inner {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    font-family: 'eurostyle';
  }
  
  .registration_box {
    width: 800px;
    height: 500px;
    background: rgb(180, 180, 180);
    border: 3px solid rgb(0, 0, 0);
    border-radius: 50px;
    position: fixed;
    top: 100px;
    left: 360px;
    right: auto;
    
    background-image: url(../assets/Reg_back.png);
    background-repeat: no-repeat;
    background-size: cover;
    color: rgb(199, 199, 199);
  }
  
  .reg_poles {
    display: flex;
    margin-top: 20px;
    font-size: 25px;
    width: 100%;
  }
  
  .poles_right {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 15px;
  }
  
  .poles_nad {
    height: 27px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .poles_val {
    width: 230px;
    height: 25px;
    margin-bottom: 30px;
    border: 0px solid red;
    outline: none;
    background-color:white;
    border-radius: 5px;
  }

  button {
    height: 40px;
    width: 80px;
    font-size: 30px;
    font-family: 'eurostyle';
    border-radius: 10px;
  }
  
  .poles_left {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
    margin-right: 15px;
  }
  </style>
  