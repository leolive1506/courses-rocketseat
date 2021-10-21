/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length
// console.log("Total de categorias:",totalCategories)

for(let category of booksByCategory) {
    const totalBook = `Total de livros da categoria: ${category.category} - ${category.books.length}`

    // console.log(totalBook)
}

function countAuthors() {
    let authors = [];


    for(let category of booksByCategory) {
        // console.log(category.books)
        for(let book of category.books) {
            // indexOf, ve se tem dentro do array, se não tiver volta o index se não tiver retorna -1
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }

            // const showBookAuthor = (author) => {
            //     if(book.author == `${author}`) {
            //         console.log(`Livros do autor ${author}: ${book.title}`)
            //     }
            // }
        
            // showBookAuthor("Stephen R. Covey")
        }
    }
    console.log(`Autores: 
        ${authors}` )
    console.log(`Total de autores: ${authors.length}`)
}


function showBookAuthor(author) {
    let books = []
    for(let category of booksByCategory) {
        
        for(let book of category.books) {
        
            
            if(book.author == `${author}`) {
                books.push(book.title)
            }
            
            
        }
    }
    
    console.log(`Livros do autor ${author}: `, `${books.join(", ")}`)
}

showBookAuthor("Augusto Cury")


countAuthors()