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
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<TodoItem> Todos => Set<TodoItem>();
        public DbSet<UserProfile> UserProfiles => Set<UserProfile>();
        public DbSet<Business> Businesses => Set<Business>();
        public DbSet<Review> Reviews => Set<Review>();
        public DbSet<BusinessHour> BusinessHours => Set<BusinessHour>();

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

                b.HasOne(x => x.Owner)
                 .WithMany()
                 .HasForeignKey(x => x.OwnerId)
                 .OnDelete(DeleteBehavior.Cascade);
            });

            builder.Entity<Review>()
                .HasOne(r => r.Business)
                .WithMany(b => b.Reviews)
                .HasForeignKey(r => r.BusinessId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Review>()
                .HasOne(r => r.Reviewer)
                .WithMany()
                .HasForeignKey(r => r.ReviewerId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<BusinessHour>(cfg =>
            {
                cfg.HasKey(x => x.Id);

                cfg.HasOne(x=> x.Business)
                .WithMany(b=> b.Hours)
                .HasForeignKey(b=>b.BusinessId)
                .OnDelete(DeleteBehavior.Cascade);

                cfg.HasIndex(x => new { x.BusinessId, x.DayOfWeek, x.Start, x.End })
                   .IsUnique();
            });



        }
    }
}
