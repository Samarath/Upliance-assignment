# Upliance-Assignment Documentation

## Overview

This project is a **React-based web application** built using **Next.js**. It includes a **counter component**, a **user data form**, and a **rich text editor**. The application leverages several libraries and tools to provide a comprehensive and interactive user experience, such as:

- **Material UI**
- **React Spring**
- **TypeScript**
- **React Router**

## File Structure

The project follows a modular structure with the main components organized under the `src/app` directory. Here's an overview of the file structure:

## Key Components

### Counter Component

- **File**: `src/app/(main)/counter/page.tsx`
- **Description**:
  - A counter with buttons for increment, decrement, and reset.
  - As the counter increases, the background color level changes accordingly.
  - Resetting the counter sets the background color back to its initial state.

### User Data Form

- **File**: `src/app/(main)/user-form/page.tsx`
- **Description**:
  - A form to collect user data such as name, address, email, and phone.
  - Generates a unique user ID and saves the data to local storage on form submission.
  - Warns users about unsaved changes if they attempt to close the browser.

### Rich Text Editor

- **File**: `src/app/(main)/text-editor/page.tsx`
- **Description**:
  - A rich text editor that visualizes user data.
  - Supports text formatting options like bold, italic, underline, and lists.
  - Ensures data persistence.

## State Management

- **Files**: `src/app/redux/slices/UserSlice.tsx`, `src/app/redux/store.tsx`
- **Description**:
  - Manages application state using **Redux**.
  - User data is stored and accessed through the Redux store.

## Package Dependencies

The project relies on several **npm packages** to provide its functionality. Below are the key dependencies and their purposes:

- `@emotion/react`, `@emotion/styled`: For **CSS-in-JS** styling.
- `@mui/material`: Material UI components for building the user interface.
- `@react-spring/web`: For creating fluid animations.
- `@reduxjs/toolkit`, `react-redux`: For state management with **Redux**.
- `next`: For server-side rendering and static site generation.
- `react`, `react-dom`: Core libraries for building the **React** application.
- `react-quill`, `react-quill-new`: For integrating **rich text editors**.
- `react-router-dom`: For handling routing within the application.

## Development and Build Scripts

The `package.json` file includes several scripts for development and production builds:

- `dev`: Starts the development server using **Next.js** with **TurboPack**.
- `build`: Builds the project for production.
- `start`: Starts the production server.
