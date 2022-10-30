<template>
    <section> <h1>Market</h1>
    <div class="market">
       
        
        <NuxtLink  v-for="iphone in iphones" :key="iphone"  :to="`/iphones/${iphone}`">        <div class="store">
            <img :src="`/images/${iphone}.jpg`" alt="">
            <h2>{{iphone}}</h2>

        </div></NuxtLink>
       
    </div>
</section>
</template>



<script setup>
const {data} = useFetch("/api/iphone") ;
const iphones = data.value;
console.log(iphones) ;

</script>
<style lang="scss" scoped>

h1{
    text-align: center;
    position: relative;

    padding: 1rem;
    
}
.market{
    display: flex;
    gap : 40px ;
    width: 90%;
    margin: auto;
    flex-wrap: wrap;
    justify-content: space-around;
}
.store{
    text-align: center;
    padding: 1rem;
    margin-top: 1rem;
    width: 250px;
    height: 400px;
    img{
        width: 250px ;
      
    }
    box-shadow: 0px 2px 8px #ccc;
}

</style>