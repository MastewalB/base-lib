using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BaseLibAPI.Models
{
    public class BookResourse
    {
        [Key]
        public int ResourceId { get; set; }

        [ForeignKey("CourseId")]
        public Course Course { get; set; }

        [ForeignKey("BookId")]
        public Book Book { get; set; }

    }
}
