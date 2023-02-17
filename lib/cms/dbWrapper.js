import { prisma } from 'prisma/client.ts'

// get All
export async function getAllBooks() {
    const allBooks = await prisma.book.findMany();

    return allBooks;
}

// get with ID
export async function getBook(id) {
    const book = await prisma.book.findUnique({
        where: {
            id: id,
        },
    });
    return book;
}

// create with data
export async function createBook(bookObj) {
    try {

        await prisma.book.create({
            data: bookObj,
        });
    } catch (e) {
        console.log(e);
        return e;
    }

}