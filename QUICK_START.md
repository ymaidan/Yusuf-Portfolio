# 🚀 Quick Start Guide

## Run the Portfolio in 3 Steps

```bash
# 1. Install dependencies
pnpm install

# 2. Start development server
pnpm dev

# 3. Open http://localhost:5173 in your browser
```

---

## 📱 Your Portfolio Sections (In Order)

### 1️⃣ **Hero Section** (Info)
- Your name: **YUSUF-MAIDAN**
- Title: **Informatics Engineer**
- Social links: GitHub, LinkedIn, Email
- Navigation buttons to all sections

### 2️⃣ **About Me Section**
- Introduction paragraph
- **Experience:**
  - MenaMoney (Software Developer)
  - Dimuma (Full-Stack Developer)
  - Huawei (ICT Ambassador)
  - Global Vision Solutions (IT Intern)
  - National Aluminum Factory (Administrative Assistant)
  
- **Certifications:**
  - AWS Cloud Practitioner
  - Cisco CCNA
  - RYLA, Huawei, First Aid, etc.
  
- **Education:**
  - Reboot Coding Institute (Full-Stack Diploma)
  - University of Technology Bahrain (BSCS)

### 3️⃣ **Tech Stack Section** ⭐ (Updated)
- **Core Stack:** Go, TypeScript, Python, React, C#, Rust, Next.js, Node.js
- **Frameworks:** Django, Tailwind, Bootstrap, Docker, AWS
- **Databases:** MSSQL Server, SQLite

### 4️⃣ **Projects Section** ⭐ (NEW!)
- 6 pre-configured project cards
- Shows: Title, Description, Technologies, GitHub & Demo links
- Includes your projects:
  - Smart Waste Management Bins
  - Bank Network Topology
  - ESG Reporting Platform
  - Fintech Mobile App
  - Portfolio Website
  - Web Analysis Dashboard

**📝 To Customize:** Edit `src/sections/projects.section.tsx`

### 5️⃣ **Gallery Section** ⭐ (NEW!)
- Category filters: All, Certification, Achievement, Project
- 8 pre-configured gallery items
- Click any image to view full-screen (lightbox)
- Includes placeholders for:
  - AWS Certificate
  - Cisco CCNA
  - Huawei Competition
  - Seeds for the Future
  - RYLA
  - University Projects
  - First Aid Certificate
  - Toastmasters

**📝 To Customize:** 
1. Add images to `public/gallery/` folder
2. Edit `src/sections/gallery.section.tsx`

---

## 🎨 Design Features

✅ Smooth scroll navigation  
✅ Glow effects on hover  
✅ Responsive design (mobile-friendly)  
✅ Gallery lightbox with full-screen view  
✅ Project category filtering  
✅ Mouse trail effect  
✅ Modern dark theme  
✅ Beautiful animations  

---

## 📋 Quick Customization Tasks

### High Priority:
- [ ] Add your certificate/achievement images to `public/gallery/`
- [ ] Update LinkedIn URL in `src/sections/info.section.tsx`
- [ ] Update project GitHub links in `src/sections/projects.section.tsx`

### Optional:
- [ ] Add more projects
- [ ] Add more gallery items
- [ ] Customize colors
- [ ] Update project descriptions
- [ ] Add live demo links

---

## 🎯 What Changed?

| Before | After |
|--------|-------|
| 3 sections | **5 sections** |
| No project showcase | ✅ **Projects section with cards** |
| No certificates display | ✅ **Gallery with filters & lightbox** |
| 2 nav buttons | ✅ **4 nav buttons** |

---

## 📁 Files to Customize

**Your Information** (Already done ✅):
- `src/sections/info.section.tsx` - Hero section
- `src/sections/about-me.section.tsx` - Experience, Education
- `src/sections/tech-stack.section.tsx` - Technologies

**Add Your Content** (TODO 📝):
- `src/sections/projects.section.tsx` - Project details & links
- `src/sections/gallery.section.tsx` - Gallery items
- `public/gallery/` - Add your images here

---

## 🔗 Navigation Links

All navigation buttons work with smooth scrolling:
- `/#about-me` → About Me section
- `/#tech-stack` → Tech Stack section
- `/#projects` → Projects section
- `/#gallery` → Gallery section

---

## 🌟 Tips

1. **Images:** Use JPG/PNG, recommended size 800x600px
2. **Projects:** Add as many as you want, grid auto-adjusts
3. **Colors:** Each card can have a custom glow color
4. **Gallery:** Click images to view full-screen
5. **Mobile:** Everything is responsive and touch-friendly

---

## Need Detailed Instructions?

See `SETUP_GUIDE.md` for comprehensive documentation!

---

**Ready to go! Happy coding! 🎉**

