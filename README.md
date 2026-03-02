# Al-Imam Ashim Scholars

This is a premier Islamic institution web application for Al-Imam Ashim, built with Next.js, ShadCN UI, and Tailwind CSS. The design is optimized for mobile-first usage with a native app-like experience.

## How to push to GitHub

To push this project to your repository, run the following commands in your terminal:

```bash
git init
git add .
git commit -m "Initial commit: Al-Imam Ashim Mobile-First Web App"
git branch -M main
git remote add origin https://github.com/githubnyabintang/ashimScholars.git
```

### Resolving "fetch first" error
If you see the error `[rejected] main -> main (fetch first)`, it means the remote repository has files you don't have locally. You can fix this by running:

```bash
# Option A: Merge remote changes into your local work
git pull origin main --rebase
git push -u origin main

# Option B: Overwrite the remote repository (Use only if the remote repo is empty/new)
git push -u origin main --force
```

## Features
- **Mobile-First UI**: Floating bottom navigation for a native app feel on mobile.
- **Centric Hero**: Modern, centered landing section for better visual focus.
- **Institutional Branding**: Colors matched to the Al-Imam Ashim logo (Deep Green, Lime, and Yellow).
- **AI Inquiry Assistant**: Integrated Genkit flow to help students draft effective inquiries.
- **High Readability**: White content cards with dark text for a professional look.
