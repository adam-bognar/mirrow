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
        string Location,
        string? PhoneNumber,
        string? ImageUrl,
        DateTime CreatedAt
        );
}
