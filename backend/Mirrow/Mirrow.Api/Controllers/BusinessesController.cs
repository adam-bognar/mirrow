using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mirrow.Application.Commands;
using Mirrow.Application.Dtos;
using Mirrow.Application.Queries;
using System.Security.Claims;

namespace Mirrow.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BusinessesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public BusinessesController(IMediator mediator) => _mediator = mediator;

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateBusinessDto dto)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId is null)
                return Unauthorized();


            var cmd = new CreateBusinessCommand(
            userId,
            dto.Name,
            dto.Type,
            dto.Description,
            dto.Address,
            dto.City,
            dto.PhoneNumber,
            dto.Email
        );

            var id = await _mediator.Send(cmd);

            return CreatedAtAction(
                nameof(GetById),
                new {id},
                new {id}
                );
        }

        [HttpGet("{id:guid}")]
        public async Task<ActionResult<BusinessDto>> GetById(Guid id)
        {
            var dto = await _mediator.Send(new GetBusinessByIdQuery(id));
            return dto is null ? NotFound() : Ok(dto);
        }
    }
}
