using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// Mirrow.Domain/Entities/TodoItem.cs
namespace Mirrow.Domain.Entities
{
    public class TodoItem
    {
        public Guid Id { get; private set; } = Guid.NewGuid();
        public string Title { get; private set; }
        public bool Done { get; private set; }

        // ctor for EF
        private TodoItem() { }

        public TodoItem(string title)
        {
            Title = title;
            Done = false;
        }

        public void MarkDone() => Done = true;
    }
}

