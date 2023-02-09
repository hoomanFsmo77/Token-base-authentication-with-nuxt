import {User_Information,ErrorDebugger} from "~/composables/useTypes";

export const UseRegister=()=>{
    const errorDebugger=reactive<ErrorDebugger>({
        message:null,
        flag:false
    })
    const userInformation=reactive<User_Information>({
        name:null,
        c_password:null,
        password:null,
        email:null
    })

    const registerHandler =async () => {
        errorDebugger.flag=false
        errorDebugger.message=null
        try {
            const data=await $fetch('/api/auth/register',{
                method:'POST',
                body:userInformation
            })
            // console.log(data)
            errorDebugger.flag=false
            errorDebugger.message=null
            return navigateTo({name:'index'})
        }catch (e:any) {
            errorDebugger.flag=true
            errorDebugger.message=e.data.data
        }
    }




    return{
        userInformation,registerHandler,errorDebugger
    }
}