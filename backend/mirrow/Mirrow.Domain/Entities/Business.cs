using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Domain.Entities
{
    public class Business
    {
        public Guid Id { get; private set; }
        
        public string Name { get; private set; } = null!;
        public string Description { get; private set; } = null!;
        public string Location { get; private set; } = null!;
        public string? PhoneNumber { get; private set; }
        public string? ImageUrl { get; private set; }
        public DateTime CreatedAt { get; private set; }

        public string OwnerId { get; private set; }
        public virtual IdentityUser Owner { get; private set; }

        public Business(
            string ownerId,
            string name,
            string description,
            string location,
            string? phoneNumber,
            string? imageUrl)
        {
            Id = Guid.NewGuid();
            OwnerId = ownerId;
            Name = name;
            Description = description;
            Location = location;
            PhoneNumber = phoneNumber;
            ImageUrl = imageUrl;
            CreatedAt = DateTime.UtcNow;
        }
    }
}
