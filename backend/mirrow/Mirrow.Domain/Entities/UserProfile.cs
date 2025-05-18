using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Domain.Entities
{
    public class UserProfile
    {
        public Guid Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }

        public string UserId { get; set; }
        public virtual IdentityUser User { get; set; }


    }
}
