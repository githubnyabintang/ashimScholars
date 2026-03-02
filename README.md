# Al-Imam Ashim Scholars

This is a premier Islamic institution web application for Al-Imam Ashim, built with Next.js, ShadCN UI, and Tailwind CSS. The design is optimized for mobile-first usage with a native app-like experience.

## How to push to GitHub

If you've already initialized your project and added the remote, follow these steps to resolve common errors:

### 1. Fix "Remote origin already exists"
If you see this error, it means you've already connected your project to GitHub. You can skip the `remote add` step and go straight to pushing:

```bash
git add .
git commit -m "Update: App UI and Mobile Navigation"
git push origin main
```

### 2. Fix "fetch first" or "rejected" error
If GitHub tells you to "fetch first", it's because there are files on GitHub that you don't have locally. To overwrite the GitHub repository with your current local work (recommended for new projects), use the **force** flag:

```bash
# WARNING: This will replace everything on GitHub with your local code
git push origin main --force
```

### 3. If you haven't pushed yet
If your terminal says `Your branch is ahead of 'origin/main'`, simply run:
```bash
git push origin main
```

## Features
- **Mobile-First UI**: Floating bottom navigation for a native app feel on mobile.
- **Centric Hero**: Modern, centered landing section for better visual focus.
- **Institutional Branding**: Colors matched exactly to the Al-Imam Ashim logo (Deep Green, Lime, and Yellow).
- **AI Inquiry Assistant**: Integrated Genkit flow to help students draft effective inquiries.
- **High Readability**: Crisp white content cards with dark text for a professional look.
