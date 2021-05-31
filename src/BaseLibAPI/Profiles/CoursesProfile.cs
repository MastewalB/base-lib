using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BaseLibAPI.Helpers;
using BaseLibAPI.Models;
using BaseLibAPI.ModelDTOs;

namespace BaseLibAPI.Profiles
{
    public class CoursesProfile : Profile
    {
        public CoursesProfile()
        {
            CreateMap<Course, CourseReadDto>()
                /*.ForMember(
                dest => dest.BookResources,
                opt => opt.MapFrom(src => src.Id.GetCourseResources()));*/
                ;

            CreateMap<CourseCreateDto, Course>();
            CreateMap<CourseUpdateDto, Course>();
            CreateMap<Course, CourseUpdateDto>();
        }
    }
}
