# Portfolio Website - Akshat Chaurasia

A modern, responsive portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. Features a dark theme, smooth animations, and a professional layout.

##  Features

- **Modern Design**: Dark theme with minimal professional layout
- **Smooth Animations**: Framer Motion powered animations throughout
- **Fully Responsive**: Works seamlessly on all devices
- **SEO Optimized**: Built-in SEO metadata and optimization
- **Fast Performance**: Next.js 14 with App Router for optimal performance
- **Smooth Scrolling**: Native smooth scroll behavior between sections

##  Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

##  Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

##  Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

##  Build for Production

To create an optimized production build:

```bash
npm run build
npm start
```

##  Customization

### Update Personal Information

Edit the following files to update your information:

- **Hero Section**: `components/Hero.tsx` - Update name, role, and tagline
- **About Section**: `components/About.tsx` - Update bio and education details
- **Projects**: `components/Projects.tsx` - Update project details and GitHub links
- **Skills**: `components/Skills.tsx` - Update skill categories
- **Certifications**: `components/Certifications.tsx` - Update certifications
- **Contact**: `components/Contact.tsx` - Update contact information
- **Metadata**: `app/layout.tsx` - Update SEO metadata

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component-specific styles are inline with Tailwind classes

##  Sections

1. **Hero**: Introduction with animated tech icons orbit
2. **About**: Personal bio and education
3. **Projects**: Project cards with tech stacks and GitHub links
4. **Skills**: Skills organized by categories
5. **Certifications**: List of certifications
6. **Contact**: Contact information and social links

##  Project Structure

```
Website/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

##  License

This project is open source and available under the MIT License.

##  Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using Next.js and Tailwind CSS
