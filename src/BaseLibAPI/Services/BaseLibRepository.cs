using BaseLibAPI.DbContexts;
using BaseLibAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseLibAPI.Services
{
    public class BaseLibRepository: IBaseLibRepository, IDisposable
    {
        private readonly BaseLibContext _context;

        public BaseLibRepository(BaseLibContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public void AddBook(Book book)
        {
            if (book == null)
            {
                throw new ArgumentNullException(nameof(book));
            }
            _context.Books.Add(book);
        }

        public void DeleteBook(Book book)
        {
            _context.Books.Remove(book);
        }

        public Book GetBook(int bookId)
        {
            return _context.Books
                .Where(book => book.Id == bookId).FirstOrDefault();
        }

        public IEnumerable<Book> GetBooks()
        {
            return _context.Books
                .OrderBy(book => book.Title).ToList();
        }

        public void UpdateBook(Book book)
        {
            // no code in this implementation
        }


        public IEnumerable<Course> GetCourses()
        {
            return _context.Courses
                .OrderBy(course => course.Title).ToList();
        }
        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        protected virtual void Dispose(bool disposing)
        {
            if( disposing )
            {
                //
            }
        }

        
    }
}
