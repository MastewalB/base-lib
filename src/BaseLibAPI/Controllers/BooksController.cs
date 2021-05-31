﻿using System;
using Microsoft.AspNetCore.Mvc;
using BaseLibAPI.Services;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BaseLibAPI.ModelDTOs;
using BaseLibAPI.Models;
using AutoMapper;

namespace BaseLibAPI.Controllers
{
    [ApiController]
    [Route("api/books")]
    public class BooksController: ControllerBase
    {
        private readonly IBaseLibRepository _baseLibRepository;
        private readonly IMapper _mapper;

        public BooksController(IBaseLibRepository baseLibRepository, IMapper mapper)
        {
            _baseLibRepository = baseLibRepository ??
                throw new ArgumentNullException(nameof(baseLibRepository));
            _mapper = mapper ??
                throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet()]
        [HttpHead]
        public ActionResult<IEnumerable<BookDto>> GetBooks()
        {
            var booksFromRepo = _baseLibRepository.GetBooks();

            return Ok(_mapper.Map<IEnumerable<BookDto>>(booksFromRepo));
        }

        [HttpGet("{bookId}", Name = "GetBook")]
        public IActionResult GetBook(int bookId)
        {
            var bookFromRepo = _baseLibRepository.GetBook(bookId);

            if (bookFromRepo == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<BookDto>(bookFromRepo));
        }


        //Create Book
        [HttpPost]
        public ActionResult<BookDto> CreateBook(BookForCreationDto bookForCreationDto)
        {
            var bookModel = _mapper.Map<Book>(bookForCreationDto);
            _baseLibRepository.AddBook(bookModel);
            _baseLibRepository.SaveChanges();

            var bookReadDto = _mapper.Map<BookDto>(bookModel);
            return CreatedAtRoute("GetBook",
                new { bookId = bookReadDto.Id}, bookReadDto);
        }

        [HttpPut("{bookId}")]
        public ActionResult UpdateBook(int bookId, BookUpdateDto bookUpdateDto)
        {
            var bookModelFromRepo = _baseLibRepository.GetBook(bookId);
            if(bookModelFromRepo == null)
            {
                return NotFound();

            }
            _mapper.Map(bookUpdateDto, bookModelFromRepo);
            _baseLibRepository.UpdateBook(bookModelFromRepo);
            _baseLibRepository.SaveChanges();

            return NoContent();
        }
    }
}
