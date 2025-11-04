# E-commerce Website Template

A modern, responsive e-commerce website template with iframe embedding support.

## Deployment

### Building the Release

The `/dist` folder contains a minimal, deployable version of the site. To regenerate it:

```bash
npm run release
```

This command:
1. Cleans the existing `/dist` directory
2. Copies all deployable files (HTML, CSS, JS, images, fonts) from the `1lang` template
3. Includes root-level files like `robots.txt`, `sitemap.xml`, and `404.html`

### GitHub Pages

GitHub Pages does **not support custom HTTP headers**, so iframe embedding is controlled via the CSP `frame-ancestors` meta tag in each HTML file's `<head>` section.

**Note:** If you need guaranteed iframe embedding with custom headers, consider:
- Moving the public site to **Netlify**, **Cloudflare Pages**, or **Vercel** (all support custom headers)
- Using Cloudflare in front of a custom domain to inject headers, then updating DNS (CNAME) accordingly

### Netlify / Cloudflare Pages

For Netlify or Cloudflare Pages, the `_headers` file at the repository root configures the `Content-Security-Policy` header with `frame-ancestors` to allow iframe embedding.

**Current allowed origins:**
- `https://your-portfolio.example`
- `https://*.your-company.com`

To update allowed origins:
1. Edit the `_headers` file at the repository root
2. Update the `Content-Security-Policy` header value
3. Also update the CSP meta tag in all HTML files (see below)

### Vercel

For Vercel deployments, the `vercel.json` file configures the headers.

**Current allowed origins:**
- `https://your-portfolio.example`
- `https://*.your-company.com`

To update allowed origins:
1. Edit `vercel.json` at the repository root
2. Update the `Content-Security-Policy` header value
3. Also update the CSP meta tag in all HTML files (see below)

### Updating Allowed Iframe Parents

To change which domains can embed your site in an iframe:

1. **For platforms with header support (Netlify/Cloudflare/Vercel):**
   - Edit `_headers` (Netlify/Cloudflare) or `vercel.json` (Vercel)
   - Update the `frame-ancestors` directive

2. **For all platforms (including GitHub Pages):**
   - The CSP meta tag must be updated in all HTML files
   - Find the meta tag: `<meta http-equiv="Content-Security-Policy" content="frame-ancestors ...">`
   - Update the `content` attribute with your allowed origins
   - Run the build script to regenerate `/dist` with updated files

Example CSP meta tag:
```html
<meta http-equiv="Content-Security-Policy" content="frame-ancestors 'self' https://your-portfolio.example https://*.your-company.com">
```

### File Structure

```
/
├── 1lang/              # Primary template directory
├── dist/               # Built/deployable files (generated)
├── tools/              # Build scripts
├── _headers            # Netlify/Cloudflare headers config
├── vercel.json         # Vercel headers config
├── robots.txt          # SEO protection
├── sitemap.xml         # Sitemap
└── package.json        # Build scripts
```

## Development

### Prerequisites

- Node.js 18+ (for build scripts)

### Build Scripts

- `npm run clean` - Removes the `/dist` directory
- `npm run release` - Cleans and rebuilds the `/dist` directory

## License

MIT

---

**© 2024 dacso.uk - Website Development**

