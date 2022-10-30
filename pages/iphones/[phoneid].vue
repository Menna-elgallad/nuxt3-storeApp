<template>
    <section>
    <Head>

        <Title>{{$route.params.phoneid}}</Title>
    </Head>
    <div class="content">
        <div class="img">
        <img :src="`/images/${id}.jpg`">

        </div>
        <div class="text">
    <h2>{{$route.params.phoneid}}</h2>
        <button @click="addtocart" v-if="incart()">Remove from the cart</button>
        <button @click="addtocart" v-else>Add to cart</button>
        </div>
    </div>
</section>
</template>

<script setup>
const route = useRoute()

const id = computed(() => {return route.params.phoneid})
console.log(id.value)
const cart = useCart()

function incart(){

    return cart.value.find(item => item.name ===id.value )
}
function addtocart(){
    if (!incart()){
        console.log("pushing")
        cart.value.push({name:id.value})
        console.log(cart.value)
    }
    else{
        console.log("removing")
        cart.value = cart.value.filter(item => item.name !== id.value)
        


    }

 

}


</script>


<style lang="scss">
.content{

 
    display: flex;
 
   width: 80%;
justify-content: space-evenly;
border-radius: 1.5rem;
align-items: center;
margin: 4rem auto;
flex-wrap: wrap;
// box-shadow: 0px 2px 8px #ccc;
    .img {
     padding: 1rem;
box-shadow: 0px 2px 8px #ccc;
border-radius: 1.5rem;

     
     img{
        width: 400px;
        padding: 1rem;
     }
    }
    .text{
        text-align: center;
        margin-top: 2rem;
        background-color: rgba(204, 204, 204, 0.377);
border-radius: 1.5rem;
padding: 5rem 2rem;

   h2{
    background-color: white;
    padding: 2rem 10rem;
    box-shadow: 0px 2px 8px #ccc;
    border-radius: 1.5rem;

   }
   button{
        
    background-color:rgb(20, 113, 189); 
    color: white;
    padding:1rem 5rem;
    box-shadow: 0px 2px 8px rgb(139, 139, 139);
    border-radius: 1.5rem;
    margin:4rem 0 ;
    overflow: hidden;
    outline: none;
    border: none;
    cursor: pointer;
   }
        
    }
}
</style>