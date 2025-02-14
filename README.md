<!-- Improved compatibility of back to top link -->
<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">

<h2 align="center">Calendar-Based Task Management App</h2>

<p align="center">
A cross-platform mobile application designed to help students and enterprise employees
manage their schedules, track actual work time, and analyze productivity—combining an
intuitive calendar interface with integrated Pomodoro sessions, Firebase data persistence,
and robust analytics.
</p>
</div>

---

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#highlight">Highlight</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## Highlight
- **Daily & Weekly Calendar Views**: Toggle between day/week modes for efficient scheduling.  
- **Integrated Pomodoro Timer**: Track focused work sessions and break intervals directly in the app.  
- **Customizable Focus Sessions**: Adjust Pomodoro durations to match different productivity styles.  
- **Multi-User Login**: Secure sign-up and login using Firebase Authentication.  
- **Performance Analytics**: Visualize assigned vs. actual work time for daily and weekly insights.  
- **Priority-Based Events**: Color-coded tasks help users identify and address high-priority items first.  
- **Seamless Data Storage**: Events and user data stored persistently in Firebase for real-time sync.  



## Built With

[![ReactNative][ReactNative-shield]][ReactNative-url]    
[![Redux][Redux-shield]][Redux-url]  
[![Firebase][Firebase-shield]][Firebase-url]  
[![GoogleCloud][GCP-shield]][GCP-url]  


## Getting Started

This project uses React Native (Expo) and Firebase. Below are the instructions to set up and run the application locally.

### Prerequisites

* **Node.js** (v14+ recommended)  
* **npm** 
* **Expo CLI** (optional but recommended if deploying to mobile devices/emulators)
  ```sh
  npm install --global expo-cli
  ```

### Installation

1. **Clone the repo**  
   ```sh
   git clone https://github.com/jkchi/ReactNativePomodoroCalendar
   ```

2. **Navigate to the project directory**  
   ```sh
   cd PomodoroCalendar
   ```

3. **Install dependencies**  
   ```sh
   npm install
   ```
4. **Firebase Configuration**  

    Below is a minimal example of a `secret.js` file containing the **Firebase** credentials required for this project. These keys allow the application to interact with Firebase services (e.g., Authentication, Firestore, Cloud Storage). **Do not commit this file to a public repository** or expose these keys online.

    ```js
    // secret.js

    const firebaseConfig = {
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
    };

    export default firebaseConfig;
    ```

    ### How to Obtain Your Firebase API Key

    1. **Create a Firebase Project**  
      - Visit the [Firebase Console](https://console.firebase.google.com/) and either create a new project or select an existing one.

    2. **Register a Web App**  
      - In "Project settings," scroll to "Your apps" and add a new web app if you don’t already have one.
      - Firebase will provide a config object containing your `apiKey`, `authDomain`, and more.

    3. **Copy the Config Values**  
      - Replace the empty fields in `secret.js` with the config object Firebase shows.



    For in-depth guidance, refer to the official [Firebase Web Setup Guide](https://firebase.google.com/docs/web/setup).   
    


1. **Run the application**  
   ```sh
   npx expo start
   ```
   - Use **`i`** to launch the iOS simulator, **`a`** for Android, or scan the QR code with the Expo Go app.

## Example  

### Login/Register


  <img src="https://raw.githubusercontent.com/jkchi/ReactNativePomodoroCalendar/main/images/log_in.png" alt="Logo" width="300" style="margin:15;">
  <img src="https://raw.githubusercontent.com/jkchi/ReactNativePomodoroCalendar/main/images/register.png" alt="Logo" width="300" style="margin:15">

  

### Performance Statistics
  <img src="https://raw.githubusercontent.com/jkchi/ReactNativePomodoroCalendar/main/images/stats_bar.png" alt="Logo" width="300" style="margin:15">
  <img src="https://raw.githubusercontent.com/jkchi/ReactNativePomodoroCalendar/main/images/stats_task.png" alt="Logo" width="300" style="margin:15">

### Pomodoro Timer
  <img src="https://raw.githubusercontent.com/jkchi/ReactNativePomodoroCalendar/main/images/timer.png" alt="Logo" width="300" style="margin:15">
  <img src="https://raw.githubusercontent.com/jkchi/ReactNativePomodoroCalendar/main/images/timer_setting.png" alt="Logo" width="300" style="margin:15">
  <img src="https://raw.githubusercontent.com/jkchi/ReactNativePomodoroCalendar/main/images/focus.png" alt="Logo" width="300" style="margin:15">

### Calendar
  <img src="https://raw.githubusercontent.com/jkchi/ReactNativePomodoroCalendar/main/images/day.png" alt="Logo" width="300" style="margin:15">
  <img src="https://raw.githubusercontent.com/jkchi/ReactNativePomodoroCalendar/main/images/week.png" alt="Logo" width="300" style="margin:15">

### Add Task
  <img src="https://raw.githubusercontent.com/jkchi/ReactNativePomodoroCalendar/main/images/add_task.png" alt="Logo" width="300" style="margin:15">
  <img src="https://raw.githubusercontent.com/jkchi/ReactNativePomodoroCalendar/main/images/add_task_1.png" alt="Logo" width="300" style="margin:15">

## Demo Video
https://youtu.be/vPUP4sAKaJo
## Contact

**Author**: [Jinkui Chi](mailto:chijk@umich.edu)  
**LinkedIn**: [linkedin.com/in/jinkuichi](https://www.linkedin.com/in/jinkuichi/)  
**GitHub**: [github.com/jkchi](https://github.com/jkchi)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- Badges: You can generate these or customize them as needed -->

[ReactNative-shield]: https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[ReactNative-url]: https://reactnative.dev/
[Redux-shield]: https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[Firebase-shield]: https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=white
[Firebase-url]: https://firebase.google.com/
[GCP-shield]: https://img.shields.io/badge/Google%20Cloud%20Platform-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white
[GCP-url]: https://cloud.google.com/
