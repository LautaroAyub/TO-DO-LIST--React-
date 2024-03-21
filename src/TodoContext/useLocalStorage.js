
import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  let parsedItem;

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
        setLoading(false)

      }
      catch (error) {
        setLoading(false)
        setError(true);

      }
    }, 2000)
  }, []
  )
  console.log(item, "items")


  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item,
    saveItem,
    loading,
    error
  }

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