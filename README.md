# NEXTJS15-REACT19-TYPESCRIPT-PRISMAORM-POSTGRESQL-CLERKAUTH-BloggingApplication

Welcome to the NEXTJS project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

This project is a full-stack, modern blogging platform built using the latest technologies in the web development ecosystem:

- **Next.js 15** (App Router and Server Components)
- **React 19** (Concurrent features and Suspense)
- **TypeScript** (Strictly typed for safety and scalability)
- **Prisma ORM** (for type-safe database interactions)
- **PostgreSQL** (as the primary relational database)
- **Clerk Authentication** (for secure and seamless user management)

The application enables users to register, log in, and manage content in a personalized dashboard. Authenticated users can create, edit, and view blog posts with support for rich metadata, user profiles, and dynamic UI behavior.

With modular components, server-side rendering, and a responsive design, this project serves as a solid foundation for building production-ready blogging platforms, SaaS dashboards, or content management systems.


## Features

### Authentication & Authorization
- Seamless sign-up, login, and session management using **Clerk**.
- Role-based access control to protect restricted pages and actions.

### Article Management
- Create, edit, delete, and view blog posts.
- Articles include metadata such as title, description, image, category, and timestamps.
- Real-time validation and user feedback on form submissions.

### Search & Pagination
- Full-text search to filter articles by keywords.
- Paginated results to improve performance and user experience.

### Navigation & Layout
- Dynamic and responsive layout with separate dashboards and public pages.
- Sidebar navigation for quick access to dashboard sections.
- Suspense and skeleton loaders for better UX during data fetching.

### Theming & Design
- Dark mode and light mode toggle using `next-themes`.
- Modern UI components built with Tailwind CSS and custom utilities.

### Secure Data Access
- Secure server-side data fetching with Prisma and Clerk-authenticated sessions.
- User-specific data operations with validation to prevent unauthorized actions.

### Tech-Driven Best Practices
- Code-splitting and lazy loading via React 19 and Next.js 15.
- Strict typing with TypeScript and automatic database types via Prisma.
- Clean folder structure and modular components for scalability.



## Live Demo

- You can try out the live demo of the blogging app [here](https://nextjs-15-react-19-typescript-prismaorm-postgresql-uv2fpcb5e.vercel.app/).

## 📁 Folder Structure

```
.
├── app/                         # Next.js 15 app directory
│   ├── (dashboard)/             # Grouped routes for dashboard
│   │   ├── layout.tsx           # Dashboard layout with sidebar
│   │   └── page.tsx             # Dashboard home
│   ├── articles/                # Routes for article-related pages
│   │   ├── [id]/edit/page.tsx   # Edit article page
│   │   ├── [id]/page.tsx        # Article detail page
│   │   ├── create/page.tsx      # Create new article
│   │   ├── loading.tsx          # Skeleton for article loading
│   │   └── page.tsx             # Article listing with search/pagination
│   ├── middleware.ts            # Clerk middleware for route protection
│   └── layout.tsx               # Root layout (theme, ClerkProvider, fonts)
│
├── components/                  # Reusable React components
│   ├── articles/                # Components related to articles
│   │   ├── all-article-page.tsx
│   │   ├── article-detail-page.tsx
│   │   ├── create-articles-page.tsx
│   │   └── edit-article-page.tsx
│   ├── dashboard/               # Dashboard UI components
│   │   ├── blog-dashboard.tsx
│   │   └── left-sidebar.tsx
│   ├── home/                    # Home page sections
│   │   ├── blog-footer.tsx
│   │   ├── header/
│   │   │   └── navbar.tsx
│   │   ├── hero-section.tsx
│   │   └── top-articles.tsx
│   └── ui/                      # UI primitives (buttons, cards, etc.)
│       ├── button.tsx
│       ├── card.tsx
│       └── skeleton.tsx
│
├── lib/                         # Utility functions and server-side logic
│   ├── prisma.ts                # Prisma client instance
│   └── query/                   # Custom query functions
│       └── fetch-article-by-query.ts
│
├── public/                      # Static assets
│
├── styles/
│   └── globals.css              # Global styles and Tailwind config
│
├── prisma/
│   └── schema.prisma            # Prisma schema file
│
├── .env                         # Environment variables
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── next.config.js               # Next.js configuration
```


## Screenshots

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-PRISMAORM-POSTGRESQL-CLERKAUTH-BloggingApplication/blob/main/Screenshots/ss1.png?raw=true" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-PRISMAORM-POSTGRESQL-CLERKAUTH-BloggingApplication/blob/main/Screenshots/ss2.png?raw=true" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-PRISMAORM-POSTGRESQL-CLERKAUTH-BloggingApplication/blob/main/Screenshots/ss3.png?raw=true" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-PRISMAORM-POSTGRESQL-CLERKAUTH-BloggingApplication/blob/main/Screenshots/ss4.png?raw=true" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-PRISMAORM-POSTGRESQL-CLERKAUTH-BloggingApplication/blob/main/Screenshots/ss5.png?raw=true" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-PRISMAORM-POSTGRESQL-CLERKAUTH-BloggingApplication/blob/main/Screenshots/ss6.png?raw=true" alt="Screenshot 1" width="1000"> 




## GIF's

<img src="https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-PRISMAORM-POSTGRESQL-CLERKAUTH-BloggingApplication/blob/main/Screenshots/ss7.gif?raw=true" alt="Screenshot 1" width="1000"> 



## 🛠️ Technologies Used

This project is built using a modern web development stack, ensuring scalability, performance, and developer productivity.

- [Next.js 15](https://nextjs.org/) – The React framework for production with App Router support.
- [React 19](https://react.dev/) – A JavaScript library for building user interfaces, with the latest features.
- [TypeScript](https://www.typescriptlang.org/) – Static typing for safer and more maintainable code.
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development.
- [Prisma ORM](https://www.prisma.io/) – Type-safe ORM for working with databases.
- [PostgreSQL](https://www.postgresql.org/) – Powerful, open source relational database.
- [NeonDB](https://neon.tech/) – Serverless PostgreSQL platform used as the primary database backend.
- [Clerk Auth](https://clerk.com/) – Authentication and user management system for modern apps.
- [ShadCN UI](https://ui.shadcn.com/) – Beautifully designed, accessible UI components built with Tailwind CSS.
- [Vercel](https://vercel.com/) – Hosting platform optimized for Next.js apps.

This tech stack ensures your blogging application is fast, secure, and highly maintainable.



## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-PRISMAORM-POSTGRESQL-CLERKAUTH-BloggingApplication.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   

3. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## How to Use

This blogging application provides a seamless and intuitive user experience for both readers and content creators. Below are the primary features and how to use them:

### Authentication
- Sign up or log in using **Clerk Auth**.
- Securely manage your session across pages.
- User details like name, email, and profile picture are stored in the database upon first login.

### Home Page
- Displays a **Hero Section** and featured articles.
- View top articles and navigate to full article listings.
- Includes navigation and footer for easy access to other sections.

### Article Search
- Use the search bar on the **Articles** page to find articles by title or content.
- Implements pagination for smooth browsing through search results.

### Article Listing & Details
- Browse all available articles.
- Click on an article to view its full details, including content, author info, and publish date.

### Create Article
- Authenticated users can navigate to the **Create Article** page.
- Add title, content, category, and optionally upload a cover image.
- On submission, the article is stored in the PostgreSQL database via Prisma.

### Edit Article
- Authors can edit their own articles.
- Fetches article data by ID and pre-fills the form.
- Update and save changes back to the database.

### Dashboard
- Personalized user dashboard showing authored articles.
- Access links to create or edit content.
- Visual loading states enhance UX during data fetches.

### Theme Support
- Supports **light and dark themes** using `next-themes`.
- Theme auto-switches based on system preferences or user toggle.

### Responsive Design
- Fully responsive layout built with **Tailwind CSS**.
- Optimized for mobile, tablet, and desktop experiences.






## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.



## 🙌 Credits

This project uses the following open-source technologies:

- [Next.js](https://nextjs.org/): A React framework for server-side rendering and static site generation.
  
- [TypeScript](https://www.typescriptlang.org/): A strongly typed superset of JavaScript that compiles to plain JavaScript.

- [React](https://reactjs.org/): A JavaScript library for building interactive user interfaces.

- [Shadcn UI](https://ui.shadcn.dev/): Beautifully designed UI components built with Radix UI and Tailwind CSS.

- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.

- [Lucide Icons](https://lucide.dev/): An open-source icon library used for UI icons.

- [next-themes](https://github.com/pacocoursey/next-themes): Theme switching support for dark/light mode in Next.js apps.

- [Prisma](https://www.prisma.io/): A next-generation ORM for Node.js and TypeScript.

- [PostgreSQL](https://www.postgresql.org/): A powerful, open-source relational database system used in this project for storing data.

- [Clerk](https://clerk.dev/): Full-stack authentication and user management for Next.js apps.

- [Vercel](https://vercel.com/): Deployment platform for frontend applications, especially well-suited for Next.js.

## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com



