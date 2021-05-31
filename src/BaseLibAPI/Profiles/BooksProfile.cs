using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BaseLibAPI.Models;
using BaseLibAPI.ModelDTOs;

namespace BaseLibAPI.Profiles
{
    public class BooksProfile : Profile
    {
        public BooksProfile()
        {
            CreateMap<Book, BookDto>();
            CreateMap<BookForCreationDto, Book>();
            CreateMap<BookUpdateDto, Book>();
            CreateMap<Book, BookUpdateDto>();
        }
    }
}
