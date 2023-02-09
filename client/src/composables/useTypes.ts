export interface User_Information {
    name?:string|null
    email:string|null
    password:number|string|null
    c_password?:number|string|null
}
interface Error_Message {
    name?:string[]
    email:string[]
    password:string[]
    c_password?:string[]
}

export interface ErrorDebugger {
    flag:boolean,
    message:Error_Message|null
}