export const startlogin=()=>{
    return {
        type:"START_LOGIN"
    };
   
}

export const successlogin=(user)=>{
    return{
        type:"SUCCESS_LOGIN",
        payload:user
    };
}

export const failedlogin=(error)=>{
    return{
        type:"FAILED_LOGIN",
        payload:error
    };
}