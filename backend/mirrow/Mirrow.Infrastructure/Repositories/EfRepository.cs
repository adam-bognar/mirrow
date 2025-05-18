using Microsoft.EntityFrameworkCore;
using Mirrow.Application.Interfaces;
using Mirrow.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Infrastructure.Repositories
{
    public class EfRepository<T> : IRepository<T> where T : class
    {
        private readonly ApplicationDbContext _ctx;
        

        public EfRepository(ApplicationDbContext ctx) => _ctx = ctx;

        public Task<T?> GetByIdAsync(Guid id) =>
            _ctx.Set<T>().FindAsync(id).AsTask();

        public Task<IReadOnlyList<T>> ListAsync() =>
            _ctx.Set<T>().ToListAsync().ContinueWith(task => (IReadOnlyList<T>) task.Result);

        // ← implement the filtered version:
        public Task<IReadOnlyList<T>> ListAsync(Expression<Func<T, bool>> predicate) =>
            _ctx.Set<T>().Where(predicate).ToListAsync().ContinueWith(task => (IReadOnlyList<T>)task.Result);

        public async Task AddAsync(T entity)
        {
            await _ctx.Set<T>().AddAsync(entity);
            await _ctx.SaveChangesAsync();
        }

        public void Update(T entity) =>
            _ctx.Set<T>().Update(entity);

        public void Delete(T entity) =>
            _ctx.Set<T>().Remove(entity);
    }

}
