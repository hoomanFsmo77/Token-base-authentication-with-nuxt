import {User_Information,ErrorDebugger} from "~/composables/useTypes";
import { useToast } from "vue-toastification";
export const UseRegister=()=>{
    const fetchFlag=ref<boolean>(false)
    const toast = useToast();
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
        fetchFlag.value=true
        errorDebugger.flag=false
        errorDebugger.message=null
        try {
            const data=await $fetch('/api/auth/register',{
                method:'POST',
                body:userInformation
            })
            // console.log(data)
            toast.success('You registered!')
            errorDebugger.flag=false
            errorDebugger.message=null
            return navigateTo({name:'index'})
        }catch (e:any) {
            errorDebugger.flag=true
            errorDebugger.message=e.data.data
        }finally {
            fetchFlag.value=false
        }
    }




    return{
        userInformation,registerHandler,errorDebugger,fetchFlag
    }
}