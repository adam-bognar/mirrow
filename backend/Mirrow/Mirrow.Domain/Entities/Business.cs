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
        public string Type { get; private set; } = null!;
        public string Description { get; private set; } = null!;
        public string Address { get; private set; } = null!;
        public string City { get; private set; } = null!;
        public string? PhoneNumber { get; private set; }
        public string? Email{ get; private set; }
        public string? ImageUrl { get; private set; }
        public DateTime CreatedAt { get; private set; }

        public string OwnerId { get; private set; }
        public virtual IdentityUser Owner { get; private set; }

        public ICollection<Review> Reviews { get; private set; }

        public Business(
            string ownerId,
            string name,
            string type,
            string description,
            string address,
            string city,
            string? phoneNumber,
            string? email,
            string? imageUrl)
        {
            Id = Guid.NewGuid();
            OwnerId = ownerId;
            Name = name;
            Type = type;
            Description = description;
            Address = address;
            City = city;
            PhoneNumber = phoneNumber;
            Email = email;
            ImageUrl = /*imageUrl*/ "";
            CreatedAt = DateTime.UtcNow;
            Reviews = new List<Review>();
        }
    }
}
