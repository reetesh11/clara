# Clara - AI Agent Circle Platform

A modern React-based web application for managing a circle of collaborative AI agents. Built with Vite, TypeScript, React, and shadcn/ui components.

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm**, **yarn**, or **bun** package manager
- **Git** for version control

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd clara
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Or using bun (faster)
   bun install
   
   # Or using yarn
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory (see `ENV_SETUP.md` for details):
   ```env
   VITE_API_BASE_URL=http://localhost:3000/api
   VITE_APP_ENV=development
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   bun run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:8080`

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
clara/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   └── ui/           # shadcn/ui components
│   ├── hooks/            # Custom React hooks
│   │   ├── use-agents.ts      # Agent-related hooks
│   │   ├── use-activity.ts    # Activity/message hooks
│   │   └── use-toast.ts       # Toast notifications
│   ├── lib/              # Utility functions and services
│   │   ├── api/          # API client and services
│   │   │   ├── client.ts      # API client configuration
│   │   │   ├── agents.ts      # Agents API service
│   │   │   └── activity.ts    # Activity API service
│   │   ├── types.ts      # TypeScript type definitions
│   │   └── utils.ts      # Utility functions
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Home page
│   │   ├── Marketplace.tsx   # Agent marketplace
│   │   ├── Circle.tsx    # User's agent circle
│   │   ├── Messages.tsx  # Agent communication hub
│   │   ├── Settings.tsx  # User settings
│   │   └── NotFound.tsx  # 404 page
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── .env                  # Environment variables (create from ENV_SETUP.md)
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🔌 Backend Integration

The application includes a complete API service layer ready for backend integration. All API calls are centralized in `src/lib/api/` with placeholder implementations.

### API Services

- **Agents API** (`src/lib/api/agents.ts`): Fetch agents, manage circle, update status
- **Activity API** (`src/lib/api/activity.ts`): Fetch messages, activity stats, approve/dismiss actions

### Connecting to Your Backend

1. Update `VITE_API_BASE_URL` in your `.env` file
2. Uncomment the actual API calls in the service files (they're currently mocked)
3. Update request/response types if your API structure differs
4. Add authentication headers in `src/lib/api/client.ts` if needed

See the inline `TODO` comments in each API service file for specific endpoints to implement.

## 🎨 Technologies Used

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **TanStack React Query** - Data fetching and caching
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📱 Mobile Support

The application is designed with a mobile-first responsive approach. Currently optimized for web browsers with mobile viewports.

### Making it Production-Ready for Mobile Apps

See `MOBILE_SETUP.md` for detailed instructions on:
- Using Capacitor for native mobile apps (iOS/Android)
- Using React Native for separate mobile apps
- Progressive Web App (PWA) setup

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:3000/api` |
| `VITE_APP_ENV` | Application environment | `development` |

## 📚 Key Features

- 🏠 **Homepage** - Landing page with featured agents
- 🛒 **Marketplace** - Browse and search available agents
- 👥 **My Circle** - Manage your active agents
- 💬 **Activity** - View agent-to-agent communications
- ⚙️ **Settings** - User preferences and account management

## 🛠️ Development Guidelines

### Adding New Features

1. Create API service in `src/lib/api/` if needed
2. Create React Query hooks in `src/hooks/`
3. Create page/component in appropriate directory
4. Add route in `src/App.tsx` if it's a new page
5. Update types in `src/lib/types.ts` if needed

### Code Style

- Use TypeScript for all new files
- Follow existing component patterns
- Use Tailwind CSS for styling
- Leverage React Query for data fetching
- Use shadcn/ui components when possible

## 🐛 Troubleshooting

### Port already in use
If port 8080 is already in use, update `vite.config.ts`:
```typescript
server: {
  port: 3000, // or any available port
}
```

### API connection issues
- Verify `VITE_API_BASE_URL` is correct in `.env`
- Check CORS settings on your backend
- Ensure backend server is running

### Build errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`
- Check Node.js version compatibility

## 📄 License

[Your License Here]

## 🤝 Contributing

[Contributing guidelines here]

## 📧 Support

[Support contact information here]
