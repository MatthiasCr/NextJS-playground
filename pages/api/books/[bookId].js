import { getBook, createBook, updateBook } from 'lib/cms/dbWrapper'

export default async function handler(req, res) {
  var { bookId } = req.query;
  var bookId = Number(bookId);

  switch (req.method) {
    case 'GET':
      const allBooks = await getBook(bookId);

      res.status(200).json(allBooks);
      return;

    case 'PATCH':
      const updatedBook = JSON.parse(req.body);

      updateBook(bookId, updatedBook);

      res.status(200).json({ Success: 'Book updated!' });
      return;
    default:
      res.setHeader("Allow", ["GET", "PATCH"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      return;
  }
}