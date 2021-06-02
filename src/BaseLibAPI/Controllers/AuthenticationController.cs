using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using BaseLibAPI.Authentication;
using BaseLibAPI.ModelDTOs;

namespace BaseLibAPI.Controllers
{
    [Route("api/authentication")]
    [ApiController]
    public class AuthenticationController:ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
        private readonly IAuthenticationManager _authManager;

        public AuthenticationController(IMapper mapper,
            UserManager<User> userManager, IAuthenticationManager authManager)
        {
            _mapper = mapper;
            _userManager = userManager;
            _authManager = authManager;
        }

        [HttpPost]
        public async Task<IActionResult> RegisterUser([FromBody] UserRegisterDto userRegisterDto)
        {
            var user = _mapper.Map<User>(userRegisterDto);

            var result = await _userManager.CreateAsync(user, userRegisterDto.Password);
            if (!result.Succeeded)
            {
                foreach( var error in result.Errors)
                {
                    ModelState.TryAddModelError(error.Code, error.Description);
                }
                return BadRequest(ModelState);
            }
            await _userManager.AddToRoleAsync(user, userRegisterDto.Roles);
            return Ok();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Authenticate([FromBody] UserLoginDto userLoginDto)
        {
            if(!await _authManager.ValidateUser(userLoginDto))
            {
                return Unauthorized();
            }

            return Ok(new { Token = await _authManager.CreateToken() });
        }
    }

}
