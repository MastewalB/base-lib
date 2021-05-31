using BaseLibAPI.Authentication;
using BaseLibAPI.DbContexts;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseLibAPI.Helpers
{
    public static class ServiceExtensions
    {
        public static void ConfigureIdentity(this IServiceCollection services)
        {
            var builder = services.AddIdentityCore<User>(o =>
            {
                o.Password.RequireDigit = true;
                o.Password.RequireLowercase = false;
                o.Password.RequireUppercase = false;
                o.Password.RequireNonAlphanumeric = false;
                o.Password.RequiredLength = 10;
                o.User.RequireUniqueEmail = true;
            });

            builder = new IdentityBuilder(builder.UserType, typeof(IdentityRole),
                builder.Services);
            builder.AddEntityFrameworkStores<BaseLibContext>()
                .AddDefaultTokenProviders();
        }
    }
}


/*
 * IdentityUser in User.cs and UserRegisterDto.cs 
 * ServiceExtensions => ConfigureIdentity
 * StartUp.cs => configure - useAuthentication()
 * StartUp.cs => configureServices - services.ConfigureIdentity()
 */