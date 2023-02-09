import {setCookie} from "h3";


export default defineEventHandler(async (e)=>{
    const body=await readBody(e)
    try {
        const data:any=await $fetch('http://localhost:8000/api/register',{
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