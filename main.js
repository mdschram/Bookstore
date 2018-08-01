function start() {
  

    var fetchConfig =
        fetch("https://api.myjson.com/bins/1h3vb3", {
            method: "GET"
        })
        .then(onDataFetched)
        .catch(onDataFetchFailed);

    }

function onDataFetched(response) {
    response.json()
        .then(onConversionToJsonSuccessful)
        .catch(onConversionToJsonFailed);
   
}

function onDataFetchFailed(error) {
    
}

function onConversionToJsonSuccessful(json) {
 
    serverData = json;
    testBooks()
}

function onConversionToJsonFailed() {
   
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
            return filtered;

        }

    },
    methods: {
        clicked: function () {
        }
    }
})

function testBooks() {
    var books = serverData.books
    for (i = 0; i < books.length; i++) {
        main.books.push(books[i])
    }
}
