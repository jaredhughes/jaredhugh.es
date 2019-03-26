import { createServer } from 'http'
import * as next from 'next'
import * as path from 'path'
import { parse } from 'url'
import { validateStaticPath } from './static_assets'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl

    // Next.js server-rendered routes:
    // if (pathname === '/path') app.render(req, res, '/path', query)

    const resolveStatic = validateStaticPath(
      path.join(__dirname, '../static', pathname),
    )

    if (!!resolveStatic) {
      app.serveStatic(req, res, resolveStatic)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
