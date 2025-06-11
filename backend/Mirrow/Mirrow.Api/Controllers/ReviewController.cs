using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mirrow.Application.Commands;
using Mirrow.Application.Dtos;
using System.Security.Claims;

namespace Mirrow.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ReviewController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ReviewController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetReview(Guid id)
        {
            // fetch review …
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> CreateReview([FromBody] NewReview newReview)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null) return Unauthorized();

            var cmd = new CreateReviewCommand(userId,newReview);

            var id = await _mediator.Send(cmd);

            return CreatedAtAction(nameof(GetReview), new {id}, id);
        }
    }
}
