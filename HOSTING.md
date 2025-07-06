# 🌐 Hosting Guide for Alanso's Portfolio

This guide will help you deploy the portfolio website to GitHub Pages and other hosting platforms.

## 📋 Table of Contents

1. [GitHub Pages Hosting](#github-pages-hosting)
2. [Netlify Hosting](#netlify-hosting)
3. [Vercel Hosting](#vercel-hosting)
4. [Custom Domain Setup](#custom-domain-setup)
5. [Environment Configuration](#environment-configuration)
6. [Troubleshooting](#troubleshooting)

## 🚀 GitHub Pages Hosting

GitHub Pages is the recommended hosting solution for this portfolio as it's free and integrates seamlessly with your repository.

### Method 1: Automatic Deployment (Recommended)

1. **Fork or Clone the Repository**
   ```bash
   git clone https://github.com/alansomathew/portfolio.git
   cd portfolio
   ```

2. **Create a New Repository**
   - Go to GitHub and create a new repository
   - Name it `your-username.github.io` or any name you prefer
   - Push your code to this repository

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Configure Build Action**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
       - name: Checkout
         uses: actions/checkout@v3

       - name: Setup Node.js
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           cache: 'npm'

       - name: Install dependencies
         run: npm ci

       - name: Build
         run: npm run build

       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         if: github.ref == 'refs/heads/main'
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

5. **Update Base URL**
   Update `vite.config.ts`:
   ```typescript
   export default defineConfig(({ mode }) => ({
     base: '/your-repository-name/', // Add this line
     server: {
       host: "::",
       port: 8080,
     },
     // ... rest of config
   }));
   ```

### Method 2: Manual Deployment

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Create gh-pages Branch**
   ```bash
   git checkout -b gh-pages
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```

3. **Configure GitHub Pages**
   - Go to repository settings
   - Select "gh-pages" branch as source

## 🌟 Netlify Hosting

Netlify offers excellent performance and additional features like form handling.

### Steps:

1. **Connect Repository**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

3. **Environment Variables**
   Add any required environment variables in Netlify dashboard.

4. **Form Handling** (Optional)
   Update contact form in `src/components/Contact.tsx`:
   ```jsx
   <form name="contact" method="POST" data-netlify="true">
     <input type="hidden" name="form-name" value="contact" />
     {/* ... rest of form */}
   </form>
   ```

## ⚡ Vercel Hosting

Vercel provides excellent performance and easy deployment.

### Steps:

1. **Connect Repository**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository

2. **Build Configuration**
   Create `vercel.json`:
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "framework": "vite"
   }
   ```

3. **Deploy**
   - Vercel will automatically deploy on every push
   - Custom domains can be added in dashboard

## 🌐 Custom Domain Setup

### For GitHub Pages:

1. **Add CNAME File**
   Create `public/CNAME` with your domain:
   ```
   yourdomain.com
   ```

2. **DNS Configuration**
   Add these DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153

   Type: CNAME
   Name: www
   Value: your-username.github.io
   ```

### For Netlify/Vercel:

1. **Add Domain in Dashboard**
   - Go to domain settings
   - Add your custom domain

2. **Update DNS**
   - Point your domain to provided URLs
   - Wait for DNS propagation

## ⚙️ Environment Configuration

### Development Environment

Create `.env.local`:
```env
VITE_SITE_URL=http://localhost:8080
VITE_CONTACT_FORM_ENDPOINT=your_form_endpoint
```

### Production Environment

Set these variables in your hosting platform:
```env
VITE_SITE_URL=https://yourdomain.com
VITE_CONTACT_FORM_ENDPOINT=your_production_endpoint
VITE_ANALYTICS_ID=your_analytics_id
```

## 🔧 Build Optimization

### For Production Builds:

1. **Optimize Images**
   - Compress images before adding to `src/assets/`
   - Use WebP format when possible
   - Recommended tools: TinyPNG, Squoosh

2. **Bundle Analysis**
   ```bash
   npm run build -- --analyze
   ```

3. **Performance Monitoring**
   Add to `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
   ```

## 🐛 Troubleshooting

### Common Issues:

1. **404 Error on Refresh**
   - Add `_redirects` file to `public/`:
   ```
   /*    /index.html   200
   ```

2. **Images Not Loading**
   - Check image paths are correct
   - Ensure images are in `public/` or imported in `src/`

3. **Build Failures**
   - Check Node.js version (use v18+)
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall

4. **Routing Issues**
   - Update base URL in `vite.config.ts`
   - Check router configuration

### GitHub Pages Specific:

1. **Custom Domain Not Working**
   - Check CNAME file in repository
   - Verify DNS settings
   - Wait 24-48 hours for propagation

2. **Build Action Failing**
   - Check workflow file syntax
   - Verify repository permissions
   - Check build logs for errors

## 📊 Performance Tips

1. **Lighthouse Optimization**
   - Run Lighthouse audits
   - Optimize images and fonts
   - Minimize JavaScript bundles

2. **SEO Enhancement**
   - Add meta tags in `index.html`
   - Generate sitemap
   - Add robots.txt

3. **Caching Strategy**
   - Enable browser caching
   - Use CDN for static assets
   - Implement service worker (optional)

## 🆘 Support

If you encounter issues during deployment:

1. **Check Documentation**
   - GitHub Pages: [docs.github.com/pages](https://docs.github.com/pages)
   - Netlify: [docs.netlify.com](https://docs.netlify.com)
   - Vercel: [vercel.com/docs](https://vercel.com/docs)

2. **Community Support**
   - Stack Overflow
   - GitHub Discussions
   - Platform-specific communities

3. **Contact Developer**
   - Email: alansomathew10@gmail.com
   - GitHub: [@alansomathew](https://github.com/alansomathew)

---

✅ **Quick Checklist:**
- [ ] Repository is public (for GitHub Pages free tier)
- [ ] Build command works locally
- [ ] Images are optimized
- [ ] Environment variables are set
- [ ] Custom domain DNS is configured (if applicable)
- [ ] HTTPS is enabled
- [ ] Form handling is configured (if using contact form)

Happy hosting! 🚀