using AutoMapper;
using Mirrow.Application.Dtos;
using Mirrow.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Application.Mappings
{
    public class BusinessProfile: Profile
    {
        public BusinessProfile() {
            CreateMap<Business, BusinessDto>();
        }
    }
}
