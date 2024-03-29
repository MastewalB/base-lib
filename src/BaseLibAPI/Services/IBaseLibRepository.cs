﻿using System;
using BaseLibAPI.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseLibAPI.Services
{
    public interface IBaseLibRepository
    {

        bool SaveChanges();
        //Book Services
        IEnumerable<Book> GetBooks();
        Book GetBook(int bookId);
        void AddBook(Book book);
        void UpdateBook(Book book);
        void DeleteBook(Book book);

        //Course Services
        IEnumerable<Course> GetCourses();
        Course GetCourse(int courseId);
        void UpdateCourse(Course course); 
        void DeleteCourse(Course course);


        //BookResource Services
        /*IEnumerable<BookResourse> GetBookResourses();
        BookResourse GetBookResourse(int resourseId);
        void AddBookResourse();
        void UpdateBookResourse();
        void DeleteBookResouse();*/

    }
}
