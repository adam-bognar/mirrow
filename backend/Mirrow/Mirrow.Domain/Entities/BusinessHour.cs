using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Domain.Entities
{
    public class BusinessHour
    {
        public Guid Id { get; set; }

        public Guid BusinessId { get; set; }
        public virtual Business Business { get; set; }

        public DayOfWeek DayOfWeek { get; set; }

        public TimeOnly Start { get; set; }
        public TimeOnly End { get; set; }

        public BusinessHour(Guid businessId, DayOfWeek day, TimeOnly start, TimeOnly end)
        {
            if (start >= end) throw new ArgumentException("Start must be earlier than end");
            BusinessId = businessId;
            DayOfWeek = day;
            Start = start;
            End = end;
        }


    }
}
