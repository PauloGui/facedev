import React, { useContext, createContext, useState, useEffect } from 'react'
import axios from 'axios'
import LoadingLandingPage from '../components/Shimmer/LoadingLandingPage'

const AuthContext = createContext()

function AuthProvider({ children }) {

  const [authUser, setAuthUser] = useState({ authenticated: false })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('@facedev_token')
    if (!token) return setLoading(false)

    axios.get('/sessions', { headers: { Authorization: `Bearer ${token}` } }).then(({ data }) => {
      if (data.success) setAuthUser({ authenticated: true, token })
      setLoading(false)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {
        loading &&
        <LoadingLandingPage />
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
  if (!context) throw new Error('useAuth must be used within an AuthProvider.')
  return context
}

export default AuthProvider