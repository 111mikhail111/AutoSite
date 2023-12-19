<template>
<HeaderCar></HeaderCar>
<Help_main @close="Close"></Help_main>
<FooterCar></FooterCar>
<Podderjka_main v-if="ifOpen" @close="Close"></Podderjka_main>
</template>

<script>
import HeaderCar from '../../components/HeaderCar.vue';
import FooterCar from '../../components/FooterMulty.vue';
import Help_main from '../../components/help_main.vue';
import Podderjka_main from '../../components/Podderjka_main.vue';

export default {
    components : {
        HeaderCar,
        FooterCar,
        Help_main,
        Podderjka_main
    },
    data: () => {
        return {
            ifOpen: false
        }
    },
     methods: {
        Close() {
            if (this.ifOpen == false) {
                
                this.ifOpen = true;
            } 
            else {
                alert("Спасибо за обращение, вышлем вам ответ на почту");
                this.ifOpen = false;
            }
        }
     }
}
</script>