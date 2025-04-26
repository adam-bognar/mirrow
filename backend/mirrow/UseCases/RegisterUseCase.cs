using Microsoft.AspNetCore.Identity;
using mirrow.Dtos;
using mirrow.Interfaces;

namespace mirrow.UseCases
{
    public class RegisterUseCase
    {
        private readonly IRegisterService _registerService;

        public RegisterUseCase(IRegisterService registerService)
        {
            _registerService = registerService;
        }

        public async Task<(IdentityResult, IdentityUser)> RegisterUserAsync(RegisterDto dto)
        {   
            return await _registerService.RegisterUserAsync(dto);
        }
    }
}
