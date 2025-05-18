using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Application.Dtos
{
    public record RegisterDto(string Firstname, string Lastname, string Email, string Password);
}
