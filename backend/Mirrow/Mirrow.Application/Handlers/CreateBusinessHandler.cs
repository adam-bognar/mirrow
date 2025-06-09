using MediatR;
using Mirrow.Application.Commands;
using Mirrow.Application.Interfaces;
using Mirrow.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Application.Handlers
{
    public class CreateBusinessHandler : IRequestHandler<CreateBusinessCommand, Guid>
    {
        private readonly IRepository<Business> _businesses;
        private readonly IRepository<UserProfile> _profiles;

        public CreateBusinessHandler(
            IRepository<UserProfile> profiles,
            IRepository<Business> businesses)
        {
            _profiles = profiles;
            _businesses = businesses;
        }

        public async Task<Guid> Handle(CreateBusinessCommand request, CancellationToken cancellationToken)
        {
            var dto = request;

            var business = new Business(
                dto.UserId,
                dto.Name,
                dto.Type,
                dto.Description,
                dto.Address,
                dto.City,
                dto.PhoneNumber,
                dto.Email,
                "" //TODO IMAGE URL
                );

            await _businesses.AddAsync( business );
            return business.Id;
        }
    }
}
