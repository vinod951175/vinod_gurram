# Vinod Gurram - Cybersecurity Portfolio

A modern, responsive portfolio website showcasing my professional experience in cloud security, SOC operations, and threat detection. Built with Next.js 14, React, TypeScript, and Tailwind CSS, optimized for deployment on Vercel.

## Features

- **Modern Design**: Dark theme with professional color scheme optimized for cybersecurity professionals
- **Responsive Layout**: Fully responsive design that works on all devices (mobile, tablet, desktop)
- **Fast Performance**: Next.js App Router with optimized images and code splitting
- **SEO Optimized**: Metadata configuration and semantic HTML for search engine visibility
- **Accessibility**: WCAG compliant with proper contrast ratios and keyboard navigation
- **Mobile First**: Progressive enhancement from mobile to desktop

## Pages

### 1. **Home** (`/`)
   - Engaging landing page with hero section
   - Quick stats and key metrics
   - Call-to-action buttons to projects and contact
   - Overview of expertise areas

### 2. **About** (`/about`)
   - Professional story and career journey
   - Key areas of expertise
   - Certifications and recognition
   - Focus on cybersecurity specialization

### 3. **Experience** (`/experience`)
   - Detailed work history with impact metrics
   - Current and past roles at DreamlineAI, Montclair State University, and CKoinect
   - Key achievements with quantifiable results
   - Timeline visualization

### 4. **Projects** (`/projects`)
   - Showcase of major security projects
   - AWS Cloud Security Monitoring Dashboard
   - IoT DDoS Mitigation with ML
   - Secure File Sharing Application
   - Labs and continuous learning initiatives (HTB, CTF, blogging)

### 5. **Skills** (`/skills`)
   - Comprehensive tech stack organized by category
   - Security Operations & SIEM
   - Cloud Security (AWS)
   - Container & DevOps Security
   - Programming languages and ML frameworks
   - Proficiency levels: Expert, Advanced, Intermediate

### 6. **Education** (`/education`)
   - Masters in Cybersecurity (Montclair State University) - 3.8/4.0 GPA
   - Bachelors in Computer Science (Malla Reddy College) - 3.1/4.0 GPA
   - Relevant coursework and specializations
   - Certifications (Security+, AI Security Professional)

### 7. **Contact** (`/contact`)
   - Contact form with validation
   - Direct contact information
   - Links to LinkedIn, GitHub, Medium, and Hack The Box
   - Location and availability

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: React 18
- **Deployment**: Vercel
- **Icons**: Unicode emoji
- **Fonts**: Google Fonts (Inter)

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone the repository** (or navigate to the project directory)
   ```bash
   cd d:\portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Visit `http://localhost:3000`

### Development

#### Build for Production
```bash
npm run build
npm start
```

#### Run Linting
```bash
npm run lint
```

#### Development Features
- Hot reload on file changes
- TypeScript compilation checking
- ESLint validation
- Tailwind CSS JIT mode

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout with Navbar and Footer
│   ├── globals.css   # Global Tailwind styles
│   ├── page.tsx      # Home page
│   ├── about/page.tsx           # About page
│   ├── experience/page.tsx       # Experience page
│   ├── projects/page.tsx         # Projects showcase
│   ├── skills/page.tsx           # Skills page
│   ├── education/page.tsx        # Education page
│   └── contact/page.tsx          # Contact page
├── components/       # Reusable React components
│   ├── Navbar.tsx    # Navigation bar
│   ├── Footer.tsx    # Footer component
│   ├── Section.tsx   # Section wrapper
│   ├── ProjectCard.tsx # Project card component
│   └── SkillTag.tsx  # Skill tag component
└── public/          # Static assets

tailwind.config.ts   # Tailwind CSS configuration
tsconfig.json        # TypeScript configuration
next.config.js       # Next.js configuration
package.json         # Dependencies and scripts
```

## Customization

### Colors
Edit the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#1a1a2e',      // Main background
  secondary: '#16213e',    // Secondary background
  accent: '#0f3460',       // Accent color
  highlight: '#e94560',    // Primary highlight
}
```

### Fonts
Update fonts in `src/app/layout.tsx` using [Google Fonts](https://fonts.google.com/)

### Content
All content is in the page files (`src/app/*/page.tsx`) and components. Edit them directly to update information.

## Deployment

### Deploy to Vercel (Recommended)

Vercel is the recommended hosting platform for Next.js applications.

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to link your project and deploy

#### Alternative: Git-based deployment
1. Push code to GitHub
2. Connect repository to Vercel
3. Automatic deployments on git push

### Environment Variables
No environment variables required for basic deployment. If adding backend features later, add them to Vercel project settings.

## Performance Optimization

- **Image Optimization**: Next.js Image component ready
- **Code Splitting**: Automatic per-route code splitting
- **Caching**: Optimized caching strategies
- **SEO**: Built-in meta tags and structured data
- **Fast Refresh**: Instant feedback during development

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Analytics & Tracking

The site is ready for:
- Google Analytics
- Vercel Analytics
- Custom event tracking

To add analytics, install and configure your preferred service.

## Security

- No sensitive data in repository
- HTTPS enforced on Vercel
- No external dependencies for core functionality
- Content Security Policy ready

## License

This portfolio is personal and proprietary. © 2026 Vinod Gurram.

## Support & Feedback

For questions about the site or improvements:
- Email: gurramvinod9898@gmail.com
- LinkedIn: https://www.linkedin.com/in/vinod-gurram-575227247/

---

**Last Updated**: April 2026  
**Status**: Production Ready
