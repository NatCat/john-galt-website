# John Galt Website

A modern website for John Galt Industrial Solutions built with Astro and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Netlify CMS (Decap CMS) Admin Panel

### Accessing the Admin Panel

**Local Development:**
1. Start your dev server: `npm run dev`
2. Visit: ``

**Production (Netlify):**
1. Deploy your site to Netlify
2. Enable Netlify Identity in site settings
3. Enable Git Gateway under Identity settings
4. Visit: `https://your-site.netlify.app/admin/`

### Setting Up Netlify CMS for Production

1. **Push your code to Git** (GitHub, GitLab, or Bitbucket)

2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

3. **Enable Netlify Identity:**
   - Go to Site settings → Identity
   - Click "Enable Identity"
   - Under "Registration preferences", select "Invite only" (recommended)

4. **Enable Git Gateway:**
   - In Identity settings, scroll to "Services"
   - Click "Enable Git Gateway"
   - This allows the CMS to commit to your Git repository

5. **Invite Users:**
   - Go to Identity → Invite users
   - Send invites to content editors
   - Users will receive email invitations to set up accounts

### Content Collections

The CMS is configured to manage:
- **Posts**: Blog posts and articles (`src/content/posts/`)
- **Pages**: Static pages (`src/content/pages/`)

### Local Development with Netlify Dev

For full CMS functionality locally, install Netlify CLI:

```bash
npm install -g netlify-cli
netlify dev
```

This will start the dev server with Git Gateway proxy enabled.

## 🎨 Features

- ✅ Responsive design
- ✅ Multi-language support (EN, RU, DE)
- ✅ Smooth scrolling navigation
- ✅ Modern UI with Tailwind CSS v4
- ✅ Netlify CMS integration
- ✅ Content collections (Posts & Pages)
- ✅ SEO optimized

## 📁 Project Structure

```
/
├── public/
│   ├── admin/          # Netlify CMS admin panel
│   └── images/         # Static images
├── src/
│   ├── components/     # Astro components
│   ├── content/        # Content collections (posts, pages)
│   ├── pages/          # Site pages
│   └── styles/         # Global styles
└── package.json
```

## 👀 Want to learn more?

- [Astro Documentation](https://docs.astro.build)
- [Netlify CMS Documentation](https://www.netlifycms.org/docs/intro/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
