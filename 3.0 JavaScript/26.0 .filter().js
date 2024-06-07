// Call .filter() on randomNumbers below
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(smallNumbers => smallNumbers < 250);
console.log(smallNumbers);

// Call .filter() on favoriteWords below
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(longFavoriteWords => longFavoriteWords.length > 7);
console.log(longFavoriteWords);
