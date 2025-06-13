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
    public class GetBusinessHoursHandler : IRequestHandler<GetBusinessHoursQuery, WeeklyHoursDto>
    {
        private readonly IRepository<BusinessHour> _repo;

        public GetBusinessHoursHandler(IRepository<BusinessHour> repo)
        {
            _repo = repo;
        }

        public async Task<WeeklyHoursDto> Handle(GetBusinessHoursQuery request, CancellationToken cancellationToken)
        {
            var hours = await _repo.ListAsync(h => h.BusinessId == request.id);

            var days = Enum.GetValues<DayOfWeek>()
                       .ToDictionary(d => d, _ => new List<TimeRangeDto>());

            foreach (var h in hours.OrderBy(h => h.Start))
            {
                days[h.DayOfWeek].Add(new TimeRangeDto(
                    From: h.Start.ToString("HH:mm"),
                    To: h.End.ToString("HH:mm")));
            }

            return new WeeklyHoursDto { Days = days };
        }
    }
}
