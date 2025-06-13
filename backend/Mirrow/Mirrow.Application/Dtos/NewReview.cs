using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Application.Dtos
{
    public record NewReview(
       int Rating,
       string TextReview,
       Guid BusinessId
   );

}
