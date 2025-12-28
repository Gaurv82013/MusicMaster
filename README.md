# 🎵 MusicMaster - Music Learning Platform

A modern, responsive music learning platform built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Features beautiful animations powered by Motion (Framer Motion) and a comprehensive course catalog.

<img width="951" height="439" alt="Screenshot 2025-12-04 070739" src="https://github.com/user-attachments/assets/d6270358-c554-4573-96c6-a52cb19bf9aa" />

<img width="949" height="437" alt="Screenshot 2025-12-04 070808" src="https://github.com/user-attachments/assets/68455256-5a2c-4ad4-a09d-26757716f808" />

<img width="960" height="439" alt="Screenshot 2025-12-04 071452" src="https://github.com/user-attachments/assets/a13ac8f9-1b7f-4e34-b987-dca32e393d35" />


<img width="948" height="441" alt="Screenshot 2025-12-04 070836" src="https://github.com/user-attachments/assets/f64ecda1-0aba-4cbe-ac04-dcd509baa411" />

<img width="960" height="438" alt="Screenshot 2025-12-04 071514" src="https://github.com/user-attachments/assets/27111261-1f45-4d26-a383-f536e069112e" />


<img width="948" height="437" alt="Screenshot 2025-12-04 070913" src="https://github.com/user-attachments/assets/c97e0b1a-07f3-455e-880c-79e29c325a93" />

<img width="960" height="437" alt="Screenshot 2025-12-04 070941" src="https://github.com/user-attachments/assets/1fca630f-18b3-43f9-b542-cc57c317fdcb" />

<img width="959" height="439" alt="Screenshot 2025-12-04 071008" src="https://github.com/user-attachments/assets/e63eb34c-0e8e-4a91-9554-1151a7479b01" />

<img width="960" height="440" alt="Screenshot 2025-12-04 071045" src="https://github.com/user-attachments/assets/0e482782-7bfb-4bc0-b00a-5c9c1cf49d4e" />




## ✨ Features

- 🎨 Modern UI with Tailwind CSS 4
- ⚡ Built with Next.js 16 App Router
- 🎭 Smooth animations with Motion/Framer Motion
- 📱 Fully responsive design
- ♿ Accessibility compliant
- 🎯 TypeScript for type safety
- 🚀 Optimized for performance
- 🎓 Course catalog with filtering
- 💬 Testimonials section
- 📅 Featured webinars
- 👨‍🏫 Instructor profiles

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 📋 Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd musicnextjs
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration values.

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
musicnextjs/
├── app/                    # Next.js App Router pages
│   ├── contact/           # Contact page
│   ├── courses/           # Courses listing page
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── ui/               # UI components (animations, etc.)
│   ├── FeatureSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Instractors.tsx
│   ├── Navbar.tsx
│   ├── TestimonialCards.tsx
│   ├── UpComingWebinar.tsx
│   └── WhyChoosesUs.tsx
├── data/                  # JSON data files
│   ├── featureData.json
│   └── FeaturedWebinarData.json
├── types/                 # TypeScript type definitions
│   └── index.ts
├── lib/                   # Utility functions
│   └── utils.ts
├── public/                # Static assets
└── package.json
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

### Deploy on Other Platforms

The application can be deployed on any platform that supports Node.js:

- **Netlify**: Use the Netlify CLI or connect your Git repository
- **AWS**: Use AWS Amplify or deploy to EC2/ECS
- **DigitalOcean**: Use App Platform
- **Railway**: Connect your GitHub repository

### Build Configuration

Make sure to set environment variables in your deployment platform:
- Copy values from `.env.example`
- Set `NODE_ENV=production`

## 🎨 Customization

### Colors & Theme

Edit `app/globals.css` and Tailwind classes throughout components to customize the color scheme.

### Content

- **Courses**: Edit `data/featureData.json`
- **Webinars**: Edit `data/FeaturedWebinarData.json`
- **Instructors**: Update the `people` array in `components/Instractors.tsx`
- **Testimonials**: Update the `testimonials` array in `components/TestimonialCards.tsx`

## 🔧 Technologies Used

- **Framework**: Next.js 16
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (Framer Motion) 12.x
- **Icons**: Lucide React
- **UI Components**: Custom components with Aceternity UI patterns
- **Fonts**: Geist Sans & Geist Mono

## ✅ Code Quality

- TypeScript strict mode enabled
- ESLint configured with Next.js rules
- Accessibility compliant components
- Optimized images with next/image
- SEO-friendly metadata

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, reach out via the contact form on the website.
