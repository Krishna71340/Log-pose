#  Log Pose - The Ultimate One Piece Fan Site

Welcome to **Log Pose**, an interactive and immersive web experience designed for One Piece fans. This project features 3D animations, parallax effects, a watch guide, and a hidden "Gear 5" mode.

##  Features

###  **Home (`index.html`)**
- **3D Wanted Poster:** A dynamic, mouse-tracking wanted poster of Luffy.
- **Bounty Counter:** An animated counter that tallies up to Luffy's current bounty.
- **Drums of Liberation:** A pulsing footer hint for the secret mode.

###  **Ships (`ships.html`)**
- **Parallax Ocean:** A multi-layered wave system that moves at different speeds to create depth.
- **Interactive Ships:** Switch between the **Going Merry** and **Thousand Sunny**.
- **Physics Animation:** Ships bob realistically on the water surface, sitting between wave layers.
- **Dynamic Atmosphere:** The sky and lighting change based on the selected ship.

###  **Timeline (`timeline.html`)**
- **Crew Recruitment History:** A scroll-triggered timeline showing when and where each Straw Hat joined.
- **Interactive Log Pose:** A floating compass that rotates based on your scroll position.
- **Scroll Animations:** Cards slide in from the left and right as you explore the history.

###  **Guide (`guide.html`)**
- **Arc Database:** A complete list of Sagas and Arcs (Anime & Manga).
- **Episode Tracker:** Enter your current episode to see your progress and what's next.
- **Catch-Up Calculator:** Calculate exactly how long it will take to catch up to the latest episode based on your viewing habits.
- **Spoiler Toggle:** A safety switch to blur future events for new viewers.

###  **Quiz (`quiz.html`)**
- **New World Challenge:** 10 difficult trivia questions about Yonko, Haki, and legendary figures.
- **Bounty System:** Earn a rank and bounty (from "Chore Boy" to "Pirate King") based on your score.
- **Wanted Poster Result:** Your score is displayed on a custom Wanted Poster.

---

##  The "Gear 5" Secret 

This site contains a global **Easter Egg**.
1. Go to any page.
2. Type the secret code: **`meatmeatmeat`** on your keyboard.
3. **Effect:** - The theme transforms into **Gear 5 Mode** (Black & White & Purple).
   - "Drums of Liberation" visuals appear.
   - A video background plays.
   - Luffy bounces across the screen.
   - A "JOY BOY HAS RETURNED" splash screen appears.

---

##  File Structure

Ensure your project folder looks like this for all images and scripts to load correctly:

```text
/one-piece-site
│
├── index.html        # Home Page
├── timeline.html     # Crew Timeline
├── ships.html        # Parallax Ships
├── guide.html        # Watch Guide & Calculator
├── quiz.html         # Trivia Quiz
├── gear5.js          # Secret Code Logic (Global Script)
│
├── images/           # Image Assets Folder
│   ├── timeline.jpg      # Main background texture
│   ├── logo.png          # Site Logo
│   ├── gear5.mp4         # Background video for Secret Mode
│   ├── luffy-jump.png    # Transparent Luffy for Secret Mode
│   │
│   ├── crew/             # Crew Member Images
│   │   ├── luffy.png
│   │   ├── zoro.png
│   │   ├── nami.png
│   │   ├── ... (etc)
│   │
│   └── ships/            # Ship Images
│       ├── merry.png
│       └── sunny.png
```

## How to Run
- Download the source code.

- Add Assets: Place your images and videos in the images/ folder matching the names above.

- Open: Double-click index.html to launch the site in your browser.

## Technologies Used
- HTML5 (Semantic Structure)

- CSS3 (Animations, Flexbox, Grid, Parallax, Keyframes)

- JavaScript (DOM Manipulation, LocalStorage, Audio/Video Control)

---

> "Inherited Will, The Destiny of the Age, and The Dreams of the People. As long as people continue to pursue the meaning of Freedom, these things will never cease to be!" — Gol D. Roger
