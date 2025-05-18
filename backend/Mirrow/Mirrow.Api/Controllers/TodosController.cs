using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mirrow.Application.Commands;
using Mirrow.Application.Dtos;
using Mirrow.Application.Queries;

namespace Mirrow.Api.Controllers
{
    // Mirrow.Api/Controllers/TodosController.cs
    [ApiController]
    [Route("api/[controller]")]
    public class TodosController : ControllerBase
    {
        private readonly IMediator _mediator;
        public TodosController(IMediator mediator) => _mediator = mediator;

        // POST /api/todos
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateTodoCommand cmd)
        {
            var id = await _mediator.Send(cmd);
            return CreatedAtAction(nameof(GetById), new { id }, null);
        }

        // GET /api/todos/{id}
        [HttpGet("{id:guid}")]
        public async Task<ActionResult<TodoDto>> GetById(Guid id)
        {
            var dto = await _mediator.Send(new GetTodoByIdQuery(id));
            return dto is null ? NotFound() : Ok(dto);
        }
    }

}
