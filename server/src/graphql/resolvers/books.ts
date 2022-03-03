const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
  {
    title: 'Sach cua Trinh',
    author: 'Mai Ngoc Trinh'
  }
]

const bookResolvers = {
  Query: {
    books: (/*parent: any, args: any, context: any, info: any */) => books
  }
}

export { bookResolvers };
