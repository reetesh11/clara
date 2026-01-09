# Quick Start Guide

## 🚀 Running the Application Locally

### Step 1: Install Dependencies
```bash
npm install
# or
bun install
```

### Step 2: Create Environment File
Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_ENV=development
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open Browser
Navigate to: `http://localhost:8080`

---

## 📱 Making it Mobile-Ready

### Quick Option: PWA (15 minutes)
See `MOBILE_SETUP.md` - Section "Approach 2: Progressive Web App"

### Full Native: Capacitor (1-2 hours)
See `MOBILE_SETUP.md` - Section "Approach 1: Capacitor"

---

## 🔌 Connecting to Backend

### Step 1: Update API URL
Edit `.env`:
```env
VITE_API_BASE_URL=https://your-backend-url.com/api
```

### Step 2: Uncomment API Calls
In these files, uncomment the actual API calls:
- `src/lib/api/agents.ts`
- `src/lib/api/activity.ts`

Look for `// TODO: Uncomment when backend is ready` comments.

### Step 3: Test Endpoints
Verify your backend responds to:
- `GET /api/agents`
- `GET /api/circle/agents`
- `GET /api/activity/messages`

See `PROJECT_ANALYSIS.md` - Section 4 for complete API specification.

---

## 📚 Documentation Files

- **README.md** - Complete project documentation
- **PROJECT_ANALYSIS.md** - Detailed analysis and recommendations
- **MOBILE_SETUP.md** - Mobile development guide
- **ENV_SETUP.md** - Environment configuration
- **QUICK_START.md** - This file

---

## 🐛 Troubleshooting

### Port 8080 in use?
Edit `vite.config.ts` and change the port.

### Module not found errors?
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors?
These are usually false positives. The app should run fine. If not, check `tsconfig.json` paths configuration.

---

## ✅ What's Been Done

✅ API service layer created  
✅ React Query hooks implemented  
✅ Backend integration placeholders added  
✅ Environment configuration setup  
✅ Mobile responsiveness (web)  
✅ Comprehensive documentation  

## 🔜 Next Steps (Optional Improvements)

- [ ] Refactor pages to use API hooks (currently using mock data)
- [ ] Add error boundaries
- [ ] Implement authentication
- [ ] Add testing framework
- [ ] Add PWA support
- [ ] Integrate Capacitor for native apps

See `PROJECT_ANALYSIS.md` for detailed recommendations.
