const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: false,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
const books = getBooks();
const book = getBook(2);

/*

// OBJECTS
//...................

// const title=book.title
// const genres=book.genres
// const author=book.author

//destructuring object
const { title, genres, author, hasMovieAdaptation, publicationDate } = book;
console.log(title, genres, author);

// ARRAYS
//.....................

// const primaryGenre=genres[0]
// const secondaryGenre=genres[1]

//destructuring array
const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre);

//REST SPREAD OPERATOR
//.............................

//restspread operator in array
const [firstGenre, secondGenre, ...otherGenres] = genres;
console.log(firstGenre, secondGenre, otherGenres);
//create new array based on current and add new item in array using spread operators
const newGenres = [...genres, "hello"];
console.log(newGenres);

//restspread operator in object by adding new property and overwriting existing property
const newObject = { ...book, moviePublicationDate: "2024-07-10", pages: 300 };
console.log(newObject);

//TERNARIES OPERATORS
//...........................
console.log(
  `The book has ${hasMovieAdaptation ? "" : "not "}been adapted as a movies`
);

// ARROW FUNCTION

// function getYear (year){
// return year.split("-")[0]
// }

//arrow function
const getYear = (year) => year.split("-")[0];
console.log(getYear(publicationDate));

//SHORTCIRCUITING OPERATORS;
//1. AND OPERATORS (&&): return the first value if it is false without considering the second value
console.log(true && "something else");
console.log(false && "something else");
console.log("hello" && "not hello");

//2 OR OPERATORS (||):return the first value if it is true without considering the second value
console.log(true || "something else");
console.log(book.reviews.librarything.reviewsCount || "not rating");
// OR operators treat falsly value such as 0, null, " ",undefined as false

//3 ?? OPERATORS : it work exactly the same way as OR operators except that it doesn't treat 0 as a falsly value
console.log(book.reviews.librarything.reviewsCount ?? "not rating");

//optional chaining operators
const calc = (book) => {
  const reads = book.reviews.goodreads.reviewsCount;
  const library = book.reviews.librarything?.reviewsCount ?? 0;
  return reads + library;
};
console.log(calc(book));


*/

// 01. MAP IN ARRAY
//..............
/*will loop over an array and return a new array with the same length with some operation applied
      to each of the elements of the array */

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const dataess = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

console.log(dataess);

//02. ARRAY FILTER
//...................
const filterPages = books
  .filter((book) => book.pages > 500) //it will filter the pages that has more than 500 and return true
  .filter((book) => book.hasMovieAdaptation);
console.log(filterPages);

const genres = books
  .filter((books) => books.genres.includes("adventure"))
  .map((bookTitle) => bookTitle.title);
console.log(genres);

// 03. THE ARRAY REDUCE METHOD
//....................................

/* The reduce method is really the most versatile and the most powerful of all the array method in js.
we can implement all the other methods,simply using the reduced method. */

//what is and what does the reduce method do?
//...........................................

/* so it is called the reduce method bcz the goal of reduce is to reduce the entire array to get just
  one value. so to boil it down */

const numberOfAllPages = books.reduce((acc, book) => acc + book.pages, 0);
console.log(numberOfAllPages);

/* 
  0: starter
  acc: or accumulator is a current value of the final value that we want to boil the arr down to.
      there the first accumulator is going to start to zero + number of the pages
       0 + 1216 = 1216, the zero is now going to be 1216. the current accum now it will be 1216
       1216 + 295 =1511 and so on

*/

//04. ARRAY SORT METHOD
//............................
/* wE can use this method to sort the array.but the sort method is a mutates so it changes the original array,.
so it is not a good practice so solve it you can first make a copy of array using a slice method    
    */

const y = [9, 8, 0, 2, 7, 3, 4];
const sorted = y.slice().sort((a, b) => a - b);

/*
   a is the current value
   b is the next value. when it return a negative value those two numbers will be sorted in ascending way
    to make in descinding order you can use b-a
*/

console.log(sorted);
console.log(y);

//let sort books in ascending order based on the number of pages

const bookPagesAscendingOrder = books.slice().sort((a, b) => a.pages - b.pages);
console.log(bookPagesAscendingOrder);

/*
// Working with Immutate Array
//..........................

//1. Adding in arr

const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.W.K Rowling",
};
const newArr = [...books, newBook];
console.log(newArr.length);
console.log(books.length);

//2. delete a book in array

const delBook = newArr.filter((book) => book.id !== 3);
console.log(delBook);

//3 update in array
const updateArr = delBook.map((book) =>
  book.id === 1 ? { ...book, title: "hahiye" } : book
);
console.log(updateArr);
*/

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

async function getApi() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await resp.json();
  return data;
}
getApi();
console.log("jonas");
