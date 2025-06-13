using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Domain.Entities
{
    public class Review
    {
        public Guid Id { get; set; }
        public Guid BusinessId{ get; set; }
        public virtual Business Business { get; set; }

        public string ReviewerId { get; set; }
        public virtual IdentityUser Reviewer { get; set; }

        public int Rating {  get; set; }
        public string TextReview {  get; set; }
        public DateTime CreatedAt { get; set; }

        public Review(
            Guid businessId,
            string reviewerId,
            int rating,
            string textReview
            )
        {
           Id = Guid.NewGuid();
           BusinessId = businessId;
           ReviewerId = reviewerId;
           Rating = rating;
           TextReview = textReview;
           CreatedAt = DateTime.UtcNow;
        }

    }
}
