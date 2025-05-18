using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Application.Dtos
{
    // Mirrow.Application/DTOs/TodoDto.cs
    public record TodoDto(Guid Id, string Title, bool Done);

}
