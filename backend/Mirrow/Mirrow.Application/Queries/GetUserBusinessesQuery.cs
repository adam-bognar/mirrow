﻿using MediatR;
using Mirrow.Application.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Application.Queries
{
    public record GetUserBusinessesQuery(string UserId) : IRequest<IEnumerable<BusinessDto>>;
}
