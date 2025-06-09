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
        string Type,
        string Description,
        string Address,
        string City,
        string? PhoneNumber,
        string? Email
        ) : IRequest<Guid>;
}
