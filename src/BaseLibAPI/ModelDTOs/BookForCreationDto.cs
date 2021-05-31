using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace BaseLibAPI.ModelDTOs
{
    public class BookForCreationDto
    {
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
