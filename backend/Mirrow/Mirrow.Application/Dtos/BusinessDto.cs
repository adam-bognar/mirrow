using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Application.Dtos
{
    public record BusinessDto(
        Guid Id,
        string OwnerId,
        string Name,
        string Description,
        string Address,
        string City,
        string? PhoneNumber,
        string? Email,
        string? ImageUrl,
        DateTime CreatedAt
        );
}
