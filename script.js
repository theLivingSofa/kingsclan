// document.addEventListener("DOMContentLoaded", () => {
//     const passwordInput = document.getElementById("password-input");
//     const unlockBtn = document.getElementById("unlock-btn");
//     const albumList = document.getElementById("album-list");
//     const trackListContainer = document.getElementById("track-list");
//     const albumCover = document.getElementById("album-cover");
//     const trackTitle = document.getElementById("track-title");
//     const audioPlayer = document.getElementById("audio-player");
//     const playPauseBtn = document.getElementById("play-pause");
//     const prevBtn = document.getElementById("prev");
//     const nextBtn = document.getElementById("next");
//     const progressBar = document.getElementById("progress-bar");
//     const volumeControl = document.getElementById("volume-control");
//     const currentTimeEl = document.getElementById("current-time");
//     const totalDurationEl = document.getElementById("total-duration");

//     let currentPlaylist = [];
//     let currentAlbumIndex = null;
//     let currentTrackIndex = 0;

//     // Regular Albums
//     const albums = [
//         {
//             name: 'The Carnival Album',
//             cover: 'albums/album1/cover.jpeg',
//             tracks: [
//                 { title: '90s', src: 'albums/album1/track1.mp3' },
//                 { title: 'Dracula', src: 'albums/album1/track2.mp3' },
//                 { title: 'IICONIC', src: 'albums/album1/track3.mp3' },
//                 { title: 'Let The Eyes Talk', src: 'albums/album1/track4.mp3' },
//                 { title: "She Don't Give A", src: 'albums/album1/track5.mp3' },
//                 { title: 'Thoda Samjho', src: 'albums/album1/track6.mp3' },
//                 { title: 'Mafiia', src: 'albums/album1/track7.mp3' },
//                 { title: 'Tu Aake Dekhle', src: 'albums/album1/track8.mp3' }
//             ]
//         },
//         {
//             name: 'New Life',
//             cover: 'albums/album2/cover.webp',
//             tracks: [
//                 { title: 'Aafat', src: 'albums/album2/track1.mp3' },
//                 { title: 'Crown', src: 'albums/album2/track2.mp3' },
//                 { title: 'Runaway', src: 'albums/album2/track3.mp3' },
//                 { title: 'Sarkaare', src: 'albums/album2/track4.mp3' },
//                 { title: 'Good Trip', src: 'albums/album2/track5.mp3' },
//                 { title: 'Tum Saath Rehnaa', src: 'albums/album2/track6.mp3' },
//                 { title: 'No Loss', src: 'albums/album2/track7.mp3' },
//                 { title: 'Legends', src: 'albums/album2/track8.mp3' },
//                 { title: 'Tu Jaana Na Piya', src: 'albums/album2/track9.mp3' },
//                 { title: 'Legends (B Side)', src: 'albums/album2/track10.mp3' },
//                 { title: 'We Are The Ones', src: 'albums/album2/track11.mp3' },
//             ]
//         },
//         {
//             name: 'Champagne Talk',
//             cover: 'albums/album3/cover.jpeg',
//             tracks: [
//                 { title: 'Na Ja Tu', src: 'albums/album3/track1.mp3' },
//                 { title: 'OOPS', src: 'albums/album3/track2.mp3' },
//                 { title: 'Broken Dreams', src: 'albums/album3/track3.mp3' },
//                 { title: 'Maan Meri Jaan', src: 'albums/album3/track4.mp3' },
//                 { title: 'Dejalo', src: 'albums/album3/track5.mp3' },
//                 { title: 'Pablo', src: 'albums/album3/track6.mp3' },
//                 { title: 'Champagne Talk', src: 'albums/album3/track7.mp3' },
//                 { title: 'Me & Me', src: 'albums/album3/track8.mp3' },
//             ]
//         },
//         {
//             name: 'Gorilla Bounce',
//             cover: 'albums/album4/cover.jpg',
//             tracks: [
//                 { title: 'Picasso', src: 'albums/album4/track1.mp3' },
//                 { title: 'Blanko', src: 'albums/album4/track2.mp3' },
//                 { title: 'Saloot', src: 'albums/album4/track3.mp3' },
//                 { title: 'GodFather', src: 'albums/album4/track4.mp3' },
//                 { title: 'Casanova', src: 'albums/album4/track5.mp3' },
//                 { title: 'Desi Dan Bilzerian', src: 'albums/album4/track6.mp3' },
//                 { title: 'Koo Koo', src: 'albums/album4/track7.mp3' },
//                 { title: 'Shaamein', src: 'albums/album4/track8.mp3' },
//                 { title: 'Mai Bas Kehti Nahi', src: 'albums/album4/track9.mp3' },
//                 { title: 'ERA', src: 'albums/album4/track10.mp3' },
//                 { title: 'Tera Hua Na Kabhi', src: 'albums/album4/track11.mp3' },
//             ]
//         },
//         {
//             name: 'Monopoly Moves',
//             cover: 'albums/album5/cover.jpeg',
//             tracks: [
//                 { title: 'Goat Shit', src: 'albums/album5/track1.mp3' },
//                 { title: 'Still The Same', src: 'albums/album5/track2.mp3' },
//                 { title: 'Way Bigger', src: 'albums/album5/track3.mp3' },
//                 { title: 'Bawe Main Check', src: 'albums/album5/track4.mp3' },
//                 { title: 'Misfit', src: 'albums/album5/track5.mp3' },
//                 { title: 'Kodak', src: 'albums/album5/track6.mp3' },
//                 { title: 'SAZA', src: 'albums/album5/track7.mp3' },
//                 { title: 'Pyaar Humara', src: 'albums/album5/track8.mp3' },
//                 { title: 'Fuck What They Say', src: 'albums/album5/track9.mp3' },
//                 { title: 'Warcry', src: 'albums/album5/track10.mp3' },
//                 { title: 'Machiney', src: 'albums/album5/track11.mp3' },
//                 { title: 'Supreme Leader', src: 'albums/album5/track12.mp3' },
//                 { title: 'Suits & Streets', src: 'albums/album5/track13.mp3' },
//                 { title: "Can't Afford", src: 'albums/album5/track14.mp3' },
//                 { title: 'Tere Ho Ke', src: 'albums/album5/track15.mp3' },
//                 { title: 'Delulu Dance', src: 'albums/album5/track16.mp3' },
//             ]
//         },
//         {
//             name: 'Bonus Projects',
//             cover: 'albums/album6/cover.jpg',
//             tracks: [
//                 { title: 'Baazi', src: 'albums/album6/track1.mp3' },
//                 { title: 'Ektarfa', src: 'albums/album6/track2.mp3' },
//                 { title: 'Sinner', src: 'albums/album6/track3.mp3' },
//                 { title: 'Laapata', src: 'albums/album6/track4.mp3' },
//                 { title: 'Hum Tumse', src: 'albums/album6/track5.mp3' },
//                 { title: 'Teri Ho Na Saki', src: 'albums/album6/track6.mp3' },
//                 { title: "Alpha's Goodbye", src: 'albums/album6/track7.mp3' },
//                 { title: 'Till The End', src: 'albums/album6/track8.mp3' },
//                 { title: 'Stay', src: 'albums/album6/track9.mp3' },
//             ]
//         }
//     ];

//     // Secret Playlists
//     const secretPlaylists = {
//         "discord2019": {
//             cover: "albums/secret/cover.png",
//             tracks: [
//                 { "name": "Hidden Gem 1", "src": "albums/secret/track1.mp3" },
//                 { "name": "Hidden Gem 2", "src": "albums/secret/track2.mp3" },
//                 { "name": "Hidden Gem 3", "src": "albums/secret/track3.mp3" },
//                 { "name": "Hidden Gem 4", "src": "albums/secret/track4.mp3" },
//                 { "name": "Hidden Gem 5", "src": "albums/secret/track5.mp3" },
//                 { "name": "Hidden Gem 6", "src": "albums/secret/track6.mp3" },
//                 { "name": "Hidden Gem 7", "src": "albums/secret/track7.mp3" },
//                 { "name": "Hidden Gem 8", "src": "albums/secret/track8.mp3" },
//                 { "name": "Hidden Gem 9", "src": "albums/secret/track9.mp3" },
//                 { "name": "Hidden Gem 10", "src": "albums/secret/track10.mp3" },
//                 { "name": "Hidden Gem 11", "src": "albums/secret/track11.mp3" },
//                 { "name": "Hidden Gem 12", "src": "albums/secret/track12.mp3" },
//                 { "name": "Hidden Gem 13", "src": "albums/secret/track13.mp3" },
//                 { "name": "Hidden Gem 14", "src": "albums/secret/track14.mp3" },
//                 { "name": "Hidden Gem 15", "src": "albums/secret/track15.mp3" },
//                 { "name": "Hidden Gem 16", "src": "albums/secret/track16.mp3" },
//                 { "name": "Hidden Gem 17", "src": "albums/secret/track17.mp3" },
//                 { "name": "Hidden Gem 18", "src": "albums/secret/track18.mp3" },
//                 { "name": "Hidden Gem 19", "src": "albums/secret/track19.mp3" },
//                 { "name": "Hidden Gem 20", "src": "albums/secret/track20.mp3" },
//                 { "name": "Hidden Gem 21", "src": "albums/secret/track21.mp3" },
//                 { "name": "Hidden Gem 22", "src": "albums/secret/track22.mp3" },
//                 { "name": "Hidden Gem 23", "src": "albums/secret/track23.mp3" },
//                 { "name": "Hidden Gem 24", "src": "albums/secret/track24.mp3" },
//                 { "name": "Hidden Gem 25", "src": "albums/secret/track25.mp3" },
//                 { "name": "Hidden Gem 26", "src": "albums/secret/track26.mp3" },
//                 { "name": "Hidden Gem 27", "src": "albums/secret/track27.mp3" }
//             ]
//         }
//     };

//     // Load Albums in Sidebar
//     albums.forEach((album, index) => {
//         const li = document.createElement('li');
//         li.textContent = album.name;
//         li.addEventListener('click', () => loadAlbum(index));
//         albumList.appendChild(li);
//     });

//     // Load Album Function
//     function loadAlbum(index) {
//         currentAlbumIndex = index;
//         currentPlaylist = albums[index].tracks;
//         albumCover.src = albums[index].cover;
//         trackListContainer.innerHTML = '';
//         currentTrackIndex = 0;

//         albums[index].tracks.forEach((track, trackIndex) => {
//             const trackItem = document.createElement("li");
//             trackItem.textContent = track.title;
//             trackItem.dataset.index = trackIndex;
//             trackItem.addEventListener("click", () => playTrack(trackIndex, false));
//             trackListContainer.appendChild(trackItem);
//         });

//         playTrack(0, false);
//     }

//     // Unlock Secret Playlist
//     unlockBtn.addEventListener("click", () => {
//         const enteredPassword = passwordInput.value.trim();
//         if (secretPlaylists[enteredPassword]) {
//             loadPlaylist(secretPlaylists[enteredPassword]);
//         } else {
//             alert("Wrong password! Try again.");
//         }
//     });

//     function loadPlaylist(playlist) {
//         trackListContainer.innerHTML = "";
//         albumCover.src = playlist.cover;
//         currentPlaylist = playlist.tracks;
//         currentAlbumIndex = null;
//         currentTrackIndex = 0;

//         playlist.tracks.forEach((track, index) => {
//             const trackItem = document.createElement("li");
//             trackItem.textContent = track.name;
//             trackItem.dataset.index = index;
//             trackItem.addEventListener("click", () => playTrack(index, true));
//             trackListContainer.appendChild(trackItem);
//         });

//         playTrack(0, true);
//     }

//     function playTrack(index, isSecretPlaylist = false) {
//         if (index < 0 || index >= currentPlaylist.length) return;

//         currentTrackIndex = index;
//         const track = currentPlaylist[index];

//         audioPlayer.src = track.src;
//         audioPlayer.play();
//         trackTitle.textContent = track.title || track.name;
//         playPauseBtn.textContent = '⏸'; // Change button to Pause

//         highlightActiveTrack(index);

//         if (isSecretPlaylist) {
//             currentAlbumIndex = null;
//         }
//     }

//     function highlightActiveTrack(index) {
//         document.querySelectorAll("#track-list li").forEach(li => li.classList.remove("active-track"));
//         const activeTrack = document.querySelector(`#track-list li:nth-child(${index + 1})`);
//         if (activeTrack) activeTrack.classList.add("active-track");
//     }

//     audioPlayer.addEventListener("ended", () => {
//         currentTrackIndex++;
//         if (currentTrackIndex >= currentPlaylist.length) {
//             currentTrackIndex = 0;
//         }
//         playTrack(currentTrackIndex);
//     });

//     nextBtn.addEventListener("click", () => {
//         currentTrackIndex = (currentTrackIndex + 1) % currentPlaylist.length;
//         playTrack(currentTrackIndex);
//     });

//     prevBtn.addEventListener("click", () => {
//         currentTrackIndex = (currentTrackIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
//         playTrack(currentTrackIndex);
//     });

//     playPauseBtn.addEventListener("click", () => {
//         if (audioPlayer.paused) {
//             audioPlayer.play();
//             playPauseBtn.textContent = '⏸'; // Pause icon
//         } else {
//             audioPlayer.pause();
//             playPauseBtn.textContent = '▶'; // Play icon
//         }
//     });

//     function updateProgressBar() {
//         if (audioPlayer.duration) {
//             const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
//             progressBar.style.setProperty("--progress-fill", `${percentage}%`);
//         }
//         requestAnimationFrame(updateProgressBar);
//     }

//     audioPlayer.addEventListener("play", updateProgressBar);

//     progressBar.addEventListener("input", (event) => {
//         const seekTime = (event.target.value / 100) * audioPlayer.duration;
//         audioPlayer.currentTime = seekTime;
//     });

//     volumeControl.addEventListener("input", () => {
//         audioPlayer.volume = volumeControl.value;
//     });

//     function formatTime(seconds) {
//         let mins = Math.floor(seconds / 60);
//         let secs = Math.floor(seconds % 60);
//         return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
//     }

//     audioPlayer.addEventListener('timeupdate', () => {
//         currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
//     });

//     audioPlayer.addEventListener('loadedmetadata', () => {
//         totalDurationEl.textContent = formatTime(audioPlayer.duration);
//     });

//     document.addEventListener("contextmenu", event => event.preventDefault());
//     document.addEventListener("keydown", event => {
//         if (event.ctrlKey && ["u", "s", "i", "j", "c"].includes(event.key.toLowerCase())) {
//             event.preventDefault();
//         }
//     });

//     loadAlbum(0);
// });
document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password-input");
    const unlockBtn = document.getElementById("unlock-btn");
    const albumList = document.getElementById("album-list");
    const trackListContainer = document.getElementById("track-list");
    const albumCover = document.getElementById("album-cover");
    const trackTitle = document.getElementById("track-title");
    const audioPlayer = document.getElementById("audio-player");
    const playPauseBtn = document.getElementById("play-pause");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const progressBar = document.getElementById("progress-bar");
    const volumeControl = document.getElementById("volume-control");
    const currentTimeEl = document.getElementById("current-time");
    const totalDurationEl = document.getElementById("total-duration");

    let currentPlaylist = [];
    let currentAlbumIndex = null;
    let currentTrackIndex = 0;

    // Regular Albums with Updated Google Drive Links
    const albums = [
        {
            name: 'The Carnival Album',
            cover: 'albums/album1/cover.jpeg', // Keep cover local if desired, or replace with URL too
            tracks: [
                { title: '90s', src: 'https://drive.google.com/uc?export=download&id=1eX9HMBTTuVtjY7qMmAu6hEryxdMdKqKA' },
                { title: 'Dracula', src: 'https://drive.google.com/uc?export=download&id=14Lz6fqxzfHeKvSC7PG9gWLKnnyd7_Z4u' },
                { title: 'IICONIC', src: 'https://drive.google.com/uc?export=download&id=1AwXLbw5ctMmk2S7YaiZI8ri2svrC_FYc' },
                { title: 'Let The Eyes Talk', src: 'https://drive.google.com/uc?export=download&id=1ML9I5ZzWUjhtbpzB7vNOLshkM30KELRO' },
                { title: "She Don't Give A", src: 'https://drive.google.com/uc?export=download&id=1cUzfa4KeKvgXWayw2ipaCrfxcVtKxsud' },
                { title: 'Thoda Samjho', src: 'https://drive.google.com/uc?export=download&id=1hr7g4qsNSRaJ5QzggmUh4X5I2a-cIqfv' },
                { title: 'Mafiia', src: 'https://drive.google.com/uc?export=download&id=1lL0peL9njrZOJcTNL64M_Ku8ek3hScvL' },
                { title: 'Tu Aake Dekhle', src: 'https://drive.google.com/uc?export=download&id=1vDLEnCRSeqR1x4WVInQuXkR34Ttdqwta' }
            ]
        },
        {
            name: 'New Life',
            cover: 'albums/album2/cover.webp',
            tracks: [
                { title: 'Aafat', src: 'https://drive.google.com/uc?export=download&id=1419Dz-9gEeKZotSPmoUoYzHcVsYSSfsn' },
                { title: 'Crown', src: 'https://drive.google.com/uc?export=download&id=16nQAbDM9NKIEpIeCc9Wwsx0-U7z-vor7' },
                { title: 'Runaway', src: 'https://drive.google.com/uc?export=download&id=19lmWoHKuU2NhXi2TzqMuP_ZKgLNuTkME' },
                { title: 'Sarkaare', src: 'https://drive.google.com/uc?export=download&id=1Dge_iciJxBRwLkITcjPPZBl_tMND39At' },
                { title: 'Good Trip', src: 'https://drive.google.com/uc?export=download&id=1KgDYW8Hqh6ITuEIeSiGzbW6KQGyaAknf' },
                { title: 'Tum Saath Rehnaa', src: 'https://drive.google.com/uc?export=download&id=1OqBhXDNPrOlZVG1Hac7abQePmpNRHvWm' },
                { title: 'No Loss', src: 'https://drive.google.com/uc?export=download&id=1VVME9O_rI1BFhwqu9cBTTuSaz4YeA9CS' },
                { title: 'Legends', src: 'https://drive.google.com/uc?export=download&id=1WPeHOYIGnRFqLRtqXc0RFcUmYAOKNep4' },
                { title: 'Tu Jaana Na Piya', src: 'https://drive.google.com/uc?export=download&id=1_5AEoj_aX12VNPY2GHMOQ6sAt0KlIdup' },
                { title: 'Legends (B Side)', src: 'https://drive.google.com/uc?export=download&id=1iL28CdxZhrJmhPXzvVRAPuJExpj52owK' },
                { title: 'We Are The Ones', src: 'https://drive.google.com/uc?export=download&id=1zP-BOrt65lkIy1yayAOQirxBA5T3QI_d' },
            ]
        },
        {
            name: 'Champagne Talk',
            cover: 'albums/album3/cover.jpeg',
            tracks: [
                { title: 'Na Ja Tu', src: 'https://drive.google.com/uc?export=download&id=16HtPF-k3GxF4SZFy1FkBSlDEj2Dy_oTK' },
                { title: 'OOPS', src: 'https://drive.google.com/uc?export=download&id=1Jg6UDkMVShpW2rDjD_-TW_4HqKXXmy1x' },
                { title: 'Broken Dreams', src: 'https://drive.google.com/uc?export=download&id=1KogON3wnOKrBicQl80pD6eGwhqiasheg' },
                { title: 'Maan Meri Jaan', src: 'https://drive.google.com/uc?export=download&id=1Qzuthtllmbk4Q6wgwSKHS4yTx_BlmQ-x' },
                { title: 'Dejalo', src: 'https://drive.google.com/uc?export=download&id=1TkD07ym5B9a_KZnGIk6DHqe7VGBOWWqk' },
                { title: 'Pablo', src: 'https://drive.google.com/uc?export=download&id=1V5VZeEvBo-WqXHCZML7y4Rf9Ob3pk8O4' },
                { title: 'Champagne Talk', src: 'https://drive.google.com/uc?export=download&id=1lu2JIEwdHlD7CtZiQIWgQe-oUKTK8WI_' },
                { title: 'Me & Me', src: 'https://drive.google.com/uc?export=download&id=1qG-Vb7Asr7gJvZ777TMn2rF44UBj48uT' },
            ]
        },
        {
            name: 'Gorilla Bounce',
            cover: 'albums/album4/cover.jpg',
            tracks: [
                { title: 'Picasso', src: 'https://drive.google.com/uc?export=download&id=15GuhaC7LOf_kXRLSvDeL1EvP_twnLCBI' },
                { title: 'Blanko', src: 'https://drive.google.com/uc?export=download&id=18HfP1Rt_dEhZQRqIADIu-jF-AGkkaDdH' },
                { title: 'Saloot', src: 'https://drive.google.com/uc?export=download&id=1AxwSCVbp3LbYsPFUHFWSXkTyp7X0RGrx' },
                { title: 'GodFather', src: 'https://drive.google.com/uc?export=download&id=1Cu8IFC1DavnNjZds_GPVxVv-mWMttmsv' },
                { title: 'Casanova', src: 'https://drive.google.com/uc?export=download&id=1Gs5HtNns6gjig-QlJWCTSzznh3TcLDap' },
                { title: 'Desi Dan Bilzerian', src: 'https://drive.google.com/uc?export=download&id=1JulmqcKhpaoGnoIgkoKhdE6viFCRtUCe' },
                { title: 'Koo Koo', src: 'https://drive.google.com/uc?export=download&id=1TGewNAXFLR6CKvFWCyCvnIqZV1Cc3NVF' },
                { title: 'Shaamein', src: 'https://drive.google.com/uc?export=download&id=1VOh9SUEUdAHlF9xx4r6PuSVF29g41Btv' },
                { title: 'Mai Bas Kehti Nahi', src: 'https://drive.google.com/uc?export=download&id=1iDCh143fCadh1QNjyAzaD5Y4abg9PTGN' },
                { title: 'ERA', src: 'https://drive.google.com/uc?export=download&id=1vDMQGyZ6R-aVzrT6D8DQL6G-OPHfuRKr' },
                { title: 'Tera Hua Na Kabhi', src: 'https://drive.google.com/uc?export=download&id=1yceaiB_kU9efjSQkmEKfvNFXocO1YxHl' },
            ]
        },
        {
            name: 'Monopoly Moves',
            cover: 'albums/album5/cover.jpeg',
            tracks: [
                { title: 'Goat Shit', src: 'https://drive.google.com/uc?export=download&id=17LejM7YdUej5j0eqRCIMugOdBJ_z0Bx5' },
                { title: 'Still The Same', src: 'https://drive.google.com/uc?export=download&id=1Bl5wftY5Doy1sMZzfiAPxcD0DDfMlgk4' },
                { title: 'Way Bigger', src: 'https://drive.google.com/uc?export=download&id=1BoTAz82HgNOpr0-BLFm5E9U26MqFGvUR' },
                { title: 'Bawe Main Check', src: 'https://drive.google.com/uc?export=download&id=1En-TUkdJO6cyOeOYVT5tnxbOz3eJkyOi' },
                { title: 'Misfit', src: 'https://drive.google.com/uc?export=download&id=1I4hVhZDOYKbI_q8uYBZwq6WtluDXLEos' },
                { title: 'Kodak', src: 'https://drive.google.com/uc?export=download&id=1M2V0RxVfM2BMX5guk3atWsRa-HsaKDSC' },
                { title: 'SAZA', src: 'https://drive.google.com/uc?export=download&id=1ODHyDrHAaU1TmOPCeP89XjRiv5RdNFgO' },
                { title: 'Pyaar Humara', src: 'https://drive.google.com/uc?export=download&id=1QSW0G_K4GzNPRell5LehdGngGFGH5Z_K' },
                { title: 'Fuck What They Say', src: 'https://drive.google.com/uc?export=download&id=1Wb5r3B3jC41XaTfFjYBoAieqh6CIOHXO' },
                { title: 'Warcry', src: 'https://drive.google.com/uc?export=download&id=1dWbPQIn0uui1c2e3KClXQAFTfAufDRrv' },
                { title: 'Machiney', src: 'https://drive.google.com/uc?export=download&id=1lSxuWNf52fCG1e82c4bsZOviyrBhlfb3' },
                { title: 'Supreme Leader', src: 'https://drive.google.com/uc?export=download&id=1lhxf5UhydPOHB1ikHdhtkcd6Th2aMpTk' },
                { title: 'Suits & Streets', src: 'https://drive.google.com/uc?export=download&id=1oKUYccg_dVkQ_YX95MRJwvcpRnDN5lhX' },
                { title: "Can't Afford", src: 'https://drive.google.com/uc?export=download&id=1oQPpyDtCR3Xn93J8QQtFT_8_pc13oc3W' },
                { title: 'Tere Ho Ke', src: 'https://drive.google.com/uc?export=download&id=1vekuerya5IrXUJ5na283Lh_e4Nx35pxF' },
                { title: 'Delulu Dance', src: 'https://drive.google.com/uc?export=download&id=1ybM4sfUB1p9Z11-6qxhd3YchZV9idagF' },
            ]
        },
        {
            name: 'Bonus Projects',
            cover: 'albums/album6/cover.jpg',
            tracks: [
                { title: 'Baazi', src: 'https://drive.google.com/uc?export=download&id=1D1qz7Udct8kTMik0sVyqk04Y4beRd5Yt' },
                { title: 'Ektarfa', src: 'https://drive.google.com/uc?export=download&id=1MZQOanbRt4ZK34SQZvODNkkNFyzNlfpp' },
                { title: 'Sinner', src: 'https://drive.google.com/uc?export=download&id=1MqIil6_wtFL-PgKREk4DHkHbnJzgS8A0' },
                { title: 'Laapata', src: 'https://drive.google.com/uc?export=download&id=1Onwee4nKpqYMJlUvPtEWtQtM5iqOXIGW' },
                { title: 'Hum Tumse', src: 'https://drive.google.com/uc?export=download&id=1Z0iblUQodfGlqwOCbNw1SHRQewQu_3db' },
                { title: 'Teri Ho Na Saki', src: 'https://drive.google.com/uc?export=download&id=1awwyy0-ehJ3x10xqrKWI1dKRpEpgeKAD' },
                { title: "Alpha's Goodbye", src: 'https://drive.google.com/uc?export=download&id=1bC_Vh-vRFUqYb6pUAqjaof9JoBAMbST_' },
                { title: 'Till The End', src: 'https://drive.google.com/uc?export=download&id=1bw71zaqpcjPkNd6UG2aWwWayPK-mONEb' },
                { title: 'Stay', src: 'https://drive.google.com/uc?export=download&id=1hLPACzgbqBcPzvvIimyICAq-eAilFllW' },
            ]
        }
    ];

    // Secret Playlists with Updated Google Drive Links
    const secretPlaylists = {
        "discord2019": {
            cover: "albums/secret/cover.png", // Keep cover local if desired
            tracks: [
                { "name": "Hidden Gem 1", "src": "https://drive.google.com/uc?export=download&id=11Q6cRd2Q76E6l7L246_ZXZBU0bBR9GJG" },
                { "name": "Hidden Gem 2", "src": "https://drive.google.com/uc?export=download&id=12hfXA9BqOuROtUPycDEdGmU9lK4ilwEL" },
                { "name": "Hidden Gem 3", "src": "https://drive.google.com/uc?export=download&id=1DIkvboIgKBYoDiLtg52vaA8EDcl5BL5M" },
                { "name": "Hidden Gem 4", "src": "https://drive.google.com/uc?export=download&id=1I6hQ59GwbG7E7VyZ-RYtNf4gTU2_CXgZ" },
                { "name": "Hidden Gem 5", "src": "https://drive.google.com/uc?export=download&id=1Ja6rNXT2whiQSdK4k1YH2htIxyGWoaIX" },
                { "name": "Hidden Gem 6", "src": "https://drive.google.com/uc?export=download&id=1Mg11gCdKVnSC4TCLuFg5Ww2LYfrrNEKu" },
                { "name": "Hidden Gem 7", "src": "https://drive.google.com/uc?export=download&id=1NWmWgIg6SIxeewUXAhFpolHNb4CCQo-G" },
                { "name": "Hidden Gem 8", "src": "https://drive.google.com/uc?export=download&id=1SCYvREUTHKfHO4PVAftGjMFcXYUZIffr" },
                { "name": "Hidden Gem 9", "src": "https://drive.google.com/uc?export=download&id=1VWdavXUcJfn1oy45J6clRu-jUQZERoxd" },
                { "name": "Hidden Gem 10", "src": "https://drive.google.com/uc?export=download&id=1VoUPnjSpHJJT70mIJhvJcz8oovvZohIZ" },
                { "name": "Hidden Gem 11", "src": "https://drive.google.com/uc?export=download&id=1YzZZuIU2V72CiaoLQX3O69fo1dfR__jM" },
                { "name": "Hidden Gem 12", "src": "https://drive.google.com/uc?export=download&id=1cSJolIX4eU7NYzWKT40RAHktb9hhqPgE" },
                { "name": "Hidden Gem 13", "src": "https://drive.google.com/uc?export=download&id=1crzgEgmQm-9cTJFfZqfNjsRrPWXIQ8va" },
                { "name": "Hidden Gem 14", "src": "https://drive.google.com/uc?export=download&id=1d7FqDm6ZyRJ3KENoJgsBllpaxOQgbQEI" },
                { "name": "Hidden Gem 15", "src": "https://drive.google.com/uc?export=download&id=1ebe5uKU0eRWCKWQSq4TbF6ptfcelMopv" },
                { "name": "Hidden Gem 16", "src": "https://drive.google.com/uc?export=download&id=1ks-KbS0B41T3JauahTNEygNkYLx51IO0" },
                { "name": "Hidden Gem 17", "src": "https://drive.google.com/uc?export=download&id=1l3sOw-RuIF2QG9drsPgeOsA10CgIQObJ" },
                { "name": "Hidden Gem 18", "src": "https://drive.google.com/uc?export=download&id=1l8SRZwMII7Y8KE-JJAmkKy2yoAHLvAm3" },
                { "name": "Hidden Gem 19", "src": "https://drive.google.com/uc?export=download&id=1lJHMGOwZRKF-R5jILnvDnWatbmUfUmE0" },
                { "name": "Hidden Gem 20", "src": "https://drive.google.com/uc?export=download&id=1llxjp57GBvQ6QrXH1ewEZNJ8y5lAszQW" },
                { "name": "Hidden Gem 21", "src": "https://drive.google.com/uc?export=download&id=1ni_vuNBHEDWJjXWVi01-G_l5lI9UgT6z" },
                { "name": "Hidden Gem 22", "src": "https://drive.google.com/uc?export=download&id=1s6ixk8sG5qP-e3QbO4Y380gj6gRoCsiE" },
                { "name": "Hidden Gem 23", "src": "https://drive.google.com/uc?export=download&id=1vnj_oogMeTeww60ilTHiwTm3r7Xiekam" },
                { "name": "Hidden Gem 24", "src": "https://drive.google.com/uc?export=download&id=1xvkd_2308dpzKdaRHAie-x0DDtVslNn9" },
                { "name": "Hidden Gem 25", "src": "https://drive.google.com/uc?export=download&id=1yrKH6eB9raK3KN_q4pmjzYB_ywKkwY_i" },
                { "name": "Hidden Gem 26", "src": "https://drive.google.com/uc?export=download&id=1ytLo8wom1DpBc4SDG0IVDQfLmmm0493N" },
                { "name": "Hidden Gem 27", "src": "https://drive.google.com/uc?export=download&id=1zPmP7DZHrrdaqYlwrDmHsPokfKHV25U8" }
            ]
        }
        // Add other secret playlists here if necessary, updating their track srcs
    };

    // --- Load Albums in Sidebar ---
    albums.forEach((album, index) => {
        const li = document.createElement('li');
        li.textContent = album.name;
        li.addEventListener('click', () => loadAlbum(index));
        albumList.appendChild(li);
    });

    // --- Load Album Function ---
    function loadAlbum(index) {
        // Prevent loading if the index is out of bounds for regular albums
        if (index < 0 || index >= albums.length) {
             console.error("Invalid album index:", index);
             return;
        }
        currentAlbumIndex = index;
        currentPlaylist = albums[index].tracks; // Set current playlist to the selected album's tracks
        albumCover.src = albums[index].cover; // Update cover art
        trackListContainer.innerHTML = ''; // Clear previous track list
        currentTrackIndex = 0; // Reset track index

        // Populate the track list display
        albums[index].tracks.forEach((track, trackIndex) => {
            const trackItem = document.createElement("li");
            trackItem.textContent = track.title;
            trackItem.dataset.index = trackIndex; // Store index for easy lookup
            trackItem.addEventListener("click", () => playTrack(trackIndex, false)); // Play track on click
            trackListContainer.appendChild(trackItem);
        });

        // Optionally, auto-play the first track of the loaded album
        if (currentPlaylist.length > 0) {
            playTrack(0, false);
        } else {
             // Handle case where album has no tracks
             trackTitle.textContent = "No tracks in this album";
             audioPlayer.src = ""; // Clear audio source
             playPauseBtn.textContent = '▶'; // Set to Play icon
        }
    }

    // --- Unlock Secret Playlist ---
    unlockBtn.addEventListener("click", () => {
        const enteredPassword = passwordInput.value.trim();
        if (secretPlaylists[enteredPassword]) {
            loadPlaylist(secretPlaylists[enteredPassword]); // Load the matched secret playlist
            passwordInput.value = ''; // Clear password field
        } else {
            alert("Wrong password! Try again.");
        }
    });

    // --- Load Secret Playlist Function ---
    function loadPlaylist(playlist) {
        trackListContainer.innerHTML = ""; // Clear previous track list
        albumCover.src = playlist.cover; // Set cover for the secret playlist
        currentPlaylist = playlist.tracks; // Set current playlist to secret tracks
        currentAlbumIndex = null; // Indicate we are not playing a standard album
        currentTrackIndex = 0; // Reset track index

        // Populate the track list display
        playlist.tracks.forEach((track, index) => {
            const trackItem = document.createElement("li");
            trackItem.textContent = track.name; // Use 'name' field for secret tracks
            trackItem.dataset.index = index;
            trackItem.addEventListener("click", () => playTrack(index, true)); // Mark as secret playlist
            trackListContainer.appendChild(trackItem);
        });

         // Optionally, auto-play the first track
        if (currentPlaylist.length > 0) {
            playTrack(0, true);
        } else {
             trackTitle.textContent = "Secret playlist is empty";
             audioPlayer.src = "";
             playPauseBtn.textContent = '▶';
        }
    }

    // --- Play Track Function ---
    // isSecret flag might not be needed if currentAlbumIndex check is used, but kept for clarity
    function playTrack(index, isSecretPlaylist = false) {
        if (!currentPlaylist || index < 0 || index >= currentPlaylist.length) {
             console.error("Invalid track index or playlist:", index, currentPlaylist);
             return; // Exit if playlist is empty or index is invalid
        }

        currentTrackIndex = index;
        const track = currentPlaylist[index];

        console.log("Playing track:", track); // Debugging

        audioPlayer.src = track.src; // Set the audio source to the Google Drive URL
        audioPlayer.load(); // Important: Load the new source
        audioPlayer.play().then(() => {
            playPauseBtn.textContent = '⏸'; // Change button to Pause on successful play start
        }).catch(error => {
            console.error("Error playing track:", error);
            // Handle potential errors (e.g., network issue, unsupported format)
             playPauseBtn.textContent = '▶'; // Reset to Play icon on error
             trackTitle.textContent = "Error loading track";
        });

        trackTitle.textContent = track.title || track.name; // Display title or name

        highlightActiveTrack(index);

        // Update album cover only if playing from a regular album
        if (!isSecretPlaylist && currentAlbumIndex !== null && albums[currentAlbumIndex]) {
             albumCover.src = albums[currentAlbumIndex].cover;
        } else if (isSecretPlaylist && secretPlaylists[passwordInput.value.trim()]) {
             // If needed, update cover based on the secret playlist that was loaded
             // This assumes passwordInput still holds the key, might need better state management
             albumCover.src = secretPlaylists[passwordInput.value.trim()].cover;
        }
    }

    // --- Highlight Active Track ---
    function highlightActiveTrack(index) {
        // Remove active class from all tracks first
        document.querySelectorAll("#track-list li").forEach(li => li.classList.remove("active-track"));
        // Add active class to the currently playing track
        // QuerySelector uses 1-based indexing for nth-child
        const activeTrackElement = document.querySelector(`#track-list li:nth-child(${index + 1})`);
        if (activeTrackElement) {
             activeTrackElement.classList.add("active-track");
        }
    }

    // --- Audio Player Event Listeners ---

    // Auto-play next track when one ends
    audioPlayer.addEventListener("ended", () => {
        currentTrackIndex++;
        // Loop back to the first track if the end of the playlist is reached
        if (currentTrackIndex >= currentPlaylist.length) {
            currentTrackIndex = 0;
        }
        playTrack(currentTrackIndex, currentAlbumIndex === null); // Pass secret flag based on currentAlbumIndex
    });

    // Next button
    nextBtn.addEventListener("click", () => {
        if (!currentPlaylist || currentPlaylist.length === 0) return;
        currentTrackIndex = (currentTrackIndex + 1) % currentPlaylist.length;
        playTrack(currentTrackIndex, currentAlbumIndex === null);
    });

    // Previous button
    prevBtn.addEventListener("click", () => {
         if (!currentPlaylist || currentPlaylist.length === 0) return;
        currentTrackIndex = (currentTrackIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
        playTrack(currentTrackIndex, currentAlbumIndex === null);
    });

    // Play/Pause button
    playPauseBtn.addEventListener("click", () => {
        if (!audioPlayer.src) return; // Don't do anything if no track is loaded
        if (audioPlayer.paused) {
            audioPlayer.play().then(() => {
                 playPauseBtn.textContent = '⏸';
            }).catch(e => console.error("Play error:", e));
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = '▶';
        }
    });

    // --- Progress Bar Update ---
    function updateProgressBar() {
        // Only update if audio has loaded metadata (duration is known)
        if (audioPlayer.duration && isFinite(audioPlayer.duration)) {
            const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            // Use value for the input range itself
            progressBar.value = percentage;
            // Use CSS variable for the visual track fill
            progressBar.style.setProperty("--progress-fill", `${percentage}%`);
        } else {
             progressBar.value = 0;
             progressBar.style.setProperty("--progress-fill", `0%`);
        }
        // Keep updating smoothly
        // requestAnimationFrame(updateProgressBar); // Using timeupdate listener instead
    }

    // Update progress bar as time updates
    audioPlayer.addEventListener("timeupdate", updateProgressBar);

    // Seek functionality when user interacts with progress bar
    progressBar.addEventListener("input", (event) => {
        if (audioPlayer.duration && isFinite(audioPlayer.duration)) {
            const seekTime = (event.target.value / 100) * audioPlayer.duration;
            audioPlayer.currentTime = seekTime;
        }
    });

    // --- Volume Control ---
    volumeControl.addEventListener("input", () => {
        audioPlayer.volume = volumeControl.value;
    });

    // --- Time Formatting ---
    function formatTime(seconds) {
        const roundedSeconds = Math.floor(seconds || 0); // Default to 0 if NaN or undefined
        let mins = Math.floor(roundedSeconds / 60);
        let secs = roundedSeconds % 60;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }

    // Update current time display
    audioPlayer.addEventListener('timeupdate', () => {
        currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    });

    // Update total duration display when metadata loads
    audioPlayer.addEventListener('loadedmetadata', () => {
        if (audioPlayer.duration && isFinite(audioPlayer.duration)) {
             totalDurationEl.textContent = formatTime(audioPlayer.duration);
             progressBar.value = 0; // Reset progress bar visually
             progressBar.style.setProperty("--progress-fill", `0%`);
        } else {
             totalDurationEl.textContent = "0:00"; // Handle cases where duration is not available
        }
    });

    // Error handling for audio element
     audioPlayer.addEventListener('error', (e) => {
        console.error("Audio player error:", audioPlayer.error);
        trackTitle.textContent = "Error loading track";
        playPauseBtn.textContent = '▶'; // Reset button
        // Optionally display a message to the user
    });

    // --- Security Enhancements ---
    document.addEventListener("contextmenu", event => event.preventDefault());
    document.addEventListener("keydown", event => {
        // Check specifically for Ctrl or Cmd key along with the specific keys
        if ((event.ctrlKey || event.metaKey) && ["u", "s", "i", "j", "c"].includes(event.key.toLowerCase())) {
            event.preventDefault();
        }
         // Also block F12
         if (event.key === "F12") {
             event.preventDefault();
         }
    });

    // --- Initial Load ---
    // Load the first album when the page is ready
    loadAlbum(0);

}); // End DOMContentLoaded