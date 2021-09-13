import { useEffect, useState } from 'react'
import { AuthService } from './auth-service'

export function useAuthentication() {
  const [token, setToken] = useState('')
  const [isLoading, setLoading] = useState(false)

  async function tryConnect() {
    setLoading(true)
    const authService = new AuthService()
    const hasToken = authService.accessToken

    try {
      if (hasToken) {
        setToken(hasToken)
        return
      }

      const token = await authService.connect()
      setToken(token)
    } catch {
      throw new Error('Error: Not connected')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    tryConnect()
  }, [])

  return { token, isLoading }
}
