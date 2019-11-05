using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlogApp.ViewModels
{
    public class RegisterViewModel
    {
        [EmailAddress(ErrorMessage = "Має бути пошта!")]
        [Required(ErrorMessage = "Поле не може бути пустим!")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Поле не може бути пустим!")]
        public string Password { get; set; }
        [Required(ErrorMessage = "Поле не може бути пустим!")]
        public string PasswordConfirm { get; set; }
        
    }
}
