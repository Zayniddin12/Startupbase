import { service } from '~/composables/request'

export function signUpApi(data: Record<string, any>) {
  return service.post('/users', data)
}

export function googleSignUpApi(params: Record<string, any>) {
  return service.post('/auth/google/callback', null, { params })
}

export function currentUser() {
  return service.post('/auth/me')
}

export function storeApplications(data: Record<string, any>) {
  return service.post('/applications', data)
}

export function updateApplications(data: FormData, uuid: string) {
  return service.post(`/applications/${uuid}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export function getApplication() {
  return service.get('/applications')
}

export function getApplicationById(id: string | number) {
  return service.get(`/applications/${id}`)
}

export function logout() {
  return service.post('/auth/logout')
}

export function login(data: Record<string, any>) {
  return service.post('/auth/login', data)
}

export function userQuestions(data: Record<string, any>) {
  return service.post('/user-questions', data)
}

export function sendToReview(uuid: string) {
  return service.put(`/applications/send-to-review/${uuid}`)
}

export function changePassword(data: Record<string, any>) {
  return service.put('/change-password', data)
}
