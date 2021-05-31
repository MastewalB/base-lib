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
    }
}
