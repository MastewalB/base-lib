using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BaseLibAPI.Authentication;
using BaseLibAPI.ModelDTOs;

namespace BaseLibAPI.Profiles
{
    public class UsersProfile:Profile
    {
        public UsersProfile()
        {
            CreateMap<UserRegisterDto, User>();
        }
    }
}
