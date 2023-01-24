const init={texts:[]}

export const reducer=(store=init,action)=>{
    if(action.type=='ADD_TEXT'){
        return {...store,texts:[...store.texts,action.payload]}
    }
    else {
        return store
    }
}