# King Albums Music Player 🎧

A simple, self-contained web-based music player designed to play predefined albums and tracks, featuring music likely by the artist King. It includes standard playback controls and a feature to unlock a secret playlist with a code.

## ✨ Features

* **Album Navigation:** Select albums from a sidebar menu (`The Carnival Album`, `New Life`, `Champagne Talk`, `Gorilla Bounce`, `Monopoly Moves`, `Bonus Projects`).
* **Track Listing:** Displays tracks for the currently selected album.
* **Playback Controls:** Play, Pause, Next Track, Previous Track.
* **Progress Bar:** Visualize track progress and seek to different times. Displays current time and total duration.
* **Volume Control:** Adjust the playback volume.
* **Album Art & Info:** Displays the cover art and title of the currently playing track.
* **Secret Playlist:** Unlock a hidden playlist using a password input and button.
* **Basic Security:** Disables right-click context menu and some developer key shortcuts (Ctrl+U, Ctrl+S, etc.).

## 💻 Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla JS)

## 📂 File Structure

The project relies on the following file structure:

<img width="594" alt="image" src="https://github.com/user-attachments/assets/7d9b225c-e014-400c-8949-3451f61b9900" />

* **Important:** You must create the `albums/` directory and populate it with the subdirectories, cover images (`cover.jpeg`, `cover.webp`, `cover.jpg`, `cover.png`), and MP3 files exactly as referenced in the `albums` and `secretPlaylists` arrays within `script.js`.

## 🚀 Usage

1.  **Prepare Files:** Ensure the `albums/` directory is created and contains all the necessary audio files and cover images with the correct filenames as specified in `script.js`. Place `logo.jpeg` in the root directory alongside `index.html`.
2.  **Open:** Simply open the `index.html` file in a modern web browser that supports HTML5 audio. No web server is required for basic playback if files are local.

## 🔐 Secret Playlist

A hidden playlist can be accessed:
1.  Locate the password input field and "Unlock Playlist" button at the bottom of the player.
2.  Enter the correct secret code (Hint: It's defined as a key in the `secretPlaylists` object in `script.js`).
3.  Click the "Unlock Playlist" button. The secret tracks will load.

## 🔧 Customization

You can modify the music content by:
* Editing the `albums` array in `script.js` to add, remove, or change albums, tracks, cover paths, and audio source paths.
* Editing the `secretPlaylists` object in `script.js` to change the unlock code(s) or the tracks within the secret lists.
* Replacing the audio/image files in the `albums/` directory accordingly.

* **Important:** You must create the `albums/` directory and populate it with the subdirectories, cover images (`cover.jpeg`, `cover.webp`, `cover.jpg`, `cover.png`), and MP3 files exactly as referenced in the `albums` and `secretPlaylists` arrays within `script.js`.

## 🚀 Usage

1.  **Prepare Files:** Ensure the `albums/` directory is created and contains all the necessary audio files and cover images with the correct filenames as specified in `script.js`. Place `logo.jpeg` in the root directory alongside `index.html`.
2.  **Open:** Simply open the `index.html` file in a modern web browser that supports HTML5 audio. No web server is required for basic playback if files are local.

## 🔐 Secret Playlist

A hidden playlist can be accessed:
1.  Locate the password input field and "Unlock Playlist" button at the bottom of the player.
2.  Enter the correct secret code (Hint: It's defined as a key in the `secretPlaylists` object in `script.js`).
3.  Click the "Unlock Playlist" button. The secret tracks will load.

## 🔧 Customization

You can modify the music content by:
* Editing the `albums` array in `script.js` to add, remove, or change albums, tracks, cover paths, and audio source paths.
* Editing the `secretPlaylists` object in `script.js` to change the unlock code(s) or the tracks within the secret lists.
* Replacing the audio/image files in the `albums/` directory accordingly.
