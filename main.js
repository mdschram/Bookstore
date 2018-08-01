function start() {
    console.log(1);

    var fetchConfig =
        fetch("https://api.myjson.com/bins/1h3vb3", {
            method: "GET"
        })
        .then(onDataFetched)
        .catch(onDataFetchFailed);

    console.log(3);
}

function onDataFetched(response) {
    response.json()
        .then(onConversionToJsonSuccessful)
        .catch(onConversionToJsonFailed);
    console.log(2);
}

function onDataFetchFailed(error) {
    console.log("I have failed in life.", error);
}

function onConversionToJsonSuccessful(json) {
    console.log("success!!!!", json);
    serverData = json;
    testBooks()
}

function onConversionToJsonFailed() {
    //    console.log("Not a json mate!");
}

start()

var main = new Vue({
    el: '#main',
    data: {
        books: [],
        search: "",
        searchedBooks: true
    },
    computed: {
        filteredBooks: function () {
            let filtered = this.books.filter((book) => {
                return book.titulo.match(this.search) || book.descripcion.match(this.search)
            })
            if (filtered.length == 0) {
               this.searchedBooks = false;
            } else {
                this.searchedBooks = true
            }
            console.log(this.searchedBooks)
            return filtered;

        }

    },
    methods: {
        clicked: function () {
            console.log(book.titulo)
        }
    }
})

function testBooks() {
    var books = serverData.books
    for (i = 0; i < books.length; i++) {
        main.books.push(books[i])
    }
}
