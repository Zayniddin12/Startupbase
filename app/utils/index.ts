const timeouts: Record<string, any> = {}

const cTimeout = (key = 'key') => {
  if (timeouts[key]) {
    clearTimeout(timeouts[key])
    timeouts[key] = undefined
  }
}
export const debounce = (key = 'key', fn = () => {}, timeout = 500) => {
  const sTimeout = (key: string, fn: any, timeout: number) => {
    cTimeout(key)

    timeouts[key] = setTimeout(() => {
      try {
        fn()
      } catch (e) {}

      timeouts[key] = undefined
    }, timeout)
  }

  return sTimeout(key, fn, timeout)
}
export function formatNumber(num: number): string {
  if (num < 1000) {
    return num.toString()
  }

  const units = ['', 'K', 'M', 'B', 'T']
  const exponent = Math.floor(Math.log10(num) / 3)
  const unit = units[exponent] || 'T'

  const formatted = (num / Math.pow(1000, exponent)).toFixed(1)

  // Убираем `.0` для целых чисел
  return formatted.endsWith('.0')
    ? `${formatted.slice(0, -2)}${unit}`
    : `${formatted}${unit}`
}
