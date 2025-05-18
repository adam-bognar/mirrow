using AutoMapper;
using MediatR;
using Mirrow.Application.Dtos;
using Mirrow.Application.Interfaces;
using Mirrow.Application.Queries;
using Mirrow.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Application.Handlers
{
    public class GetTodoByIdHandler
    : IRequestHandler<GetTodoByIdQuery, TodoDto?>
    {
        private readonly IRepository<TodoItem> _todos;
        private readonly IMapper _mapper;

        public GetTodoByIdHandler(IRepository<TodoItem> todos, IMapper mapper)
            => (_todos, _mapper) = (todos, mapper);

        public async Task<TodoDto?> Handle(GetTodoByIdQuery req, CancellationToken ct)
        {
            var entity = await _todos.GetByIdAsync(req.Id);
            return entity is null
                 ? null
                 : _mapper.Map<TodoDto>(entity);
        }
    }
}
