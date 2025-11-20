# ToDoList - React Native App

This repository contains a solution for weekly assignment 34in the course "Web- and Hybrid Technologies in Mobile Programming" at Oulu University of Applied Sciences.

A simple and clean ToDo list application built with React Native and Expo.

## Features

- ✅ Display list of tasks
- ➕ Add new tasks with input field
- ✓ Mark tasks as done/undone by tapping (strikethrough styling)
- 💾 Data persistence with AsyncStorage
- 🧩 Modular component architecture

## Project Structure

```
ToDoList/
├── components/
│   ├── AddTask.tsx      # Input field for adding new tasks
│   ├── MarkTask.tsx     # Mark tasks as complete with strike-through
│   └── ViewTasks.tsx    # Main component managing task state
├── screens/
│   └── Tasks.tsx
├── types/
│   └── Task.ts          # TypeScript type definitions
└── App.tsx
```

## Tech Stack

- React Native
- Expo
- TypeScript
- AsyncStorage for data persistence

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npx expo start
```

3. Scan QR code with Expo Go app (iOS/Android) or press `a` for Android emulator, `i` for iOS simulator

## Usage

- Type a task in the input field and press "Add" or Enter
- Tap any task to mark it as complete (adds strikethrough)
- Tap again to mark as incomplete
- All tasks are automatically saved to device storage
