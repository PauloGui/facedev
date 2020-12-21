import React, {useContext, createContext, useState, useEffect} from 'react'
import api from '../services/api'

const AuthContext = createContext()

function AuthProvider({children}) {
  const [authUser, setAuthUser] = useState({ authenticated: false})
  const [loading, setLoadgin] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('@facedev_token')
    if (!token) return setLoadgin(false)

    api.get('/sessions', {headers: {Authorization: `Beares ${token}`}}).then(({ data }) => {
      if(data.success) setAuthUser({ authenticated: true, token})
      setLoadgin(false)
    })
  }, [])
  return(
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {
        loading &&
        'Carregando...'
      }
      {
        !loading &&
        children
      }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if(!context) throw new Error('useAuth must be used within an AuthProvider.')
  return context
}

export default AuthProvider