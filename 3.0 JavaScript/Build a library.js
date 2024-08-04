class Media {
    constructor(title) {
        this._title =  title;
        this._ratings = [];
        this._isCheckedOut = false;
       
    }
    // getters for title, isCheckedOut and ratings
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    toggleCheckOutStatus() {
       this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(inputValue) {
        if(inputValue <= 5) {
            this._ratings.push(inputValue);
        } else {
            console.log('Rating have to be under 5');
        }
        
    }
    // sum all rating numbers in array and divide it with the length of array
    getAverageRating() {
        let sum = this._ratings.reduce((accumulator, rating) => accumulator + rating, 0);  
        return  Math.floor(sum / this._ratings.length);
    }
    set isCheckedOut(checkIn) {
        this._isCheckedOut = checkIn;
    }
     
}
// book class
class Book extends Media {
    constructor(author, title, pages, genre ) {
        super(title);
        this._author = author;
        this._pages = pages;
        this._genre = genre;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}
// movie class
class Movie extends Media {
    constructor(director, title, runTime, movieCast) {
        super(title);
        this._director = director;
        this._runTime = runTime;
        this._movieCast = movieCast;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._director;
    }
    get movieCast() {
        return this._movieCast;
    }
}
// cd class
class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;  
    }
    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
    // get the randomly sorted array of all the songs in the songs property
    shuffle() {
       return this._songs.sort(() => Math.random() - 0.5);
    }
}
// start Book 
// instance Book
const blockChainTechnology = new Book('Bitcoin Standard', 'Fiat Standard','Bitcoin Evangelist');
blockChainTechnology.toggleCheckOutStatus();

console.log(blockChainTechnology.isCheckedOut);
// add ratings 
blockChainTechnology.addRating(4);
blockChainTechnology.addRating(5);
blockChainTechnology.addRating(5);

console.log(blockChainTechnology.getAverageRating());
//Start Movie 
const speed = new Movie('Avengers 1', 'Avengers 2', 'Avengers 3', 'Avengers 4');

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(2);
speed.addRating(3);

console.log(speed.getAverageRating());
//Start Cd 
const awesomeVolumeMix = new CD('1st Track', '2nd Track', ['first song', 'second song', 'third song', 'Another song', 'Last song']);

awesomeVolumeMix.toggleCheckOutStatus();
console.log(awesomeVolumeMix.isCheckedOut);

awesomeVolumeMix.addRating(4);
awesomeVolumeMix.addRating(5);
awesomeVolumeMix.addRating(5);
// return shuffled songs
console.log(awesomeVolumeMix.shuffle());
