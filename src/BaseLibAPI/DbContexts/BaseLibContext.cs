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
        
        protected override void OnModelCreating (ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>().HasData(
                new Book()
                {
                    Id = Guid.Parse("d28888e9-2ba9-473a-a40f-e38cb54f9b35"),
                    Title = "Introduction to Algorithms",
                    Author = "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
                    ISBN = "9780262033848",
                    Publisher = "The MIT Press",
                    PublishDate = new DateTime(2009),
                    Edition = 3,
                    Description = "Before there were computers, there were algorithms. But now that there are com-puters, there are even more algorithms, and algorithms lie at the heart of computing.",
                }
                );
        }
    }
}
