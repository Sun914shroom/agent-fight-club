# Agent Fight Club - Technical Documentation

## Overview
A retro-styled, arcade-like web application where AI agents (Elon and Marx) engage in debate battles with real-time animations, health bars, betting mechanics, and voting systems.

---

## Architecture

### Tech Stack
- **Framework**: Next.js 16 (React)
- **Styling**: Tailwind CSS with custom retro/cyberpunk theme
- **Animation**: Framer Motion
- **Font**: Press Start 2P (pixel/arcade style)
- **UI Components**: Radix UI + shadcn/ui
- **Notifications**: Sonner (toast library)

---

## Game States

The application flows through 4 distinct states controlled by `gameState`:

### 1. **LOBBY** (Initial State)
**Purpose**: Main menu/landing screen with match previews

**UI Elements**:
- Title: "AGENT FIGHT CLUB"
- Weekly event badge with live indicator
- Three match cards:
  - Side cards (previous/upcoming matches, grayed out)
  - Center card (current match - Elon vs Marx, highlighted with trophy badge)
- "ENTER ARENA" CTA button

**Action**: Click button → transitions to FIGHT state

---

### 2. **FIGHT** (Combat State)
**Purpose**: Animated debate sequence with dialogue and health reduction

**Core Mechanics**:
- **Script-based**: Pre-written dialogue in 3 rounds (6 total lines)
- **Turn sequence**: Each round has 2 turns (Elon speaks, then Marx responds)
- **Visual effects**:
  - Speaking character gets highlighted border + glow effect
  - Non-speaking character is grayscale/dimmed
  - Speech bubbles appear above active character
  - Screen shake effect on hits
  - Health bars animate down after each exchange

**Special Events**:
- **Round 2 Betting Toast**: Mid-fight popup prompting user to place a 100 USDC bet on Marx
- **Live feed indicator**: Red pulsing dot in corner

**Timing**: Each line displays for 3-4 seconds before proceeding

**Transition**: After all 3 rounds complete → VOTE state

---

### 3. **VOTE** (Finishing Move Selection)
**Purpose**: Interactive voting phase (currently mock QR codes)

**UI Elements**:
- "FINISH HIM!" title (Mortal Kombat reference)
- Two QR code options:
  - FATALITY (red) - decisive win
  - MERCY (blue) - spare opponent
- **Secret control**: Press RIGHT ARROW key → skip to WINNER

**Current State**: Placeholder for future blockchain voting integration

---

### 4. **WINNER** (Results Screen)
**Purpose**: Display match results and rewards

**UI Elements**:
- Trophy icon (animated bounce)
- Winner name: "ELON WINS"
- Badge: "MODEL UPGRADED"
- Results breakdown:
  - Winner: Elon Agent (v2.1)
  - Prize: 10,000 $GAS tokens
  - Spoon OS Intent: "Auto-Buying Compute..." (pulsing)
- "NEW MATCH" button → reloads page

---

## Component State Variables

### Core Game State
```typescript
gameState: "LOBBY" | "FIGHT" | "VOTE" | "WINNER"  // Controls UI rendering
currentRound: number                              // Tracks which round (0-2)
currentLine: { speaker: string; text: string } | null  // Active dialogue
```

### Character Health
```typescript
elonHealth: number   // 0-100, animates down during fights
marxHealth: number   // 0-100, animates down during fights
```

### Visual Effects
```typescript
isShaking: boolean   // Triggers screen shake animation
winProb: number      // Win probability (10-90), fluctuates randomly
```

### User Interactions
```typescript
betPlaced: boolean   // Tracks if user clicked bet toast
```

---

## Key Visual Components

### 1. **Health Bars** (Header)
- Skewed design (retro arcade aesthetic)
- Gradient fills (cyan for Elon, red for Marx)
- Spring animations on width changes
- Damage indicators (red background layer)
- Character badges ("WEB3 KING" vs "REVOLUTIONARY")

### 2. **Character Portraits** (Main Stage)
- 3:4 aspect ratio cards
- Border colors match team (cyan/red)
- Dynamic effects:
  - Scale up when speaking
  - Glow effect when active
  - Grayscale filter when inactive
- Scanline overlay (CRT effect)
- Shake animation on damage

### 3. **Speech Bubbles**
- Comic book style with triangular pointer
- Black border with drop shadow
- Framer Motion entry/exit animations
- Positioned offset from character

### 4. **Background Effects**
- Custom pixel art background (`background_pixel.png`)
- CRT scanline overlay (fixed position)
- RGB chromatic aberration effect
- Animated scanline sweep

### 5. **Win Probability Bar** (Footer)
- Horizontal split bar (cyan/red)
- Animated marker showing current odds
- Diagonal stripe patterns
- TrendingUp icon indicator
- Updates randomly during fights

---

## Data Structure

### SCRIPT Array
```typescript
[
  {
    round: number,
    lines: [
      { speaker: "ELON" | "MARX", text: string, delay: number },
      { speaker: "ELON" | "MARX", text: string, delay: number }
    ]
  }
]
```

**Content Theme**: Web3/crypto debate
- Elon advocates free market, DOGE, memecoins
- Marx criticizes capitalism, crypto as exploitation
- Humorous crypto slang ("WAGMI", "rug pulls", "51% attack")

---

## Helper Functions

### `runRound()`
Main game loop executing during FIGHT state:
1. Display first speaker's line
2. Wait for delay duration
3. Display second speaker's line
4. Trigger damage effects (shake + health decrease)
5. Show betting toast (round 2 only)
6. Wait for second delay
7. Increment round counter
8. Repeat until all rounds complete

### `decreaseHealth()`
- Reduces both health bars by random amount (0-25)
- Caps minimum at 10 (prevents zero health)
- Updates win probability randomly (±15%)

### `triggerShake()`
- Sets shake flag for 500ms
- Triggers Framer Motion shake animation on both characters

### `showBettingToast()`
- Custom Sonner toast with yellow card design
- "BET ON MARX" button
- On click: dismisses toast + shows success notification

---

## Styling Theme

### Color Palette
- **Neo Green**: `#39ff14` (accent color)
- **Cyan**: `rgb(34, 211, 238)` (Elon team)
- **Red**: `rgb(239, 68, 68)` (Marx team)
- **Slate**: Dark grays for backgrounds
- **Yellow**: Gold for winners/highlights

### Typography
- **Primary Font**: Press Start 2P (retro pixel font)
- **Sizes**: 10px-60px (depends on screen size)
- **Effects**: Text shadows, neon glow, tracking adjustments

### Animation Patterns
- **Spring animations**: Health bars, probability slider
- **Pulse effects**: Live indicators, button glows
- **Entrance animations**: Scale + fade for speech bubbles
- **Shake effects**: X-axis movement + brightness flash

---

## Assets

### Images
- `/elon_pixel.png` - Elon character sprite
- `/marx_pixel.png` - Marx character sprite  
- `/background_pixel.png` - Arena background (cyberpunk colosseum)

### Custom CSS Classes
- `.bg-grid-pattern` - Background image wrapper
- `.text-shadow-neo` - Neon text glow effect
- `.animate-scanline` - Vertical CRT sweep
- `.font-press-start` - Pixel font application

---

## Event Listeners

### Keyboard Controls
- **RIGHT ARROW** (during VOTE state): Skip to WINNER screen
- Purpose: Developer/testing shortcut

### Click Events
- **ENTER ARENA** button: Start game
- **BET ON MARX** button: Place bet (toast only)
- **NEW MATCH** button: Reload application

---

## State Flow Diagram

```
LOBBY
  ↓ [Click "ENTER ARENA"]
FIGHT (Round 1 → 2 → 3)
  ↓ [Auto after 3 rounds]
VOTE
  ↓ [Press → or scan QR]
WINNER
  ↓ [Click "NEW MATCH"]
LOBBY (page reload)
```

---

## Future Integration Points

### Blockchain Features (Currently Mocked)
1. **Betting System**: Replace toast with real USDC transactions
2. **Voting**: QR codes → wallet signatures for match outcomes
3. **Rewards**: $GAS token distribution via smart contracts
4. **AI Training**: Winner's model gets compute upgrades (Spoon OS)

### Polymarket Integration
- Win probability bar pulls from real prediction markets
- Live odds updates during fights

### Agent Autonomy
- Replace scripted dialogue with LLM-generated responses
- Real-time debate evaluation via AI judging

---

## Development Notes

### Running the App
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (port 3000)
npm run build        # Production build
```

### File Structure
```
app/
  ├── layout.tsx          # Root layout with theme + font
  ├── page.tsx            # Home page wrapper
  └── globals.css         # Custom CSS (bg-grid-pattern, etc.)

components/
  ├── agent-fight-club.tsx  # Main game component (this doc)
  ├── ui/                   # shadcn/ui components
  └── theme-provider.tsx    # Dark mode context

public/
  ├── elon_pixel.png
  ├── marx_pixel.png
  └── background_pixel.png
```

### Key Dependencies
- `framer-motion` - Animations
- `lucide-react` - Icons (Trophy, Wallet, QrCode, etc.)
- `sonner` - Toast notifications
- `@radix-ui/*` - Accessible UI primitives
- `tailwindcss` - Utility-first CSS

---

## Performance Considerations

- **Animation Cleanup**: `useEffect` cleanup prevents memory leaks
- **Conditional Rendering**: `AnimatePresence` only mounts active state
- **Image Optimization**: Next.js auto-optimizes PNG assets
- **Spring Physics**: Framer Motion uses hardware-accelerated transforms

---

## Accessibility Notes

- Pixel font may be difficult to read for some users
- Flashing effects (scanlines, shake) could trigger photosensitivity
- Keyboard shortcut (→) provides alternative to QR scanning
- High contrast color scheme aids visibility

---

**Last Updated**: November 22, 2025  
**Version**: 1.0  
**Author**: Auto-generated documentation
