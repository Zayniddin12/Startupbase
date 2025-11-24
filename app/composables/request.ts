// composables/requestService.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getToken, clearForLogout } from '@/utils/auth'
import { useErrorHandling } from './useErrorHandling'
import { useRouter } from '#imports'
const config = useRuntimeConfig()
export const service = axios.create({
  baseURL: config.public.apiBaseUrl,
  timeout: 30000,
})

// Request interceptor
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken()
    if (token) {
      config.headers = config.headers || {}
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error: any) => Promise.reject(error)
)

// Response interceptor
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // Agar API doim { success, data, message } formatida qaytarsa
    const res = response.data
    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res
  },
  (error: any) => {
    const router = useRouter()
    if (error.response) {
      const status = error.response.status
      useErrorHandling(error?.response)

      if (status === 401) {
        clearForLogout()
        router.push('/login')
      }
    }
    return Promise.reject(error.response?.data || error)
  }
)
