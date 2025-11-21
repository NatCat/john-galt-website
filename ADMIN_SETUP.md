# Admin Panel Authentication Setup

The admin panel is password-protected. **Credentials are never stored in the code** - they must be set via environment variables to keep them secure in public repositories.

## 🔒 Security: Keeping Credentials Private

✅ **`.env` file is already in `.gitignore`** - your credentials will never be committed to git.

## Local Development Setup

1. Create a `.env` file in the project root:
```bash
ADMIN_USERNAME=your-username
ADMIN_PASSWORD=your-secure-password
```

2. The `.env` file is automatically ignored by git, so your credentials stay private.

3. Start your dev server:
```bash
npm run dev
```

## GitHub Pages Deployment Setup

For production deployment on GitHub Pages, use GitHub Secrets:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add two secrets:
   - `ADMIN_USERNAME` = your admin username
   - `ADMIN_PASSWORD` = your admin password

The GitHub Actions workflow will automatically use these secrets during the build process.

⚠️ **Important:** Never commit credentials to the repository. Always use environment variables or GitHub Secrets.

## Accessing the Admin Panel

1. Visit `/admin-login/` to log in
2. Enter your username and password
3. You'll be redirected to `/admin/` after successful login
4. Your session will remain active for 8 hours

## Accessing the Admin Panel

1. Visit `/admin-login/` to log in
2. Enter your username and password (from `.env` or GitHub Secrets)
3. You'll be redirected to `/admin/` after successful login
4. Your session will remain active for 8 hours

## Security Notes

- ✅ Credentials are stored in environment variables, not in code
- ✅ `.env` file is in `.gitignore` - never committed to git
- ✅ GitHub Secrets are used for production builds
- ⚠️ This is a basic client-side authentication system
- ⚠️ For high-security applications, consider server-side authentication
- ⚠️ The password is hashed using a simple hash function (not cryptographically secure)

## Troubleshooting

**"ADMIN_USERNAME and ADMIN_PASSWORD must be set" warning:**
- Make sure you have a `.env` file in the project root
- Check that the `.env` file contains both `ADMIN_USERNAME` and `ADMIN_PASSWORD`
- For GitHub Pages, ensure GitHub Secrets are configured

