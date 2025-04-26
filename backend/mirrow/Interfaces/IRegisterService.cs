using Microsoft.AspNetCore.Identity;
using mirrow.Dtos;

namespace mirrow.Interfaces
{
    public interface IRegisterService
    {
        Task<(IdentityResult Result, IdentityUser User)> RegisterUserAsync(RegisterDto dto);
    }

}
