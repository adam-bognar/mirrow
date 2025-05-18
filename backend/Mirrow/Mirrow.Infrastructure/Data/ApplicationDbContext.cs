using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Mirrow.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Infrastructure.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options) { }

        public DbSet<TodoItem> Todos => Set<TodoItem>();
        public DbSet<UserProfile> UserProfiles => Set<UserProfile>();
        public DbSet<Business> Businesses => Set<Business>();

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfigurationsFromAssembly(GetType().Assembly);

            builder.Entity<UserProfile>()
                .HasOne(x => x.User)
                .WithOne()
                .HasForeignKey<UserProfile>(x => x.UserId)
                .HasPrincipalKey<IdentityUser>(x => x.Id)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<UserProfile>()
                .HasIndex(x => x.UserId)
                .IsUnique();

            builder.Entity<Business>(b =>
            {
                b.HasKey(x => x.Id);

                b.Property(x => x.OwnerId)
                 .HasMaxLength(450)
                 .IsRequired();

                // ✅ tie NAVIGATION (Owner) to FK (OwnerId) in one definition
                b.HasOne(x => x.Owner)          // ← use the nav-lambda
                 .WithMany()                    //  or .WithMany(u => u.Businesses)
                 .HasForeignKey(x => x.OwnerId)
                 .OnDelete(DeleteBehavior.Cascade);
            });



        }
    }
}
