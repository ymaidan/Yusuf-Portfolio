# Portfolio Setup & Customization Guide

## 🎉 What's New

I've added **two new sections** to your portfolio:

1. **Projects Section** - Showcases your development projects with descriptions, tech stack, and links
2. **Gallery Section** - Displays your certificates, achievements, and project photos with a beautiful lightbox

## 🚀 How to Run the Project

### Prerequisites
Install pnpm (package manager):
```bash
npm install -g pnpm
```

### Steps:

1. **Install dependencies:**
```bash
pnpm install
```

2. **Start development server:**
```bash
pnpm dev
```

3. **Open your browser** and go to `http://localhost:5173`

### Other Commands:
- **Build for production:** `pnpm build`
- **Preview production:** `pnpm preview`
- **Lint code:** `pnpm lint`

---

## 📝 Customization Guide

### 1. Projects Section

**File:** `src/sections/projects.section.tsx`

Edit the `projects` array (lines 4-56) to add/modify your projects:

```typescript
{
    title: 'Your Project Name',
    description: 'Brief description of what the project does',
    technologies: ['React', 'Node.js', 'MongoDB'], // Tech stack used
    github: 'https://github.com/yourusername/repo', // GitHub link
    demo: 'https://yourproject.com', // Live demo link (use '#' if no demo)
    color: 'rgb(97, 219, 251, 0.6)', // Glow color for the card
}
```

**Available Colors:**
- Blue: `rgb(97, 219, 251, 0.6)`
- Green: `rgb(0, 237, 100, 0.7)`
- Orange: `rgb(255, 153, 0, 0.6)`
- Purple: `rgb(125, 17, 248, 0.75)`
- Red: `rgb(230, 50, 42, 0.5)`
- Teal: `rgb(6, 182, 212, 0.7)`

---

### 2. Gallery Section

**File:** `src/sections/gallery.section.tsx`

Edit the `galleryItems` array (lines 4-59) to add/modify gallery items:

```typescript
{
    title: 'Certificate/Achievement Name',
    category: 'certification', // Options: 'certification', 'achievement', 'project'
    image: '/gallery/image-name.jpg', // Path to image in public/gallery
    description: 'Brief description',
    color: 'rgb(97, 219, 251, 0.6)', // Glow color
}
```

**Adding Images:**
1. Place your images in `public/gallery/` folder
2. Supported formats: JPG, PNG, WebP
3. Recommended size: 800x600px minimum
4. Keep file size under 2MB

**Image Names (as configured):**
- `aws-cert.jpg` - AWS Certificate
- `cisco-cert.jpg` - Cisco CCNA
- `huawei-comp.jpg` - Huawei Competition
- `seeds-future.jpg` - Seeds for the Future
- `ryla.jpg` - RYLA Certificate
- `uni-project.jpg` - University Project
- `first-aid.jpg` - First Aid Certificate
- `toastmasters.jpg` - Toastmasters

**Note:** If images are missing, placeholders will be shown automatically.

---

### 3. Personal Information

**File:** `src/sections/info.section.tsx`

Already updated with your info:
- Name: YUSUF-MAIDAN
- Title: Informatics Engineer
- GitHub: https://github.com/ymaidan
- LinkedIn: (update with your actual LinkedIn URL)
- Email: yousifmaidan62@gmail.com

---

### 4. About Me Section

**File:** `src/sections/about-me.section.tsx`

Already updated with your:
- Work Experience
- Certifications
- Education

You can further customize the `timeline` array starting at line 3.

---

### 5. Tech Stack

**File:** `src/sections/tech-stack.section.tsx`

Already updated with your technologies:
- Core Stack: Go, TypeScript, Python, React, C#, Rust, Next.js, Node.js
- Frameworks: Django, Tailwind, Bootstrap, Docker, AWS
- Databases: MSSQL Server, SQLite

---

## 🎨 Navigation

The portfolio now has **4 navigation buttons** on the hero section:

**Top (floating above name):**
- "About Me" (left) → Scrolls to About section
- "Projects" (left-center) → Scrolls to Projects section

**Bottom (floating below title):**
- "Tech" (right) → Scrolls to Tech Stack section
- "Gallery" (right-center) → Scrolls to Gallery section

---

## 📂 Project Structure

```
portfolio-latest/
├── public/
│   └── gallery/               # Place your images here
│       ├── aws-cert.jpg
│       ├── cisco-cert.jpg
│       └── ...
├── src/
│   ├── components/
│   │   ├── floating-button.tsx    # Navigation buttons
│   │   ├── glow-box.tsx           # Tech stack boxes
│   │   ├── glow-box-link.tsx      # Social media links
│   │   └── section-title.component.tsx
│   ├── sections/
│   │   ├── info.section.tsx       # Hero section (YOUR INFO)
│   │   ├── about-me.section.tsx   # About section (YOUR INFO)
│   │   ├── tech-stack.section.tsx # Tech stack (YOUR INFO)
│   │   ├── projects.section.tsx   # Projects (CUSTOMIZE THIS)
│   │   └── gallery.section.tsx    # Gallery (CUSTOMIZE THIS)
│   ├── styles/
│   │   ├── projects.css           # Project styles
│   │   ├── gallery.css            # Gallery styles
│   │   └── ...
│   └── App.tsx                    # Main app component
├── package.json
└── SETUP_GUIDE.md (this file)
```

---

## 🎯 Quick Customization Checklist

- [ ] Add your project images to `public/gallery/`
- [ ] Update project links in `projects.section.tsx`
- [ ] Add/remove projects as needed
- [ ] Update LinkedIn URL in `info.section.tsx`
- [ ] Add more gallery items if needed
- [ ] Test all navigation links
- [ ] Run `pnpm build` to create production build

---

## 🚢 Deployment

Once you're happy with your portfolio, you can deploy it to:

- **Vercel** (recommended for Vite projects)
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**

Just run `pnpm build` and deploy the `dist` folder.

---

## 💡 Tips

1. **Responsive Design:** The portfolio is fully responsive and looks great on mobile!
2. **Color Consistency:** Use colors from the existing palette for a cohesive look
3. **Performance:** Optimize images before uploading (use tools like TinyPNG)
4. **SEO:** Update the `index.html` file with your name and description
5. **Icons:** The project uses `react-icons` - you can add more from [react-icons.github.io](https://react-icons.github.io/)

---

## 🆘 Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Make sure all dependencies are installed (`pnpm install`)
3. Verify file paths are correct (especially for images)
4. Check that all imports are working

---

## 🎨 Design Features

- **Glow Effects:** All cards have beautiful glow animations
- **Smooth Scrolling:** Navigation buttons smoothly scroll to sections
- **Lightbox Gallery:** Click any gallery item to view it full-screen
- **Filtering:** Gallery has category filters (All, Certifications, Achievements, Projects)
- **Hover Effects:** Interactive hover states on all cards and links
- **Mouse Trail:** Cool mouse trail effect (from original design)
- **Dark Theme:** Modern dark theme throughout

Enjoy your new portfolio! 🚀

