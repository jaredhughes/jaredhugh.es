import { existsSync } from 'fs'
import * as path from 'path'

const ALLOWED_STATIC_EXT = [
  '.ico',
  '.png',
  '.jpg',
  '.gif',
  '.webmanifest',
  '.txt',
  '.xml',
]

export const validateStaticPath = (pathname: string): false | string => {
  const ext = path.extname(pathname)
  const exists = existsSync(pathname)

  if (ALLOWED_STATIC_EXT.includes(ext) && exists) {
    return pathname
  } else {
    return false
  }
}
