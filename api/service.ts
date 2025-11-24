import { service } from '~/composables/request'

export function searchService(params: Record<string, any>) {
  service.get('/search/', params)

  return new Promise(function (resolve, reject) {
    service('/search/', params)
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}
