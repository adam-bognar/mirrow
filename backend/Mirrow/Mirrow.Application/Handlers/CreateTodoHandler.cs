using MediatR;
using Mirrow.Application.Commands;
using Mirrow.Application.Interfaces;
using Mirrow.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Application.Handlers
{
    public class CreateTodoHandler
    : IRequestHandler<CreateTodoCommand, Guid>
    {
        private readonly IRepository<TodoItem> _todos;

        public CreateTodoHandler(IRepository<TodoItem> todos)
            => _todos = todos;

        public async Task<Guid> Handle(CreateTodoCommand req, CancellationToken ct)
        {
            var todo = new TodoItem(req.Title);
            await _todos.AddAsync(todo);
            return todo.Id;
        }
    }
}
