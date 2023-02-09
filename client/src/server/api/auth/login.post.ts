import {setCookie} from "h3";


export default defineEventHandler(async e=>{
    const body=await readBody(e)
    const {baseUrl}=useRuntimeConfig()
    try {
        const data:{user:object,token:string}=await $fetch(baseUrl+'/api/login',{
            method:'POST',
            headers:{
                'Accept':'application/json'
            },
            body:body
        })
        setCookie(e,'token',data.token,{
            httpOnly:true,
            secure:true,
            maxAge:60*60*24*7, // 1 weak
            path:'/'
        })
        return data.user;

    }catch (err) {
        return err;
    }



})