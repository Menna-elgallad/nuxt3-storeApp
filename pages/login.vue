<template>
    <section >
       <h2> Log In </h2>
        <form @submit.prevent="onsubmit()" >
<div class="form-control">
    <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email">
</div>
<div class="form-control">
    <label for="Password">Password</label>
        <input type="Password" id="Password" v-model="form.password">
</div>
<div class="form-control" v-if="errortext">
<p style="color: red;">{{errortext}}</p>
</div>
<div class="form-control">


    <button  >
    <span v-if="isloading">Loading</span>
<span v-else>Log In</span></button>
</div>
    </form>
    </section>

</template>



<script setup>

const url ="https://reqres.in/api/login"
const form = reactive({
email : "eve.holt@reqres.in" , 
password : "cityslicka"
})
const isloading = ref(false)
const errortext =ref(null)
const auth = useAuth()
async function onsubmit(){
    if (isloading.value) {
        return
    }
    isloading.value = true
    const {data,error} =await useFetch(url , {
        method:"post" , 
        body : form
    });
    isloading.value = false;
    console.log(error.value);
    if (error.value){
        errortext.value = error.value.data.error;
        console.log(error.value.data.error);
        return ;
    }
    else{
        auth.value.isAuth = true
        navigateTo("/");

    }
   
}

</script>



<style scoped lang="scss">

section{
padding: 2rem;
box-shadow: 0px 2px 8px #ccc;
width:30%;
margin: 5rem auto;
    form{
        .form-control{
          display: flex;
          flex-direction: column;
            margin-top: 2rem;
            button{
                background-color:rgb(20, 113, 189); 
                color: white;
                padding:0.7rem 5rem;
                box-shadow: 0px 2px 8px rgb(139, 139, 139);
                border-radius: 1.5rem;
                outline: none;
                border: none;
                cursor: pointer;
                margin: auto;
            }
            label{
                display: block;
                font-weight: 800;
            }
            input{
                display: block;
                margin: 1rem 0;
                outline: none;
                border: none;
                padding:0.7rem 2rem;
                border-radius: 1.2rem;
                box-shadow: 0 2px 8px #ccc;
                max-width: 90%;
            }
        }


    }
}
</style>