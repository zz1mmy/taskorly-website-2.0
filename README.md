# Taskorly Website

A modern, responsive website for Taskorly - an intelligent task management and collaboration platform built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Performance**: Optimized for speed with Next.js 15
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Inter (Google Fonts)
- **Icons**: SVG icons and emojis

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd taskorly-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Site footer
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Features.tsx   # Features showcase
│   │   └── Pricing.tsx    # Pricing plans
│   └── ui/                # Reusable UI components
```

## 🎨 Design System

### Colors

- **Primary**: Blue color palette for CTAs and highlights
- **Secondary**: Gray color palette for text and backgrounds

### Typography

- **Font Family**: Inter
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400)

### Components

- **Buttons**: Primary and secondary variants with hover states
- **Cards**: Rounded corners with subtle shadows
- **Layout**: Container with responsive padding

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

Build the project:
```bash
npm run build
```

The `out` directory contains the static files ready for deployment.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎯 Customization

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/app/page.tsx`
3. Update navigation links in `Header.tsx` if needed

### Styling

- Modify `tailwind.config.ts` for design tokens
- Update `globals.css` for global styles
- Use Tailwind utility classes for component styling

### Content

- Update text content in component files
- Replace placeholder images in the `public/` directory
- Modify metadata in `layout.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and type checking
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support, please contact the Taskorly team.

---

Built with ❤️ by the Taskorly team