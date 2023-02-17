import { getAllBooks, createBook, updateBook } from 'lib/cms/dbWrapper'

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            const allBooks = await getAllBooks();

            res.status(200).json(allBooks);
            return;

        case 'POST':
            const newBook = JSON.parse(req.body);

            createBook(newBook);

            res.status(200).json({ Success: 'Book created!' });
            return;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            return;
    }
}
