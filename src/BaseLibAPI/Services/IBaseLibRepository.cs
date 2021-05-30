using System;
using BaseLibAPI.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseLibAPI.Services
{
    public interface IBaseLibRepository
    {
        IEnumerable<Book> GetBooks();
        Book GetBook(int bookId);
        void AddBook(Book book);
        void UpdateBook(Book book);
        void DeleteBook(Book book);

    }
}
