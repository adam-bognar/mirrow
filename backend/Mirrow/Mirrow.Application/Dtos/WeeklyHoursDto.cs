﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Application.Dtos
{
    public record WeeklyHoursDto
    {
        public IDictionary<DayOfWeek, List<TimeRangeDto>> Days { get; init; } = new Dictionary<DayOfWeek, List<TimeRangeDto>>();
    }
}
