<template>
<HeaderCar></HeaderCar>
<Onas_main></Onas_main>
<FooterCar></FooterCar>

</template>

<script>
import HeaderCar from '../../components/HeaderCar.vue';
import FooterCar from '../../components/FooterMulty.vue';
import Onas_main from '../../components/Onas_main.vue';

export default {
    components : {
        HeaderCar,
        FooterCar,
        Onas_main
    }
}
</script>