// contexts/auth.js

// import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface authContextType {
//   isAuthenticated?: boolean
//   login?: (token: string) => void
  isLoading?: boolean
  logout?: () => void
}
const AuthContext = createContext<authContextType>({
//   isAuthenticated: false,
//   login: (token: string) => {},
  logout: () => {},
  isLoading: false,
})

type Props = {
  children: ReactNode
}
export const AuthProvider = ({ children }: Props) => {
  const router = useRouter()
//   const [user, setUser] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function loadUserFromCookies() {
    //   const token = Cookies.get('token')
    //   if (token) {
    //     // TODO: GET a user form services
    //     // const user = await
    //     // if (user) setUser(user);
    //     setUser(true)
    //   }
      setLoading(false)
    }
    loadUserFromCookies()
  }, [])

  const login = async (token: string) => {
    // if (token) {
    //   console.log('Got token')
    //   Cookies.set('token', token, { expires: 60 })
    //   // TODO: Get a user from
    //   setUser(true)
    //   // console.log("Got user", user)
    // }
  }

  const logout = () => {
    // Cookies.remove('token')
    // setUser(false)
    router.push('/auth/login')
  }

  const value: authContextType = {
    // isAuthenticated: !!user,
    // login: login,
    isLoading: loading,
    logout: logout,
  }
//   return (
//     // TODO: pass user via props
//     // <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
//   )
}

export const useAuth = () => useContext(AuthContext)
