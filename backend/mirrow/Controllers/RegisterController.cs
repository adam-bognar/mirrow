using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using mirrow.Data;
using mirrow.Dtos;
using mirrow.Interfaces;
using mirrow.Models;

namespace mirrow.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly IRegisterService _registerService;
        private readonly ApplicationDbContext _context;

        public RegisterController(IRegisterService registerService, ApplicationDbContext context)
        {
            _registerService = registerService;
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await using var transaction = await _context.Database.BeginTransactionAsync();

            var (result,user) = await _registerService.RegisterUserAsync(dto);

            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }

            var profile  = new UserProfile
            {
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                UserId = user.Id
            };

            _context.UserProfiles.Add(profile);
            await _context.SaveChangesAsync();

            await transaction.CommitAsync();

            return Ok("User registered successfully");
        }


    }
}
