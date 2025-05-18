using MediatR;
using Mirrow.Application.Interfaces;
using Mirrow.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Application.Commands
{
    // Mirrow.Application/Commands/CreateTodoCommand.cs
    public record CreateTodoCommand(string Title)
        : IRequest<Guid>;   // we’ll return the new Id

}
