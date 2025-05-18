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

    public class GetBusinessByIdHandler : IRequestHandler<GetBusinessByIdQuery, BusinessDto?>
    {
        private readonly IRepository<Business> _repo;
        private readonly IMapper _mapper;

        public GetBusinessByIdHandler(IRepository<Business> repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<BusinessDto?> Handle(GetBusinessByIdQuery request, CancellationToken cancellationToken)
        {
            var entity = await _repo.GetByIdAsync(request.Id);
            return entity == null ? null : _mapper.Map<BusinessDto>(entity);
        }
    }
}
