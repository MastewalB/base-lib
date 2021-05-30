using BaseLibAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseLibAPI.DbContexts
{
    public class BaseLibContext:DbContext
    {
        public BaseLibContext(DbContextOptions<BaseLibContext> options) : base(options) { }

        public DbSet<Book> Books { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<BookResourse> BookResourses { get; set; }
        
        
    }
}
