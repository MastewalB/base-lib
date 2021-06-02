using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BaseLibAPI.ModelDTOs;

namespace BaseLibAPI.Authentication
{
    public interface IAuthenticationManager
    {
        Task<bool> ValidateUser(UserLoginDto userLoginDto);
        Task<string> CreateToken();
    }
}
