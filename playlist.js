// https://github.com/petersf01/cs81-module6a-review


// This constructor function creates a Playlist object with a name.
// It initializes an empty array for songs and sets the current song to null.
function Playlist(name) {
  // The use of this refers to the instance of Playlist being created.
  this.name = name;
  this.songs = [];
  this.currentSong = null;
}

// This adds a addsong method to the Playlist.
// Since it starts with Playlist.prototype, it can be used by all instances of Playlist.
Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle);
};

// Adds another method playFist to the Playlist prototype.
// Also shared by all instances of Playlist.
Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {
    // Sets the current song to the first song in the playlist.
    this.currentSong = this.songs[0];
    console.log("Now playing:", this.currentSong);
  }
};

// This method skips the current song and plays the next one in the playlist.
Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {
    // Removes the first song from the playlist and sets the current song to the next one.
    // Suggestion: rather remove the first song, you could also just set the currentSong to the next one.
    // Also instead of storing the current song name you could just store the index of the current song.
    this.songs.shift();
    this.currentSong = this.songs[0];
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip.");
  }
};

// This method lists all songs in the playlist.
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);
  console.log("Songs:", this.songs.join(", "));
};

// This method plays the last song in the playlist.
Playlist.prototype.playLast = function() {
  if (this.songs.length > 0) {
    // Sets the current song to the last song in the playlist.
    this.currentSong = this.songs[this.songs.length - 1];
    console.log("Now playing:", this.currentSong);
  } else {
    console.log("No songs in the playlist.");
  }
};

// This creates a new Playlist instance.
let myMix = new Playlist("My Chill Mix");

// Using the methodsof the Playlist instance.
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.listSongs();
myMix.playLast();
