
import { useEffect, useReducer } from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer,initialState(initialValue))
  const{ 
    item,
    loading,
    error,
    isSynchronizedItem} = state

//ACTION CREATORS
const onError=(error)=>dispatch({type:actionTypes.error,payload:error});
const onSuccess=(parsedItem)=>dispatch({
  type:actionTypes.success,
  payload:parsedItem
})
const onSave=(newItem)=>dispatch({
  type:actionTypes.save,
  payload:newItem,
})
const onSynchronize=(newItem)=>dispatch({ 
  type:actionTypes.synchronize
})


  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        onSuccess(parsedItem)
      }

      catch (error) {
        onError(error)
      }
    }, 500)
  }, [isSynchronizedItem])

  const saveItem = (newItem) => {
    try{
      localStorage.setItem(itemName, JSON.stringify(newItem))
      onSave(newItem)
    } catch(error){
      onError(error)
    }
  
  }
  const synchronizeItems=() => {onSynchronize()}

  return {
    item,
    saveItem,
    loading,
    error,
    synchronizeItems,
    isSynchronizedItem
  }

}

const initialState=(initialValue)=>({
  item : initialValue,
  loading : true,
  error :false,
  isSynchronizedItem :true
  })
const actionTypes={
 error:"ERROR",
 success:"SUCCESS",
 save:"SAVE",
 synchronize:"SYNCHRONIZE"
}
const reducerObject=(state,payload)=>({
  [actionTypes.error]:{
    ...state,
    error:true,
    loading:false
  },
  [actionTypes.success]:{
    ...state,
      item:payload,
      loading:false,
      isSynchronizedItem:true
  },
  [actionTypes.save]:{
    ...state,
     item:payload
  },
  [actionTypes.synchronize]:{
    ...state,
      loading:true,
      isSynchronizedItem:false
  }
})
const reducer = (state, action) =>{
  return reducerObject(state, action.payload)[action.type] || state;
}


export { useLocalStorage }

// localStorage.removeItem("TODOS_V1")
// const defaultTodos=[
//   {text:"Ordenar la ropa", completed:false},
//   {text:"Pasear al perro", completed:false},
//   {text:"Ir a entrenar", completed:false},
//   {text:"Pagar tarjeta", completed:false},
// ]

// localStorage.setItem("TODOS_V1",JSON.stringify(defaultTodos))