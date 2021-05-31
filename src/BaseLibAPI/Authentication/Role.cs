using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseLibAPI.Authentication
{
    public static class Role //:IEntityTypeConfiguration<IdentityRole>
    {

        public const string Admin = "Admin";
        public const string User = "User";

        /*public void Configure(EntityTypeBuilder<IdentityRole> builder)
        {
            builder.HasData(
                new IdentityRole
                {
                    Name = "Administrator",
                    NormalizedName = "ADMINISTRATOR"
                },
                new IdentityRole
                {
                    Name = "User",
                    NormalizedName = "USER"
                }
                );
        }*/
    }
}
