import { useState, useEffect } from 'react'

function useStore(storeId) {
  const [store, setStore] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:8080/store/${storeId}`)
      .then(res => {
        return res.json()
      })
      .then(json => {
        setStore(json)
      })
  }, [])

  return store
}

export default useStore
