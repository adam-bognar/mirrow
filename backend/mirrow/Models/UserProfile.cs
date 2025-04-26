using Microsoft.AspNetCore.Identity;

namespace mirrow.Models
{
    public class UserProfile
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string UserId { get; set; }
        public IdentityUser User { get; set; }
    }
}
