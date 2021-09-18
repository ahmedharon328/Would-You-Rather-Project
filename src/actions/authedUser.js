export const SET_AUTHED_ID = 'SET_AUTHED_ID'
export const USER_LOGGED_OUT= 'USER_LOGGED_OUT'

export const authUser = (id)=>{
    return{
        type:SET_AUTHED_ID,
        id
    }

}

export const logOut=()=>{
    return {
        type:USER_LOGGED_OUT,
        id:null
    }
}
