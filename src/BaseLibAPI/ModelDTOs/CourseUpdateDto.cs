using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace BaseLibAPI.ModelDTOs
{
    public class CourseUpdateDto
    {
        [Required]
        public string Title { get; set; }

        public string Description { get; set; }
    }
}
