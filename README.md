# RealEstateUnlockApp

## Overview
RealEstateUnlockApp is a mobile application built using Expo React Native. It allows real estate companies to remotely unlock homes for potential buyers based on their proximity to the property. The app demonstrates state management, API integration, and the use of native device features such as location services and push notifications.

## Features
- **User Authentication:** Simple login functionality.
- **Home Listing:** Displays a list of homes that can be unlocked.
- **Home Details:** Shows detailed information about the home, including an "Unlock" button that appears when the user is within a certain distance of the home.
- **Push Notifications:** Notifies users when they are near a home and when a home is successfully unlocked.

## Setup Instructions

### Prerequisites
- **Node.js**: Ensure you have Node.js installed (v14 or later recommended). You can download it from [Node.js official website](https://nodejs.org/).
- **Expo CLI**: Install Expo CLI globally on your machine:
  ```bash
  npm install -g expo-cli
  ```

### Project Setup
1. Clone the Repository
   ```bash
   git clone https://github.com/your-username/RealEstateUnlockApp.git
   cd RealEstateUnlockApp
   ```

2. Install Dependencies
   Install all the required dependencies using npm:
   ```bash
   npm install
   ```

3. Setup Mock API Data
   The application uses mock API data for authentication and home listings. The mock data is stored in JSON files located in the `mock-api/` directory.

4. Run the Project
   - On a Simulator/Emulator: Ensure you have a simulator or emulator running, then start the Expo development server:
     ```bash
     npx expo start
     ```
   - On a Physical Device:
     - Install the Expo Go app from the App Store (iOS) or Google Play Store (Android).
     - Scan the QR code displayed in your terminal or browser after running the Expo start command.

## Testing the Application
1. **Login**
   - Enter the credentials provided in `mock-api/user.json` to log in.
   - The default credentials are:
     - Username: testuser
     - Password: password123

2. **Home Listing**
   - After logging in, you will be redirected to the home listing screen, where you can see a list of available homes.

3. **Home Details**
   - Select a home to view its details.
   - The "Unlock" button will be displayed if you are within 300 meters of the home. (For testing purposes, the proximity distance is set to 300,000 meters).

4. **Push Notifications**
   - Proximity Notification: A notification will be triggered when you are near the home.
   - Unlock Notification: A notification will be triggered when you successfully unlock a home.

## Troubleshooting
- **Notifications Not Showing:**
  - Make sure notifications are enabled for the app on your device.
  - Check if the device is in Do Not Disturb mode.
  - Verify that the `sound` and `vibrationPattern` are correctly set in `app.json`.

- **Location Permissions Not Granted:**
  - Ensure location permissions are granted when the app requests them.
  - If permissions are denied, manually enable them in the device's settings.