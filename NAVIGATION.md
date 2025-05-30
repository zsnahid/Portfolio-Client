# Portfolio Navigation System

## 🚀 Features Implemented

### **Core Navigation**

- **Collapsible Sidebar**: Toggle between expanded and collapsed states
- **React Router v6**: Modern routing with lazy loading for performance
- **Active State Indicators**: Visual highlighting of current page
- **Breadcrumb Navigation**: Context-aware breadcrumbs for better UX

### **Responsive Design**

- **Desktop Sidebar**: Full-featured sidebar for larger screens
- **Mobile Menu**: Hamburger menu with overlay for mobile devices
- **Breakpoint-aware**: Hidden/shown based on screen size (lg: 1024px)

### **Enhanced UX Features**

- **Theme Toggle**: Light/dark mode switcher in sidebar header
- **Scroll to Top**: Floating button that appears after scrolling
- **Loading States**: Suspense boundaries with custom loading spinner
- **Smooth Animations**: Transitions for hover states and interactions

### **Accessibility**

- **ARIA Labels**: Screen reader friendly navigation
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Proper focus handling for modals and menus
- **Color Contrast**: WCAG AA compliant color combinations

## 📁 File Structure

```
src/
├── components/
│   ├── Layout.tsx           # Main layout wrapper
│   ├── Sidebar.tsx          # Desktop sidebar component
│   ├── MobileMenu.tsx       # Mobile hamburger menu
│   ├── Breadcrumb.tsx       # Breadcrumb navigation
│   ├── LoadingSpinner.tsx   # Loading component for Suspense
│   ├── ScrollToTop.tsx      # Floating scroll-to-top button
│   └── ThemeToggle.tsx      # Dark/light mode toggle
├── pages/
│   ├── HomePage.tsx         # Landing page
│   ├── AboutPage.tsx        # About section
│   ├── ExperiencePage.tsx   # Work experience
│   ├── ProjectsPage.tsx     # Project showcase
│   ├── BlogPage.tsx         # Blog posts
│   └── ContactPage.tsx      # Contact form
├── hooks/
│   └── useActiveSection.ts  # Hook for scroll-based active sections
└── App.tsx                  # Router setup with lazy loading
```

## 🎨 Design System

### **Everforest Color Palette**

The navigation uses the complete Everforest theme:

- **Forest Deep** (`#232A2E`) - Primary background
- **Snow** (`#D3C6AA`) - Primary text
- **Spring** (`#83C092`) - Active states and accents
- **Mist** (`#A7C080`) - Secondary text
- **Pine Dark** (`#2D353B`) - Card backgrounds

### **Navigation States**

```tsx
// Active navigation item
"bg-spring text-forest-deep font-medium";

// Hover state
"text-mist hover:bg-forest-mid hover:text-snow";

// Collapsed sidebar
"justify-center"; // Centers icons when text is hidden
```

## 🔧 Usage

### **Adding New Routes**

1. Create a new page component in `/src/pages/`
2. Add lazy import in `App.tsx`
3. Add route to the Routes component
4. Update navigation items in `Sidebar.tsx` and `MobileMenu.tsx`

### **Customizing Navigation**

```tsx
const navigationItems = [
  { path: "/new-page", label: "New Page", icon: NewIcon },
  // Add your new navigation item
];
```

### **Theme Integration**

All components automatically use CSS variables from the Everforest theme:

```css
--color-forest-deep: #232a2e;
--color-spring: #83c092;
/* etc... */
```

## 📱 Responsive Behavior

- **Desktop (≥1024px)**: Full sidebar visible
- **Mobile (<1024px)**: Hamburger menu with overlay
- **Tablet**: Sidebar auto-collapses but remains visible

## ⚡ Performance

- **Lazy Loading**: All pages load on-demand
- **Code Splitting**: Automatic bundling by route
- **Suspense Boundaries**: Graceful loading states
- **Optimized Re-renders**: Proper memoization where needed

## 🚀 Getting Started

The navigation system is fully integrated and ready to use:

```bash
npm run dev
```

Navigate between pages using the sidebar or mobile menu. The system automatically handles:

- Route transitions
- Loading states
- Active page highlighting
- Responsive behavior
- Theme persistence

## 🎯 Next Steps

Consider adding:

- [ ] Search functionality
- [ ] Keyboard shortcuts (Cmd+K menu)
- [ ] Navigation history/recently visited
- [ ] Page transition animations
- [ ] PWA navigation features
