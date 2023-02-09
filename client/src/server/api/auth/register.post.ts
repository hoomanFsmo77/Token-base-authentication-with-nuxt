import {setCookie} from "h3";


export default defineEventHandler(async (e)=>{
    const body=await readBody(e)
    const {baseUrl}=useRuntimeConfig()
    try {
        const data:any=await $fetch(baseUrl+'/api/register',{
            method:'POST',
            body:body,
            headers:{
                'Accept':'application/json'
            }
        })
        setCookie(e,'token',data.token,{
            httpOnly:true,
            secure:true,
            maxAge:60*60*24*7, // 1 weak
            path:'/'
        })
        return  data.user;
    }catch (error:any) {
        return  error;
    }
})