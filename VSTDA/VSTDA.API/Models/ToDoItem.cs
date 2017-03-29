using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VSTDA.API.Models
{
    public class TodoItem
    {
        public int TodoItemId { get; set; }
        public string TodoName { get; set; }
        public string Priority { get; set; }
    }
}