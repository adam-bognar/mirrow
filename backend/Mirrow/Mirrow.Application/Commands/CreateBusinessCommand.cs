using MediatR;
using Mirrow.Application.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Application.Commands
{
    public record CreateBusinessCommand(
        string UserId,
        string Name,
        string Description,
        string Location,
        string? PhoneNumber,
        string? ImageUrl
        ) : IRequest<Guid>;
}
