# Environment Setup Guide

To run this project, you need to install **Node.js**. Since you are on Windows, the easiest way is using `winget` (Windows Package Manager) which is already installed on your system.

## Option 1: Install via Terminal (Recommended)

Run the following command in your terminal:

```powershell
winget install -e --id OpenJS.NodeJS
```

After the installation completes:
1.  **Close your current terminal window.**
2.  Open a new terminal window.
3.  Run `node -v` to verify the installation.
4.  Navigate back to your project folder:
    ```powershell
    cd "d:\files\portfolio-main (1)\portfolio-main"
    ```
5.  Install dependencies and run the project:
    ```powershell
    npm install
    npm run dev
    ```

## How to Update Content

The portfolio content is managed via JSON data files in `src/data/`.

- **Personal Information**: Edit `src/data/developer.ts` to update your name, title, contact info, and biography.
- **Projects**: Edit the `projects` array in `src/data/developer.ts` to add or modify projects. 
- **Certificates**: Edit `src/pages/Certificates.tsx` to update the certifications list.
- **Skills**: Update the `skills` array in `src/data/developer.ts`.

### Adding Images
- Place images in the `public/` folder for absolute paths (e.g., `/my-image.jpg`).
- For projects, ensure the `coverImage` path in `src/data/developer.ts` is correct.

## Deployment

To create a production build, run:
```powershell
npm run build
```
The output will be in the `dist/` folder, which can be deployed to services like Netlify, Vercel, or GitHub Pages.
