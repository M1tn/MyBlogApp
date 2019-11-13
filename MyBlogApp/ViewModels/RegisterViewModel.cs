using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlogApp.ViewModels
{
    public class RegisterViewModel
    {
        [Required(ErrorMessage = "Поле не може бути пустим!")]
        public string First_name { get; set; }
        [Required(ErrorMessage = "Поле не може бути пустим!")]
        public string Last_name { get; set; }

        [EmailAddress]
        [Required(ErrorMessage = "Поле не може бути пустим!")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Поле не може бути пустим!")]
        [RegularExpression(@"^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,24}$", ErrorMessage = "Пароль повинен містити не менше 6 символів і містити цифри, верхній і нижній регістр.")]
        public string Password { get; set; }
        [Required(ErrorMessage = "Поле не може бути пустим!")]
        [Compare("Password", ErrorMessage = "Паролі не співпадають!")]
        public string Confirm_Password { get; set; }
        
    }
}
