const logger = (store)=> (next)=> (action)=>{
    console.group(action.type)
      console.log('The Previous Action:',action.type)
      console.log('The New State:',store.getState())
    console.groupEnd()
    return next(action)
}

export default logger