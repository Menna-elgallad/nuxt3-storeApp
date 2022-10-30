<template>
    
    <div>
        <div class="navsec"><h2>LOGO</h2>
        <div class="links">
            <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/iphones">Iphones</NuxtLink>
        <NuxtLink to="/profile" v-if="auth.isAuth">Profile</NuxtLink>
        <NuxtLink to="/login" v-else>Login</NuxtLink>
        <a href="#">cart {{cart.length}}</a>
        <a href="" v-if="auth.isAuth" style="background-color:maroon ; padding:0.5rem ; color: white;border-radius: 1.2rem; ">Logout</a>

        </div>
    </div>
        
<slot></slot>
    </div>
</template>



<script setup>

const cart = useCart();
const auth = useAuth();


</script>
<style  lang="scss">

.navsec{
display: flex;
    background-color: #ccc;
    padding: 1.5rem;
    justify-content: space-between;
    align-items: center;
    box-shadow:0 2px 8px #ccc;
    a{
        margin: 1rem;
        color: rgb(20, 113, 189);
        font-weight: 600;
    }
    h2{
        color: rgb(20, 113, 189);
    }
}
*{
    margin: 0;
    padding: 0;
    font-family: 'Cairo', sans-serif;
}
body{
    box-sizing: border-box;
}
a{
    list-style: none;
    text-decoration: none;
    color: black;
}

</style>