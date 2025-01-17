export const storage = {
  local: {
    get(key) {
      try {
        return JSON.parse(localStorage.getItem(key))
      } catch {
        return localStorage.getItem(key)
      }
    },
    set(key, value) {
      if (typeof value === 'object') {
        localStorage.setItem(key, JSON.stringify(value))
      } else {
        localStorage.setItem(key, value)
      }
    },
    remove(key) {
      localStorage.removeItem(key)
    },
    clear() {
      localStorage.clear()
    },
  },
  session: {
    get(key) {
      try {
        return JSON.parse(sessionStorage.getItem(key))
      } catch {
        return sessionStorage.getItem(key)
      }
    },
    set(key, value) {
      if (typeof value === 'object') {
        sessionStorage.setItem(key, JSON.stringify(value))
      } else {
        sessionStorage.setItem(key, value)
      }
    },
    remove(key) {
      sessionStorage.removeItem(key)
    },
    clear() {
      sessionStorage.clear()
    },
  },
  cookie: {
    get(name) {
      if (typeof name !== 'string') {
        throw new TypeError('Cookie name must be a string')
      }
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${encodeURIComponent(name)}=`)
      if (parts.length === 2) {
        try {
          return JSON.parse(decodeURIComponent(parts.pop().split(';').shift()))
        } catch {
          return decodeURIComponent(parts.pop().split(';').shift())
        }
      }
      return null
    },
    set(name, value, options = {}) {
      if (typeof name !== 'string') {
        throw new TypeError('Cookie name must be a string')
      }

      const {
        days = 7,
        path = '/',
        domain = '',
        secure = false,
        httpOnly = false,
        sameSite = 'Lax',
      } = options

      // Validate sameSite value
      if (!['Strict', 'Lax', 'None'].includes(sameSite)) {
        throw new Error('sameSite must be "Strict", "Lax", or "None"')
      }

      // Check cookie size
      const val = typeof value === 'object' ? JSON.stringify(value) : String(value)
      const encodedValue = encodeURIComponent(val)
      if (encodedValue.length > 4096) {
        throw new Error('Cookie value exceeds 4KB limit')
      }

      let cookie = `${encodeURIComponent(name)}=${encodedValue}`

      // Add expiration
      if (days) {
        const date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        cookie += `; expires=${date.toUTCString()}`
      }

      // Add additional options
      if (path) cookie += `; path=${path}`
      if (domain) cookie += `; domain=${domain}`
      if (secure) cookie += '; Secure'
      if (httpOnly) cookie += '; HttpOnly'
      if (sameSite) cookie += `; SameSite=${sameSite}`

      document.cookie = cookie
    },
    remove(name, options = {}) {
      this.set(name, '', {
        ...options,
        days: -1,
      })
    },
  },
}
