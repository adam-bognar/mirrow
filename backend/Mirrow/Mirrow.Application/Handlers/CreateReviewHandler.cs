using MediatR;
using Mirrow.Application.Commands;
using Mirrow.Application.Interfaces;
using Mirrow.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mirrow.Application.Handlers
{
    public class CreateReviewHandler : IRequestHandler<CreateReviewCommand, Guid>
    {
        private readonly IRepository<Review> _repository;

        public CreateReviewHandler(IRepository<Review> repository)
        {
            _repository = repository;
        }

        public async Task<Guid> Handle(CreateReviewCommand request, CancellationToken cancellationToken)
        {
            var review = new Review(
                businessId: request.NewReview.BusinessId,
                reviewerId: request.ReviewerId,
                rating: request.NewReview.Rating,
                textReview: request.NewReview.TextReview
                );

            await _repository.AddAsync(review);
            return review.Id;
        }
    }
}
