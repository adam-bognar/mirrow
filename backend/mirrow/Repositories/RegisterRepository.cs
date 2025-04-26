using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using mirrow.Dtos;
using mirrow.Interfaces;

namespace mirrow.Repositories
{
    public class RegisterRepository : IRegisterService
    {
        private readonly UserManager<IdentityUser> _userManager;

        public RegisterRepository(UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<(IdentityResult, IdentityUser)> RegisterUserAsync(RegisterDto dto)
        {
            var user = new IdentityUser
            {
                UserName = dto.Email,
                Email = dto.Email
            };

            var result = await _userManager.CreateAsync(user, dto.Password);
            return (result, user);         
        }
    }
}
