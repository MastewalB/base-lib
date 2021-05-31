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

        public void DeleteBook(Book book)
        {
            if( book == null)
            {
                throw new ArgumentNullException(nameof(book));
            }
            _context.Books.Remove(book);
        }

        //course methods implementation
        public IEnumerable<Course> GetCourses()
        {
            return _context.Courses
                .OrderBy(course => course.Title).ToList();
        }

        public Course GetCourse(int courseId)
        {
            return _context.Courses
                .Where(course => course.Id == courseId).FirstOrDefault();
        }

        public void UpdateCourse(Course course)
        {
            // no code in this implementation
        }
        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void DeleteCourse(Course course)
        {
            if (course == null)
            {
                throw new ArgumentNullException(nameof(course));
            }
            _context.Courses.Remove(course);
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
