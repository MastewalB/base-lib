using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseLibAPI.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Author { get; set; }

        [Required]
        public string ISBN { get; set; }

        public string Publisher { get; set; }

        public DateTime PublishDate { get; set; }

        public int Edition { get; set; }

        public string Description { get; set; }
        public string CoverImg { get; set; }
        public string SkillLevel { get; set; }
    }
}
