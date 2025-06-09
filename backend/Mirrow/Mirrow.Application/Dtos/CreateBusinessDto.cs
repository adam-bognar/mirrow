using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Application.Dtos
{
    public record CreateBusinessDto(
        string Name,
        string Type,
        string Description,
        string Address,
        string City,
        string? PhoneNumber,
        string? Email
    );
}
