using MediatR;
using Mirrow.Application.Commands;
using Mirrow.Application.Interfaces;
using Mirrow.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Application.Handlers
{
    public class UpdateBusinessHoursHandler
     : IRequestHandler<UpdateBusinessHoursCommand,Guid>
    {
        private readonly IRepository<Business> _bizRepo;
        private readonly IRepository<BusinessHour> _hourRepo;

        public UpdateBusinessHoursHandler(
            IRepository<Business> bizRepo,
            IRepository<BusinessHour> hourRepo)
        {
            _bizRepo = bizRepo;
            _hourRepo = hourRepo;
        }

        public async Task<Guid> Handle(UpdateBusinessHoursCommand cmd, CancellationToken ct)
        {
            var biz = await _bizRepo.GetByIdAsync(cmd.BusinessId);
            if (biz is null)
                throw new KeyNotFoundException($"Business {cmd.BusinessId} not found");

            if (biz.OwnerId != cmd.OwnerId)
                throw new UnauthorizedAccessException();

            var newHours = cmd.Hours.Days
                .SelectMany(kv =>
                    kv.Value.Select(tr =>
                        new BusinessHour(
                            businessId: cmd.BusinessId,
                            day: kv.Key,
                            start: TimeOnly.Parse(tr.From),
                            end: TimeOnly.Parse(tr.To))))
                .ToList();

            ValidateNoOverlap(newHours);


            var existing = await _hourRepo.ListAsync(h => h.BusinessId == cmd.BusinessId);
            foreach (var h in existing) _hourRepo.Delete(h);
            foreach (var h in newHours) await _hourRepo.AddAsync(h);

            return biz.Id;
        }


        private static void ValidateNoOverlap(IEnumerable<BusinessHour> hrs)
        {
            foreach (var grp in hrs.GroupBy(h => h.DayOfWeek))
            {
                var ordered = grp.OrderBy(h => h.Start).ToList();
                for (int i = 1; i < ordered.Count; i++)
                    if (ordered[i - 1].End > ordered[i].Start)
                        throw new ArgumentException(
                            $"Overlapping slots on {grp.Key}: {ordered[i - 1].Start}-{ordered[i - 1].End} & {ordered[i].Start}-{ordered[i].End}");
            }
        }
    }

}
