using System;
using Microsoft.AspNetCore.Mvc;
using BaseLibAPI.Services;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseLibAPI.Controllers
{
    [ApiController]
    [Route("api/books")]
    public class BooksController: ControllerBase
    {
        private readonly IBaseLibRepository _baseLibRepository;

        public BooksController(IBaseLibRepository baseLibRepository)
        {
            _baseLibRepository = baseLibRepository ??
                throw new ArgumentNullException(nameof(baseLibRepository));
        }

        [HttpGet]
        public IActionResult GetBooks()
        {
            var booksFromRepo = _baseLibRepository.GetBooks();
            return Ok(booksFromRepo);
        }

        [HttpGet("{bookId}")]
        public IActionResult GetBook(Guid bookId)
        {
            var bookFromRepo = _baseLibRepository.GetBook(bookId);

            if (bookFromRepo == null)
            {
                return NotFound();
            }

            return Ok(bookFromRepo);
        }
    }
}
