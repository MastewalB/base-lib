using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BaseLibAPI.Helpers;

namespace BaseLibAPI.Profiles
{
    public class CoursesProfile : Profile
    {
        public CoursesProfile()
        {
            CreateMap<Models.Course, ModelDTOs.CourseReadDto>()
                /*.ForMember(
                dest => dest.BookResources,
                opt => opt.MapFrom(src => src.Id.GetCourseResources()));*/
                ;
        }
    }
}
