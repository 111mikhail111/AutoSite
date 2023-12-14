<template>
    <footer>
          <div class="footer_left">
              <img src="../assets/logoF.png" alt="" class="logo_footer">
              <div class="footer_underlogo">Buy, autoparts or service<br> premium cars from Dubai</div>
              <ul class="footer_ul1">
                  <li class="footer_ul1_lis">FOR SALE</li>
                  <li class="footer_ul1_lis">AUTOPARTS</li>
                  <li class="footer_ul1_lis">SERVICING</li>
                  <li class="footer_ul1_lis">ABOUT US</li>
              </ul>
          </div>
         
          <div class="footer_right">
            
              <div class="footer_right_up">
                  <div class="call">
                    <div class="callat">Call the office at:</div>
                    <div class="telef">+8-904-614-01-73</div>
                  </div>
                  <div>
                    <a href="https://vk.com/id325016321"><img src="../assets/WhatsApp.png" alt="" class="whats"></a>
                    <a href="https://vk.com/id325016321"><img src="../assets/Telegram.png" alt="" class="telega"></a>
                  </div>
                  
                  
                  <button class="right_request">Request a callback</button></div>
              <div class="footer_right_down">
                  <div class="footer_ouraddress">Our adress</div>
                  <div class="footer_address">Somewhere in Russia, Saint petersburg</div>
              </div>
          </div>
      </footer>
  </template>
  
  <script>
  
  </script>
  
  <style scoped>

@font-face {
	font-family: 'eurostyle'; 
	src: url(../assets/Fonts/eurostileextended_roman_dtc.ttf); 
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');


  /* Стили для вашего футера */
  footer {
    background-color: #bbb;
    color: #222;
    text-align: center;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    font-family: 'eurostyle';
    height: 200px;
    background-color: #F1F0EB;
  }
  
  #image_twitter, #image_facebook {
      width: 20px;
      height: 20px; 
  }
  
  .call {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .callat {
    margin-bottom: 15px;
  }
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .contact-info {
    text-align: left;
  }
  
  .social-links a {
    color: #fff;
    margin-right: 10px;
    text-decoration: none;
  }
  
  .social-links a:hover {
    text-decoration: underline;
  }
  
  .social-links {
      display: flex;
  }
  
  .social_link {
      display : flex;
      align-items: center;
      text-align: center;
  }
  
  ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
  }
  
  .footer_ul1 {
      display: flex;
      font-size: 15px;
      text-align: left;
      margin-top: 50px;
      margin-bottom: 50px;
      font-weight: bold;
  }
  
  .footer_ul1 li {
      margin-right: 20px;
      padding: 0;
  }
  
  .footer_underlogo {
      text-align: left;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0.01em;
        text-align: left;

  }
  
  .logo_footer {
      margin-top: 20px;
      margin-bottom: 20px;
      width: 70px;
  }
  
  .footer_left {
      display : flex;
      align-items: left;
      flex-direction: column;
      text-align: left;
      justify-content: space-between;
  }
  
  .footer_right {
      display : flex;
      align-items: left;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 15px;
      width: 50%;
  }
  
  .footer_right_up {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
  }
  
  .footer_right_up img{
      width: 40px;
      height: 40px;
      margin-left: 15px;
  }
  .telef {
      font-size: 30px;
  }
  html {
    padding: 0;
  }

  body {
    margin: 0px;
    padding: 0;
  }


  
  .right_request {
      background: black;
      color: #ddd;
      width: 250px;
      height: 90%;
      font-family: 'Inter', sans-serif;
      font-weight: bold;
      border-radius: 5px;
  }
  
  .footer_right_down {
      display: flex;
      flex-direction: column;
      align-items: left;
      text-align: left;
  }

  .footer_address, .footer_ouraddress {
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 8px;
  }
  
  </style>
  