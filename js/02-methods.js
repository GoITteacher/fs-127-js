/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */
//!=========================================
const dog = {
  name: 'Lord',
  age: 2,
  breed: 'Spaniel',
  color: 'Gold',

  sayWoof() {
    console.log('woof woof');
  },

  eat() {
    console.log('Ням ням');
  },

  sleep() {
    console.log('Zzzzz');
  },
};

//!=========================================

// const playlist = {
//   name: 'My amazing playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   changeName(newName) {
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
//   showTrackList() {
//     for (const track of this.tracks) {
//       console.log(track);
//     }
//   },
// };

// playlist.showTrackList();
//!=========================================
// console.log(playlist.getTrackCount());

// playlist.changeName("New playlist name");

// playlist.addTrack("new track 1");
// console.log(playlist.getTrackCount());

// playlist.addTrack("new track 2");
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);
// console.log(playlist);

//!=========================================

// const contactList = {
//   list: [],
//   backgorund: 'white',
//   blackList: [],
//   addContact() {},
//   addContactToBlackList() {},
//   showContacts() {},
//   findContact() {},
// };
//!=========================================
