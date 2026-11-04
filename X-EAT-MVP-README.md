# X-Eat Food Delivery MVP

A modern, startup-ready food delivery mobile application built with React Native (Expo), featuring a clean UI, smooth animations, and a complete ordering experience.

## 🎯 Overview

X-Eat is a comprehensive food delivery platform MVP that includes:
- **Customer App**: Browse restaurants, order food, track deliveries
- **Admin Dashboard**: Manage restaurants, menu items, and orders
- **Modern Design**: Orange, black, and white color scheme with glassmorphism effects
- **Responsive UI**: Optimized for mobile portrait orientation (9:16)

## 📱 Features

### Customer Features

#### Authentication
- Email/password login and signup
- Google sign-in integration (ready)
- Forgot password functionality
- Onboarding screens with app introduction
- Persistent authentication with AsyncStorage

#### Home Screen
- Browse restaurants by category
- Search restaurants and cuisines
- Filter by food type (Pizza, Burgers, Sushi, etc.)
- Popular restaurants section with ratings
- Special offers banner
- Empty state handling

#### Restaurant & Menu
- Detailed restaurant information (rating, delivery time, fees)
- Menu items with images and descriptions
- Quantity selector for items
- Add to cart functionality
- Real-time cart management

#### Cart & Checkout
- View all cart items with prices
- Adjust quantities and remove items
- Delivery address input with validation
- Payment method selection (Card or Cash)
- Price breakdown (subtotal, tax, delivery fee)
- Order confirmation with order number

#### Order Tracking
- Real-time order status timeline
  - Preparing
  - Picked up
  - On the way
  - Delivered
- Estimated delivery time
- Delivery partner information and rating
- Call and chat with driver
- Order items summary

#### User Profile
- View account information
- Edit profile (navigation ready)
- Saved addresses management (navigation ready)
- Payment methods (navigation ready)
- Dark/light mode toggle
- Notifications preferences
- Help & support section
- Logout functionality

#### Orders Tab
- View active and past orders
- Order status with color-coded badges
- Quick access to track orders
- Order history

### Admin Features

#### Admin Dashboard
- Overview statistics
  - Total orders
  - Revenue
  - Active restaurants
  - Total users
- Quick access to management sections
- Recent activity feed

#### Restaurant Management
- View all restaurants
- Search restaurants
- Edit restaurant details
- Delete restaurants
- View restaurant menu items

#### Order Management
- View all orders
- Filter orders by status
- Search orders by ID or customer name
- View order details
- Update order status

## 🛠️ Tech Stack

### Frontend
- **React Native 0.81** with Expo SDK 54
- **TypeScript** for type safety
- **NativeWind** (Tailwind CSS for React Native)
- **Expo Router** for navigation
- **React Query** for server state management
- **React Native Reanimated** for smooth animations
- **Expo Blur** for glassmorphism effects

### State Management
- **React Context API** for auth, restaurants, and cart
- **AsyncStorage** for local persistence
- **MMKV** (optional) for performance

### Design System
- **Color Palette**: Orange (#FF6B35), Black, White
- **Typography**: System fonts with custom sizing
- **Components**: Reusable Button, Card, Input, SearchBar, etc.
- **Dark/Light Mode**: Full theme support

## 📁 Project Structure

```
x-eat/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx           # Home screen
│   │   ├── orders.tsx          # Orders tab
│   │   ├── profile.tsx         # Profile tab
│   │   └── _layout.tsx         # Tab navigation
│   ├── admin/
│   │   ├── index.tsx           # Admin dashboard
│   │   ├── restaurants.tsx     # Restaurant management
│   │   └── orders.tsx          # Order management
│   ├── restaurant/
│   │   └── [id].tsx            # Restaurant details
│   ├── cart.tsx                # Shopping cart
│   ├── checkout.tsx            # Checkout screen
│   ├── order-confirmation.tsx  # Order confirmation
│   ├── order-tracking.tsx      # Order tracking
│   ├── login.tsx               # Login screen
│   ├── signup.tsx              # Signup screen
│   ├── forgot-password.tsx     # Forgot password
│   ├── onboarding.tsx          # Onboarding
│   ├── _layout.tsx             # Root layout
│   └── oauth/
│       └── callback.tsx        # OAuth callback
├── components/
│   ├── ui/
│   │   ├── button.tsx          # Button component
│   │   ├── card.tsx            # Card component
│   │   ├── text-input.tsx      # Text input component
│   │   ├── search-bar.tsx      # Search bar
│   │   ├── glass-card.tsx      # Glassmorphism card
│   │   └── icon-symbol.tsx     # Icon mapping
│   ├── restaurant-card.tsx     # Restaurant card
│   ├── category-chip.tsx       # Category filter chip
│   ├── screen-container.tsx    # SafeArea wrapper
│   └── haptic-tab.tsx          # Haptic feedback tab
├── lib/
│   ├── auth-context.tsx        # Auth state management
│   ├── restaurant-context.tsx  # Restaurant data management
│   ├── cart-context.tsx        # Cart state management
│   ├── types.ts                # TypeScript types
│   ├── mock-data.ts            # Mock restaurants and menu items
│   └── utils.ts                # Utility functions
├── hooks/
│   ├── use-auth.ts             # Auth hook
│   ├── use-colors.ts           # Theme colors hook
│   ├── use-color-scheme.ts     # Dark/light mode hook
│   └── use-animations.ts       # Animation hooks
├── assets/
│   └── images/
│       ├── icon.png            # App icon
│       ├── splash-icon.png     # Splash screen
│       ├── favicon.png         # Web favicon
│       └── android-icon-*.png  # Android icons
├── theme.config.js             # Theme configuration
├── tailwind.config.js          # Tailwind configuration
├── app.config.ts               # Expo configuration
└── package.json                # Dependencies
```

## 🎨 Design System

### Colors
- **Primary**: #FF6B35 (Orange)
- **Background**: #FFFFFF (Light) / #151718 (Dark)
- **Surface**: #F5F5F5 (Light) / #1E2022 (Dark)
- **Foreground**: #11181C (Light) / #ECEDEE (Dark)
- **Muted**: #687076 (Light) / #9BA1A6 (Dark)
- **Success**: #22C55E
- **Warning**: #F59E0B
- **Error**: #EF4444

### Typography
- **Headings**: Bold, 24-32px
- **Subheadings**: Semibold, 16-20px
- **Body**: Regular, 14-16px
- **Caption**: Regular, 12-14px

### Components
- **Button**: Primary, secondary, tertiary variants with press feedback
- **Card**: Default, elevated, outlined variants
- **Input**: Text input with labels, error states, and focus feedback
- **SearchBar**: Search input with clear button
- **CategoryChip**: Interactive filter chips

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm
- Expo CLI

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run on iOS
pnpm ios

# Run on Android
pnpm android

# Run on web
pnpm web
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration
EXPO_PUBLIC_API_URL=http://localhost:3000

# Auth Configuration
EXPO_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id

# Payment Configuration
EXPO_PUBLIC_FLUTTERWAVE_PUBLIC_KEY=your_flutterwave_key
```

## 📊 Mock Data

The app comes with mock data for development:
- **5 Restaurants**: Pizza Paradise, Burger Bliss, Sushi Supreme, Noodle House, Taco Fiesta
- **2-3 Menu Items per Restaurant**: With images, descriptions, and prices
- **Mock Orders**: For testing order tracking and history

## 🔄 State Management

### Auth Context
- User authentication state
- Login/logout functionality
- User profile information
- Persistent authentication

### Restaurant Context
- Restaurant list and search
- Category filtering
- Restaurant details
- Menu items management

### Cart Context
- Add/remove items
- Update quantities
- Calculate totals (subtotal, tax, delivery fee)
- Clear cart

## 🎬 Animations & Interactions

- **Press Feedback**: Scale 0.97 + opacity change on button press
- **Haptic Feedback**: Light impact on primary actions
- **Smooth Transitions**: 200-300ms animations for navigation
- **Glassmorphism**: Blur effects on premium cards
- **Soft Shadows**: Depth and elevation effects

## 📝 TODO & Future Enhancements

### Phase 9: Backend Integration
- [ ] Set up Node.js/Express backend
- [ ] Create database schema
- [ ] Implement authentication API
- [ ] Create restaurant API endpoints
- [ ] Create order API endpoints
- [ ] Integrate Flutterwave payments

### Phase 10: Advanced Features
- [ ] Real-time driver tracking (Google Maps)
- [ ] Push notifications
- [ ] AI food recommendations
- [ ] Referral system
- [ ] Loyalty rewards
- [ ] In-app chat support

### Phase 11: Polish & Optimization
- [ ] Performance optimization
- [ ] Skeleton loaders
- [ ] Error handling and retry logic
- [ ] Image optimization
- [ ] Caching strategies

### Phase 12: Testing & Deployment
- [ ] Unit tests
- [ ] Integration tests
- [ ] E2E testing
- [ ] App store submission
- [ ] Analytics integration

## 🧪 Testing

Run tests with:

```bash
pnpm test
```

## 📦 Building for Production

### Android APK
```bash
eas build --platform android
```

### iOS IPA
```bash
eas build --platform ios
```

### Web
```bash
pnpm build
```

## 🤝 Contributing

This is an MVP project. For production use, consider:
- Adding comprehensive error handling
- Implementing proper authentication with backend
- Setting up database for persistent data
- Integrating real payment gateway
- Adding analytics and monitoring

## 📄 License

This project is part of the X-Eat food delivery platform MVP.

## 🎯 Next Steps

1. **Backend Development**: Set up Node.js/Express API
2. **Database Setup**: Create PostgreSQL/MongoDB schema
3. **Payment Integration**: Integrate Flutterwave payment gateway
4. **Real-time Features**: Add WebSocket for live order tracking
5. **Testing**: Write comprehensive test suite
6. **Deployment**: Deploy to app stores and cloud platform

## 📞 Support

For issues or questions, please refer to the admin dashboard or contact support through the app.

---

**Built with ❤️ using React Native & Expo**
