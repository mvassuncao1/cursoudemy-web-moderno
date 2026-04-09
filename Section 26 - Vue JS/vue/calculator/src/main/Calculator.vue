<template>
    <div class="calculator">
        <Display />
        <Button />
    </div>
</template>

<script>
import Display from '../components/Display.vue';
import Button from '../components/Button.vue';
// import Button from "@/components/Button.vue";
// import Display from "@/components/Display.vue";


export default{
    components: {Button, Display}
}
</script>

<style>
.calculator{
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(2, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px ;
}
</style>