# X-Eat Food Delivery MVP - Design System

## Overview

X-Eat is a modern, premium food delivery app designed for simplicity and speed. The app follows Apple Human Interface Guidelines (HIG) and is optimized for mobile portrait orientation (9:16) with one-handed usage in mind.

---

## Color Palette

### Primary Colors
- **Orange (Primary)**: `#FF6B35` - Main action color, buttons, highlights
- **Dark Orange (Secondary)**: `#E55100` - Pressed states, darker accents
- **Black (Text/Dark)**: `#1A1A1A` - Primary text, dark mode background
- **White (Light)**: `#FFFFFF` - Light mode background, cards
- **Light Gray (Surface)**: `#F5F5F5` - Light mode surface, cards

### Semantic Colors
- **Success**: `#22C55E` - Order confirmed, positive states
- **Warning**: `#F59E0B` - Alerts, caution states
- **Error**: `#EF4444` - Errors, cancellations
- **Muted**: `#999999` - Secondary text, disabled states
- **Border**: `#E5E7EB` - Light mode borders, dividers
- **Border Dark**: `#334155` - Dark mode borders

### Dark Mode
- **Background**: `#0F0F0F` - Deep black
- **Surface**: `#1A1A1A` - Card backgrounds
- **Foreground**: `#FFFFFF` - Primary text
- **Muted**: `#B0B0B0` - Secondary text

---

## Typography

### Font Family
- **Primary**: System font (San Francisco on iOS, Roboto on Android)
- **Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto

### Type Scale
| Name | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| **Display** | 32px | Bold (700) | 40px | App title, hero sections |
| **Heading 1** | 28px | Bold (700) | 36px | Screen titles |
| **Heading 2** | 24px | Semibold (600) | 32px | Section headers |
| **Heading 3** | 20px | Semibold (600) | 28px | Card titles, subtitles |
| **Body Large** | 18px | Regular (400) | 26px | Primary body text |
| **Body** | 16px | Regular (400) | 24px | Standard body text |
| **Body Small** | 14px | Regular (400) | 20px | Secondary text, labels |
| **Caption** | 12px | Regular (400) | 16px | Hints, metadata |
| **Button** | 16px | Semibold (600) | 24px | Button text |

---

## Spacing & Layout

### Spacing Scale
- **xs**: 4px
- **sm**: 8px
- **md**: 12px
- **lg**: 16px
- **xl**: 24px
- **2xl**: 32px
- **3xl**: 48px

### Safe Area Insets
- **Top**: 16px (below status bar)
- **Bottom**: 16px (above tab bar)
- **Horizontal**: 16px (left/right margins)

---

## Component Design

### Buttons
- **Primary Button**: Orange background, white text, 48px height, rounded-full
  - Pressed: Dark orange, scale 0.97
  - Disabled: Gray background, opacity 0.5
- **Secondary Button**: White/surface background, orange text, 48px height, rounded-full
  - Border: 1.5px orange
- **Tertiary Button**: No background, orange text
  - Pressed: Opacity 0.7

### Cards
- **Restaurant Card**: Rounded-2xl (16px), shadow-sm, border-1 (light border)
  - Image: 100% width, 160px height, rounded-t-2xl
  - Content: 16px padding
  - Dark mode: surface background with lighter border
- **Menu Item Card**: Rounded-xl (12px), shadow-xs
  - Image: 80px × 80px, rounded-lg
  - Content: 12px padding

### Input Fields
- **Text Input**: Rounded-lg (8px), border-1, 44px height
  - Focus: Orange border, shadow-sm
  - Placeholder: Muted color
  - Padding: 12px horizontal, 10px vertical

### Bottom Sheet
- **Modal**: Rounded-t-3xl (24px), shadow-lg
  - Background: Surface color
  - Padding: 20px top, 16px sides, 24px bottom
  - Drag handle: 4px × 40px, gray, top-8px

---

## Screen List

### Authentication Flow
1. **Onboarding Screen** - App intro, sign up / login options
2. **Login Screen** - Email/password, Google sign-in, forgot password link
3. **Signup Screen** - Email, password, name, phone number
4. **Forgot Password Screen** - Email input, reset link sent confirmation
5. **OTP Verification Screen** - Email verification code input

### Main App Flow
6. **Home Screen** - Categories, popular restaurants, search, filter
7. **Restaurant Listing Screen** - Filtered restaurant list with search results
8. **Restaurant Details Screen** - Menu items, restaurant info, ratings
9. **Menu Item Details Screen** - Item image, description, price, quantity selector, add to cart
10. **Cart Screen** - Items list, quantity adjustment, delivery fee, total
11. **Checkout Screen** - Delivery address, payment method selection
12. **Payment Screen** - Flutterwave payment gateway or cash on delivery
13. **Order Confirmation Screen** - Order number, estimated delivery time
14. **Order Tracking Screen** - Real-time order status, delivery person info, map
15. **Profile Screen** - User info, order history, saved addresses, settings
16. **Order History Screen** - Past orders list, reorder option

### Admin Flow
17. **Admin Dashboard** - Overview, analytics, quick actions
18. **Restaurants Management** - List, add, edit, delete restaurants
19. **Menu Management** - Add/edit food items, categories, pricing
20. **Orders Management** - View orders, update status, analytics

---

## Key User Flows

### Flow 1: User Registration & Login
1. User opens app → Onboarding screen
2. User taps "Sign Up" → Signup screen
3. User enters email, password, name, phone
4. User receives verification email
5. User verifies email → Redirected to home screen
6. User is logged in and can browse restaurants

### Flow 2: Browse & Order Food
1. User on home screen → Sees categories and popular restaurants
2. User searches for restaurant or taps category
3. User views restaurant details → Sees menu items
4. User taps menu item → Views item details
5. User selects quantity, customizations → Taps "Add to Cart"
6. User continues shopping or goes to cart
7. User reviews cart → Taps "Checkout"
8. User enters delivery address → Selects payment method
9. User completes payment → Order confirmation
10. User can track order in real-time

### Flow 3: Track Order
1. User on home screen → Taps "Active Orders" or notification
2. User views order tracking screen
3. Order shows status: Preparing → Picked up → On the way → Delivered
4. User can see delivery person's location on map
5. User receives push notification when order is delivered

### Flow 4: Admin - Manage Restaurants
1. Admin logs in → Admin dashboard
2. Admin taps "Restaurants" → Sees list of restaurants
3. Admin taps restaurant → Can edit details, menu items, status
4. Admin adds new restaurant → Fills form, uploads image
5. Admin saves → Restaurant is live on the platform

### Flow 5: Admin - Manage Orders
1. Admin on dashboard → Taps "Orders"
2. Admin sees new orders in real-time
3. Admin taps order → Views order details, items
4. Admin updates status: Preparing → Picked up → On the way
5. Admin can assign delivery person (future feature)

---

## Navigation Structure

### Tab Bar (Main Navigation)
- **Home** (house icon) - Browse restaurants, search
- **Orders** (receipt icon) - Active and past orders
- **Profile** (person icon) - User account, settings

### Stack Navigation (within each tab)
- **Home Tab**: Home → Restaurant Details → Menu Item Details → Cart → Checkout
- **Orders Tab**: Orders List → Order Details → Order Tracking
- **Profile Tab**: Profile → Edit Profile → Addresses → Settings → Order History

### Modal Navigation
- **Cart** - Presented as bottom sheet from any screen
- **Payment** - Presented as modal from checkout
- **Filters** - Presented as bottom sheet from home

---

## Glassmorphism & Effects

### Soft Shadows
- **Shadow SM**: 0 1px 2px rgba(0,0,0,0.05)
- **Shadow MD**: 0 4px 6px rgba(0,0,0,0.1)
- **Shadow LG**: 0 10px 15px rgba(0,0,0,0.1)

### Rounded Corners
- **Rounded SM**: 6px - Small buttons, badges
- **Rounded MD**: 8px - Input fields, small cards
- **Rounded LG**: 12px - Menu item cards
- **Rounded XL**: 16px - Restaurant cards
- **Rounded 2XL**: 20px - Bottom sheets
- **Rounded Full**: 9999px - Pill buttons

### Glassmorphism Elements
- **Blur Overlay**: 10px blur, 0.3 opacity (for modals)
- **Frosted Glass Cards**: 8px blur, 0.8 opacity (for headers)
- **Gradient Overlays**: Linear gradient from transparent to black (for image overlays)

---

## Animations & Transitions

### Interaction Feedback
- **Button Press**: Scale 0.97, 80ms timing
- **Card Tap**: Opacity 0.7, 100ms timing
- **List Scroll**: Smooth momentum scroll

### Screen Transitions
- **Push**: Slide from right, 300ms
- **Pop**: Slide to right, 300ms
- **Modal**: Fade in from bottom, 250ms
- **Dismiss**: Fade out to bottom, 200ms

### Loading States
- **Skeleton Loader**: Pulse animation, 1.5s loop
- **Spinner**: Rotate animation, 1s loop
- **Progress Bar**: Linear animation, smooth

---

## Accessibility

### Color Contrast
- **Text on Background**: Minimum 4.5:1 ratio (WCAG AA)
- **Interactive Elements**: Minimum 3:1 ratio

### Touch Targets
- **Minimum Size**: 44px × 44px (iOS standard)
- **Spacing**: 8px minimum between touch targets

### Text Sizing
- **Minimum**: 12px (captions only)
- **Readable**: 16px+ for body text
- **Scalable**: Support dynamic type sizing

---

## Dark Mode Implementation

- All color tokens use CSS variables
- Automatic switching based on system preference
- Manual toggle in settings
- Smooth transition between modes (300ms)
- All images have dark-mode optimized versions

---

## Performance Considerations

- Lazy load restaurant images (use placeholder while loading)
- Virtualize long lists (FlatList for menu items, orders)
- Debounce search input (300ms)
- Cache restaurant data locally
- Optimize image sizes (compress, use WebP where possible)

---

## Branding

- **App Name**: X-Eat
- **Tagline**: "Fast. Fresh. Delivered."
- **Primary Color**: Orange (#FF6B35)
- **Logo Style**: Minimalist, modern, food-focused
- **Tone**: Friendly, premium, efficient

