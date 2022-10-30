export default defineNuxtRouteMiddleware(() => {
    const auth = useAuht();
    return auth.value.isAuth
})