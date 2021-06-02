using System;
using Microsoft.AspNetCore.Mvc;
using BaseLibAPI.Services;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BaseLibAPI.ModelDTOs;
using BaseLibAPI.Models;
using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Authorization;

namespace BaseLibAPI.Controllers
{
    [ApiController]
    [Route("api/courses")]
    public class CoursesController:ControllerBase
    {
        private readonly IBaseLibRepository _baseLibRepository;
        private readonly IMapper _mapper;

        public CoursesController(IBaseLibRepository baseLibRepository, IMapper mapper)
        {
            _baseLibRepository = baseLibRepository ??
                throw new ArgumentNullException(nameof(baseLibRepository));
            _mapper = mapper ??
                throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet()]
        [HttpHead]
        public ActionResult<IEnumerable<CourseReadDto>> GetCourses()
        {
            var coursesFromRepo = _baseLibRepository.GetCourses();
            return Ok(_mapper.Map<IEnumerable<CourseReadDto>>(coursesFromRepo));
        }

        [HttpGet("{courseId}", Name = "GetCourse")]
        public IActionResult GetCourse(int courseId)
        {
            var courseFromRepo = _baseLibRepository.GetCourse(courseId);

            if (courseFromRepo == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<CourseReadDto>(courseFromRepo));
        }

        [HttpPut("{courseId}"), Authorize]
        public ActionResult UpdateCourse(int courseId, CourseUpdateDto courseUpdateDto)
        {
            var courseModelFromRepo = _baseLibRepository.GetCourse(courseId);
            if (courseModelFromRepo == null)
            {
                return NotFound();

            }
            _mapper.Map(courseUpdateDto, courseModelFromRepo);
            _baseLibRepository.UpdateCourse(courseModelFromRepo);
            _baseLibRepository.SaveChanges();

            return NoContent();
        }

        [HttpPatch("{courseId}"), Authorize]
        public ActionResult PartialCourseUpdate(int courseId, JsonPatchDocument<CourseUpdateDto> patchDoc)
        {
            var courseModelFromRepo = _baseLibRepository.GetCourse(courseId);
            if (courseModelFromRepo == null)
            {
                return NotFound();

            }
            var courseToPatch = _mapper.Map<CourseUpdateDto>(courseModelFromRepo);
            patchDoc.ApplyTo(courseToPatch, ModelState);

            if (!TryValidateModel(courseToPatch))
            {
                return ValidationProblem(ModelState);
            }

            _mapper.Map(courseToPatch, courseModelFromRepo);
            _baseLibRepository.UpdateCourse(courseModelFromRepo);
            _baseLibRepository.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{courseId}"), Authorize]
        public ActionResult DeleteCourse(int courseId)
        {
            var courseModelFromRepo = _baseLibRepository.GetCourse(courseId);
            if (courseModelFromRepo == null)
            {
                return NotFound();
            }
            _baseLibRepository.DeleteCourse(courseModelFromRepo);
            _baseLibRepository.SaveChanges();

            return NoContent();
        }
    }
}
