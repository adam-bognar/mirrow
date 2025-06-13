using MediatR;
using Mirrow.Application.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Application.Commands
{
    public record UpdateBusinessHoursCommand(
        Guid BusinessId,
        string OwnerId,
        WeeklyHoursDto Hours) : IRequest<Guid>;

}
