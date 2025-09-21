# Rocker Gestures for Brave

## Description
Rocker Gestures is a small browser extension for Brave that allows you to navigate backward and forward in your browsing history using quick mouse button sequences, mimicking the behavior from the old Opera browser. Specifically, pressing the right mouse button and then quickly the left mouse button takes you back, while pressing the left mouse button and then quickly the right mouse button takes you forward.

## Why It Was Created
Many users miss the convenient “rocker gesture” feature from Opera, which is not natively available in Brave. This extension was created to replicate that functionality securely, without relying on third-party extensions from unknown sources.

## What It Does
- Implements Opera-style rocker gestures:
  - Right button down → Left click = Back
  - Left button down → Right click = Forward
- Suppresses the context menu when performing gestures to prevent interference
- Fully customizable in code (e.g., timing window for the gesture)

## How to Install
1. Download or clone this repository to your local machine.
2. Open Brave and navigate to `brave://extensions/`.
3. Enable **Developer mode** (top right corner).
4. Click **Load unpacked** and select the folder containing this extension.
5. After installation, **restart Brave** to ensure the extension works correctly.
6. Test the rocker gestures on any web page:
   - Right → Left = Back
   - Left → Right = Forward

> Note: The extension may not work on Brave internal pages such as `brave://extensions` or the Chrome Web Store, due to browser restrictions.
