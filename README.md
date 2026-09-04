# ONLY UP...

### A 2D Platforming Experience

> **How high can you go?**

**Only Up...** is a fast-paced 2D platforming game built from scratch using vanilla JavaScript, HTML, and CSS.

Take control of a strange little ball, navigate through an increasingly challenging vertical environment, and keep going...

**Only Up.**

---

## 🎮 THE GAME

You are a ball.

That's it.

No weapons.
No inventory.
No complicated character classes.

Just you, gravity, platforms, and one objective:

### **GO UP.**

Jump from platform to platform, avoid falling, and see how far you can make it.

The higher you go, the harder it gets.

---

## ⚡ FEATURES

- **Custom Physics** — Gravity, velocity, jumping, and movement built from scratch.
- **Collision System** — Platforms dynamically interact with the player.
- **Responsive Controls** — Keyboard-based movement and jumping.
- **Interactive Character** — The player's eyes follow your mouse.
- **Dynamic Appearance** — Click the ball to generate a new random color.
- **Expandable Level System** — Add new `.part` elements and the game automatically recognizes them as platforms.
- **No Game Engine** — Everything is handled directly with JavaScript.

---

## 🕹️ CONTROLS

| INPUT         | ACTION            |
| ------------- | ----------------- |
| `A` / `←`     | Move Left         |
| `D` / `→`     | Move Right        |
| `SPACE` / `↑` | Jump              |
| `CLICK`       | Change Ball Color |

Simple controls.

Hard game.

---

## 🧱 THE WORLD

The level is built from individual platform elements.

Adding a new platform doesn't require rewriting the physics system.

Simply create another `.part`:

```html
<div class="part"></div>
```

Style it however you want, and the game will automatically include it in the collision system.

This makes the level easy to expand and experiment with.

---

## 🧠 UNDER THE HOOD

Unlike many game projects, **Only Up...** doesn't rely on an external physics engine.

The core gameplay systems were implemented manually.

### Movement

The player maintains its own state:

- Position
- Vertical velocity
- Movement direction
- Jump state
- Ground state
- Dimensions

### Physics

Gravity continuously affects vertical velocity, while player input controls horizontal movement.

### Collision Detection

Platforms are represented using bounding rectangles.

The game checks for intersections between the player's bounding box and each platform, then resolves the collision depending on the direction of movement.

### Game Loop

The game continuously updates through `requestAnimationFrame()`:

```text
INPUT
  ↓
PHYSICS
  ↓
COLLISION
  ↓
POSITION UPDATE
  ↓
RENDER
  ↓
REPEAT
```

---

## 👀 THE BALL

It's not just a ball.

It watches you.

The player's pupils track the mouse cursor in real time, giving the character a small interactive personality.

Clicking the ball also changes its color.

Because apparently the ball needed customization.

---

## 🛠️ TECHNOLOGY

**Frontend**

- HTML5
- CSS3
- Vanilla JavaScript

**APIs & Browser Features**

- DOM API
- Keyboard Events
- Mouse Events
- `requestAnimationFrame()`
- `getBoundingClientRect()`

**Dependencies**

None.

---

## 📂 PROJECT STRUCTURE

```text
parkour-game/
│
├── README.md
│
├── LICENSE
│
├── index.html
│
├── css/
│   ├── styles.css
│   ├── ball.css
│   └── parkour.css
│
└── js/
    ├── ball.js
    └── parkour.js
```

---

## 🚧 DEVELOPMENT

**Status: In Development**

This is an evolving project.

The current version focuses on establishing the core gameplay systems and physics.

### Planned Features

- [ ] More platforms
- [ ] Larger levels
- [ ] Camera system
- [ ] Moving platforms
- [ ] Checkpoints
- [ ] Score / height tracking
- [ ] Win condition
- [ ] Sound effects
- [ ] Music
- [ ] Animations
- [ ] Improved physics
- [ ] Mobile controls

---

## 🎯 PROJECT GOAL

The goal of this project is simple:

**Build a game from the ground up and understand how it works.**

Instead of depending on a game engine to handle movement and physics, the fundamental systems are being implemented manually with JavaScript.

Every mechanic is an opportunity to learn something new.

---

## 🖥️ RUN LOCALLY

Clone the repository:

```bash
git clone https://github.com/The-Amir-Ali/parkour-game.git
```

Open the project with your preferred code editor and launch it using a local development server.

Then...

**Start climbing.**

---

## 📸 SCREENSHOTS

_Add gameplay screenshots here._

```text
Coming soon...
```

---

## 🗺️ ROADMAP

### PHASE 01 — THE BALL

- [x] Player
- [x] Movement
- [x] Jumping
- [x] Gravity
- [x] Ground detection

### PHASE 02 — THE WORLD

- [x] Platforms
- [x] Collision detection
- [x] Collision resolution
- [ ] More complex layouts

### PHASE 03 — THE CLIMB

- [ ] Camera movement
- [ ] Vertical progression
- [ ] Checkpoints
- [ ] Difficulty scaling

### PHASE 04 — THE GAME

- [ ] Objectives
- [ ] Win condition
- [ ] Audio
- [ ] Polish
- [ ] Final level

---

## 📜 LICENSE

This project is open source and available under the MIT License.

---

# ONLY UP...

### **There is nowhere to go but up.**

**Made from scratch with JavaScript.**
