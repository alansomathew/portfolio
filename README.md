# Alanso Mathew - Personal Portfolio

A modern, responsive personal portfolio website showcasing my work as a Full-Stack Developer and Software Engineer. Built with React, TypeScript, and Tailwind CSS for optimal performance and user experience.

## 🌟 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Color Customization**: Choose from multiple color themes to personalize the experience
- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Components**: Smooth scrolling navigation and hover effects
- **Contact Form**: Functional contact form with form validation
- **Project Showcase**: Detailed project gallery with screenshots and descriptions
- **Performance Optimized**: Fast loading with optimized images and code splitting

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL]

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Shadcn/ui components
- **Icons**: Lucide React
- **Routing**: React Router
- **Animations**: CSS transitions and transforms
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📱 Sections

1. **Hero Section**: Introduction with professional photo and quick contact info
2. **About**: Career objective, education, and technical skills
3. **Experience**: Professional work history with detailed achievements
4. **Projects**: Featured projects with screenshots, tech stacks, and impact metrics
5. **Contact**: Interactive contact form and social media links

## 🎨 Customization Features

- **Theme Toggle**: Switch between light and dark modes
- **Color Themes**: Choose from 6 different color schemes:
  - Blue (Default)
  - Purple
  - Green
  - Orange
  - Red
  - Teal

## 📋 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/ui components
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Work experience
│   ├── Projects.tsx     # Projects showcase
│   ├── Contact.tsx      # Contact form
│   ├── Navigation.tsx   # Navigation bar
│   ├── Footer.tsx       # Footer component
│   ├── ThemeProvider.tsx # Theme context
│   ├── ThemeToggle.tsx  # Theme switcher
│   └── ColorCustomizer.tsx # Color theme selector
├── assets/              # Images and static files
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── styles/              # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alansomathew/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🌐 Hosting on GitHub Pages

This portfolio is configured for easy deployment to GitHub Pages.

### Automatic Deployment

1. Fork or clone this repository
2. Go to your repository settings
3. Navigate to Pages section
4. Select source as "GitHub Actions"
5. The site will automatically deploy on every push to main branch

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## 📝 Customization Guide

### Adding Your Information

1. **Personal Details**: Update `src/components/Hero.tsx` with your information
2. **About Section**: Modify `src/components/About.tsx` with your skills and background
3. **Experience**: Update `src/components/Experience.tsx` with your work history
4. **Projects**: Replace project data in `src/components/Projects.tsx`
5. **Contact**: Update contact information in `src/components/Contact.tsx`

### Adding Your Photos

1. Replace `src/assets/alanso-profile.jpg` with your professional photo
2. Add project screenshots to `src/assets/` directory
3. Update image imports in respective components

### Customizing Colors

The portfolio uses a CSS custom properties system for theming:

1. **Design System**: All colors are defined in `src/index.css`
2. **Tailwind Config**: Extended in `tailwind.config.ts`
3. **Color Themes**: Modify `src/components/ColorCustomizer.tsx` to add new themes

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component to `src/pages/Index.tsx`
3. Update navigation in `src/components/Navigation.tsx`

## 📧 Contact Form Setup

The contact form is currently set up with a demo implementation. To make it functional:

1. **Formspree**: Add your Formspree endpoint
2. **Netlify Forms**: Enable Netlify form handling
3. **EmailJS**: Integrate EmailJS for client-side email sending
4. **Custom Backend**: Connect to your own backend API

## 🔧 Environment Variables

Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_CONTACT_FORM_ENDPOINT=your_form_endpoint_here
VITE_ANALYTICS_ID=your_analytics_id_here
```

## 📈 Performance Optimization

- **Images**: Optimized and compressed images
- **Code Splitting**: Lazy loading for better performance
- **CSS**: Purged unused styles in production
- **Bundle Size**: Minimized JavaScript bundles

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for the amazing component library
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) for the powerful frontend framework

## 📞 Support

If you have any questions or need help with customization, feel free to reach out:

- **Email**: alansomathew10@gmail.com
- **LinkedIn**: [linkedin.com/in/alansomathew](https://linkedin.com/in/alansomathew)
- **GitHub**: [github.com/alansomathew](https://github.com/alansomathew)

---

Made with ❤️ by Alanso Mathew