const albums = [
    {
        name: 'The Carnival Album',
        cover: 'albums/album1/cover.jpeg',
        tracks: [
            { title: '90s', src: 'albums/album1/track1.mp3' },
            { title: 'Dracula', src: 'albums/album1/track2.mp3' },
            { title: 'IICONIC', src: 'albums/album1/track3.mp3' },
            { title: 'Let The Eyes Talk', src: 'albums/album1/track4.mp3' },
            { title: "She Don't Give A", src: 'albums/album1/track5.mp3' },
            { title: 'Thoda Samjho', src: 'albums/album1/track6.mp3' },
            { title: 'Mafiia', src: 'albums/album1/track7.mp3' },
            { title: 'Tu Aake Dekhle', src: 'albums/album1/track8.mp3' }
        ]
    },
    {
        name: 'New Life',
        cover: 'albums/album2/cover.webp',
        tracks: [
            { title: 'Aafat', src: 'albums/album2/track1.mp3' },
            { title: 'Crown', src: 'albums/album2/track2.mp3' },
            { title: 'Runaway', src: 'albums/album2/track3.mp3' },
            { title: 'Sarkaare', src: 'albums/album2/track4.mp3' },
            { title: 'Good Trip', src: 'albums/album2/track5.mp3' },
            { title: 'Tum Saath Rehnaa', src: 'albums/album2/track6.mp3' },
            { title: 'No Loss', src: 'albums/album2/track7.mp3' },
            { title: 'Legends', src: 'albums/album2/track8.mp3' },
            { title: 'Tu Jaana Na Piya', src: 'albums/album2/track9.mp3' },
            { title: 'Legends (B Side)', src: 'albums/album2/track10.mp3' },
            { title: 'We Are The Ones', src: 'albums/album2/track11.mp3' },
        ]
    },
    {
        name: 'Champagne Talk',
        cover: 'albums/album3/cover.jpeg',
        tracks: [
            { title: 'Na Ja Tu', src: 'albums/album3/track1.mp3' },
            { title: 'OOPS', src: 'albums/album3/track2.mp3' },
            { title: 'Broken Dreams', src: 'albums/album3/track3.mp3' },
            { title: 'Maan Meri Jaan', src: 'albums/album3/track4.mp3' },
            { title: 'Dejalo', src: 'albums/album3/track5.mp3' },
            { title: 'Pablo', src: 'albums/album3/track6.mp3' },
            { title: 'Champagne Talk', src: 'albums/album3/track7.mp3' },
            { title: 'Me & Me', src: 'albums/album3/track8.mp3' },
        ]
    },
    {
        name: 'Gorilla Bounce',
        cover: 'albums/album4/cover.jpg',
        tracks: [
            { title: 'Picasso', src: 'albums/album4/track1.mp3' },
            { title: 'Blanko', src: 'albums/album4/track2.mp3' },
            { title: 'Saloot', src: 'albums/album4/track3.mp3' },
            { title: 'GodFather', src: 'albums/album4/track4.mp3' },
            { title: 'Casanova', src: 'albums/album4/track5.mp3' },
            { title: 'Desi Dan Bilzerian', src: 'albums/album4/track6.mp3' },
            { title: 'Koo Koo', src: 'albums/album4/track7.mp3' },
            { title: 'Shaamein', src: 'albums/album4/track8.mp3' },
            { title: 'Mai Bas Kehti Nahi', src: 'albums/album4/track9.mp3' },
            { title: 'ERA', src: 'albums/album4/track10.mp3' },
            { title: 'Tera Hua Na Kabhi', src: 'albums/album4/track11.mp3' },
        ]
    },
    {
        name: 'Monopoly Moves',
        cover: 'albums/album5/cover.jpeg',
        tracks: [
            { title: 'Goat Shit', src: 'albums/album5/track1.mp3' },
            { title: 'Still The Same', src: 'albums/album5/track2.mp3' },
            { title: 'Way Bigger', src: 'albums/album5/track3.mp3' },
            { title: 'Bawe Main Check', src: 'albums/album5/track4.mp3' },
            { title: 'Misfit', src: 'albums/album5/track5.mp3' },
            { title: 'Kodak', src: 'albums/album5/track6.mp3' },
            { title: 'SAZA', src: 'albums/album5/track7.mp3' },
            { title: 'Pyaar Humara', src: 'albums/album5/track8.mp3' },
            { title: 'Fuck What They Say', src: 'albums/album5/track9.mp3' },
            { title: 'Warcry', src: 'albums/album5/track10.mp3' },
            { title: 'Machiney', src: 'albums/album5/track11.mp3' },
            { title: 'Supreme Leader', src: 'albums/album5/track12.mp3' },
            { title: 'Suits & Streets', src: 'albums/album5/track13.mp3' },
            { title: "Can't Afford", src: 'albums/album5/track14.mp3' },
            { title: 'Tere Ho Ke', src: 'albums/album5/track15.mp3' },
            { title: 'Delulu Dance', src: 'albums/album5/track16.mp3' },
        ]
    },
    {
        name: 'Bonus Projects',
        cover: 'albums/album6/cover.jpg',
        tracks: [
            { title: 'Baazi', src: 'albums/album6/track1.mp3' },
            { title: 'Ektarfa', src: 'albums/album6/track2.mp3' },
            { title: 'Sinner', src: 'albums/album6/track3.mp3' },
            { title: 'Laapata', src: 'albums/album6/track4.mp3' },
            { title: 'Hum Tumse', src: 'albums/album6/track5.mp3' },
            { title: 'Teri Ho Na Saki', src: 'albums/album6/track6.mp3' },
            { title: "Alpha's Goodbye", src: 'albums/album6/track7.mp3' },
            { title: 'Till The End', src: 'albums/album6/track8.mp3' },
        ]
    }
];

const secretAlbum = {
    name: "Secret Album",
    cover: "albums/secret/cover.png",
    tracks: [
        { title: "Hidden Gem 1", src: "albums/secret/track1.mp3" },
        { title: "Hidden Gem 2", src: "albums/secret/track2.mp3" },
        { title: "Hidden Gem 3", src: "albums/secret/track3.mp3" },
        { title: "Hidden Gem 4", src: "albums/secret/track4.mp3" },
        { title: "Hidden Gem 5", src: "albums/secret/track5.mp3" },
        { title: "Hidden Gem 6", src: "albums/secret/track6.mp3" },
        { title: "Hidden Gem 7", src: "albums/secret/track7.mp3" },
        { title: "Hidden Gem 8", src: "albums/secret/track8.mp3" },
        { title: "Hidden Gem 9", src: "albums/secret/track9.mp3" },
        { title: "Hidden Gem 10", src: "albums/secret/track10.mp3" },
        { title: "Hidden Gem 11", src: "albums/secret/track11.mp3" },
        { title: "Hidden Gem 12", src: "albums/secret/track12.mp3" },
        { title: "Hidden Gem 13", src: "albums/secret/track13.mp3" },
        { title: "Hidden Gem 14", src: "albums/secret/track14.mp3" },
        { title: "Hidden Gem 15", src: "albums/secret/track15.mp3" },
        { title: "Hidden Gem 16", src: "albums/secret/track16.mp3" },
        { title: "Hidden Gem 17", src: "albums/secret/track17.mp3" },
        { title: "Hidden Gem 18", src: "albums/secret/track18.mp3" },
        { title: "Hidden Gem 19", src: "albums/secret/track19.mp3" },
        { title: "Hidden Gem 20", src: "albums/secret/track20.mp3" },
        { title: "Hidden Gem 21", src: "albums/secret/track21.mp3" },
        { title: "Hidden Gem 22", src: "albums/secret/track22.mp3" },
        { title: "Hidden Gem 23", src: "albums/secret/track23.mp3" },
        { title: "Hidden Gem 24", src: "albums/secret/track24.mp3" },
        { title: "Hidden Gem 25", src: "albums/secret/track25.mp3" },
        { title: "Hidden Gem 26", src: "albums/secret/track26.mp3" },
        { title: "Hidden Gem 27", src: "albums/secret/track27.mp3" }
    ]
};


const albumList = document.getElementById('album-list');
const trackList = document.getElementById('track-list');
const albumCover = document.getElementById('album-cover');
const trackTitle = document.getElementById('track-title');
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentTimeEl = document.getElementById('current-time');
const totalDurationEl = document.getElementById('total-duration');
const progressBar = document.getElementById('progress-bar');
const volumeControl = document.getElementById('volume-control');

let currentAlbumIndex = 0;
let currentTrackIndex = 0;

// Load Albums
albums.forEach((album, index) => {
    const li = document.createElement('li');
    li.textContent = album.name;
    li.addEventListener('click', () => loadAlbum(index));
    albumList.appendChild(li);
});

// Load Album Function
function loadAlbum(index) {
    currentAlbumIndex = index;
    const album = albums[index];
    albumCover.src = album.cover;
    trackList.innerHTML = '';

    album.tracks.forEach((track, trackIndex) => {
        const trackItem = document.createElement('li');
        trackItem.textContent = track.title;
        trackItem.addEventListener('click', () => playTrack(trackIndex));
        trackList.appendChild(trackItem);
    });

    playTrack(0); // Automatically play the first track when an album is loaded
}



// Play Track
function playTrack(index) {
    currentTrackIndex = index;
    const track = albums[currentAlbumIndex].tracks[index];
    audioPlayer.src = track.src;
    trackTitle.textContent = track.title;
    audioPlayer.play();
    playPauseBtn.textContent = '⏸'; // Pause icon

    // Highlight the active track
    const trackItems = document.querySelectorAll('#track-list li');
    trackItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active-track');
        } else {
            item.classList.remove('active-track');
        }
    });
}

audioPlayer.addEventListener("ended", () => {
    currentTrackIndex++;
    if (currentTrackIndex >= albums[currentAlbumIndex].tracks.length) {
        currentTrackIndex = 0; // Loop back to first track if needed
    }
    playTrack(currentTrackIndex);
});


audioPlayer.addEventListener("ended", () => {
    currentTrackIndex++;
    if (currentTrackIndex >= albums[currentAlbumIndex].tracks.length) {
        currentTrackIndex = 0; // Loop back to first track if needed
    }
    playTrack(currentTrackIndex);
});

document.getElementById("secret-btn").addEventListener("click", () => {
    albums.push(secretAlbum); // Add secret album to the albums list
    loadAlbum(albums.length - 1); // Load and play the secret album
});


// Play/Pause Toggle
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = '⏸'; // Pause icon
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = '▶'; // Play icon
    }
});

// Next & Previous
nextBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % albums[currentAlbumIndex].tracks.length;
    playTrack(currentTrackIndex);
});

prevBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + albums[currentAlbumIndex].tracks.length) % albums[currentAlbumIndex].tracks.length;
    playTrack(currentTrackIndex);
});

// Progress Bar
audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress || 0;
    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
});

progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
});

// Volume Control
volumeControl.addEventListener('input', () => {
    audioPlayer.volume = volumeControl.value;
});

// Format time from seconds to mm:ss
function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

// Set total duration when metadata loads
audioPlayer.addEventListener('loadedmetadata', () => {
    totalDurationEl.textContent = formatTime(audioPlayer.duration);
});

// Load the first album by default
loadAlbum(0);
