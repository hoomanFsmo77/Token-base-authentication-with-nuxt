import {User_Information,ErrorDebugger} from "~/composables/useTypes";
import { useToast } from "vue-toastification";

export const useLogin=()=>{
    const fetchFlag=ref<boolean>(false)
    const toast = useToast();
    const userInformation=reactive<User_Information>({
        password:null,
        email:null
    })
    const errorDebugger=reactive<ErrorDebugger>({
        message:null,
        flag:false
    })
    const loginHandler = async () => {
        fetchFlag.value=true
        errorDebugger.flag=false
        errorDebugger.message=null
        try {
            const data=await $fetch('/api/auth/login',{
                method:'POST',
                body:userInformation
            })
            toast.success('You are logged in!')
            errorDebugger.flag=false
            errorDebugger.message=null
            return navigateTo({name:'index'})
        }catch (err:any) {
            errorDebugger.flag=true
            errorDebugger.message=err.data.data
        }finally {
            fetchFlag.value=false
        }
    }



    return{
        loginHandler,userInformation,errorDebugger,fetchFlag
    }
}