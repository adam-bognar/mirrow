using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Mirrow.Application.Dtos;
using Mirrow.Application.Queries;
using Mirrow.Domain.Entities;
using Mirrow.Infrastructure.Data;
using System.Security.Claims;

namespace Mirrow.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IMediator _mediator; 
        //private readonly IEmailSender _emailSender;

        public AccountController(ApplicationDbContext context, UserManager<IdentityUser> userManager, IMediator mediator)
            //, IEmailSender emailSender)
        {
            _context = context;
            _userManager = userManager;
            _mediator = mediator;
            //_emailSender = emailSender;
        }

        [Authorize]                // blocks unauthenticated requests
        [HttpGet("is-authenticated")]
        public IActionResult IsAuthenticated()
        {
            return Ok(true);
        }

        [HttpGet("businesses")]
        [Authorize]
        public async Task<IActionResult> GetMyBusinessesAsync()
        {
            var user = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (user == null)
            {
                return Unauthorized();
            }

            var query = new GetUserBusinessesQuery(user);
            var businesses = await _mediator.Send(query);
            return Ok(businesses);
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterAsync(RegisterDto dto)
        {
            await using var transaction = await _context.Database.BeginTransactionAsync();
            try
            {
                var user = new IdentityUser
                {
                    UserName = dto.Email,
                    Email = dto.Email
                };

                var result = await _userManager.CreateAsync(user, dto.Password);

                if (!result.Succeeded)
                {
                    return BadRequest(result.Errors);
                }

                var profile = new UserProfile
                {
                    Firstname = dto.Firstname,
                    Lastname = dto.Lastname,
                    UserId = user.Id,
                };

                _context.UserProfiles.Add(profile);

                await _context.SaveChangesAsync();

                await transaction.CommitAsync();

                return Ok(result);
            }
            catch
            {
                await transaction.RollbackAsync();
                throw;
            }
        }
    }
}
