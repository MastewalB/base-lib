using System;
using Microsoft.AspNetCore.Mvc;
using BaseLibAPI.Services;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BaseLibAPI.ModelDTOs;
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

        [HttpGet]
        public ActionResult<IEnumerable<BookDto>> GetBooks()
        {
            var booksFromRepo = _baseLibRepository.GetBooks();

            return Ok(_mapper.Map<IEnumerable<BookDto>>(booksFromRepo));
        }

        [HttpGet("{bookId}")]
        public IActionResult GetBook(Guid bookId)
        {
            var bookFromRepo = _baseLibRepository.GetBook(bookId);

            if (bookFromRepo == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<BookDto>(bookFromRepo));
        }
    }
}
