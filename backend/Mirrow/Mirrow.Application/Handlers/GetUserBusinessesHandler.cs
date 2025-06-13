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
    public class GetUserBusinessesHandler : IRequestHandler<GetUserBusinessesQuery, IEnumerable<BusinessDto>>
    {
        private readonly IRepository<Business> _repo;
        private readonly IMapper _mapper;

        public GetUserBusinessesHandler(IRepository<Business> repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<IEnumerable<BusinessDto>> Handle(GetUserBusinessesQuery request, CancellationToken cancellationToken)
        {
            var entities = await _repo.ListAsync(b => b.OwnerId == request.UserId);
            return _mapper.Map<IEnumerable<BusinessDto>>(entities);
        }
    }
}
