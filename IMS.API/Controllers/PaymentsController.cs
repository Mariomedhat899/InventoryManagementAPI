using IMS.API.Models.PaymentsDtos;
using IMS.Core.Entities;
using IMS.Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin,Manager")]
    public class PaymentsController(ApplicationDbContext _context) : ControllerBase
    {
        [HttpGet]
        [Authorize(Roles = "Admin,Manager")]
        public async Task<IActionResult> GetPayments()
        {
            var payments = await _context.Payments
                .Select(p => new PaymentDto
                {
                    Amount = p.Amount,
                    PaymentMethod = p.PaymentMethod,
                    TransactionReference = p.TransactionReference,
                    PaymentDate = p.PaymentDate,
                    Status = p.Status,
                    Id = p.Id,
                }).OrderByDescending(p => p.PaymentDate).ToListAsync();

            return Ok(payments);

        }

        [HttpGet("{id}")]
        [Authorize(Roles = "Admin,Manager")]
        public async Task<IActionResult> GetPaymentById(int id)
        {
            var payment = await _context.Payments.Select(p => new PaymentDto
            {
                Amount = p.Amount,
                PaymentMethod = p.PaymentMethod,
                PaymentDate = p.PaymentDate,
                Status = p.Status,
                TransactionReference = p.TransactionReference,
                Id = p.Id



            }).FirstOrDefaultAsync(p => p.Id == id);


            if (payment is null) return NotFound();

            return Ok(payment);


        }

        [HttpPost]
        [Authorize(Roles = "Admin,Manager")]
        public async Task<IActionResult> CreatePayment([FromBody] CreatePaymentDto model)
        {
            if (model.Amount <= 0) return BadRequest("Amount Must Be Greater Than 0!!");
            if (string.IsNullOrEmpty(model.PaymentMethod)) return BadRequest("PaymentMethod Is Required!!");
            if (string.IsNullOrEmpty(model.TransactionReference)) return BadRequest("TransactionReference Is Required!!");

            var payment = new Payment
            {
                Amount = model.Amount,
                PaymentMethod = model.PaymentMethod,
                TransactionReference = model.TransactionReference,
                Status = "Pending",
                PaymentDate = DateTime.UtcNow
            };

            _context.Payments.Add(payment);

            await _context.SaveChangesAsync();

            var responseDto = new PaymentDto
            {
                Id = payment.Id,
                Amount = payment.Amount,
                PaymentMethod = payment.PaymentMethod,
                TransactionReference = payment.TransactionReference,
                PaymentDate = payment.PaymentDate,
                Status = payment.Status,
            };

            return CreatedAtAction(nameof(GetPaymentById), new { id = payment.Id }, responseDto);
        }



        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]

        public async Task<IActionResult> DeletePaymentAsync(int id)
        {

            var payment = await _context.Payments.FindAsync(id);
            if (payment is null) return NotFound($"No Payment With Id: {id}");

            _context.Payments.Remove(payment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin,Manager")]
        public async Task<IActionResult> UpdatePayment(int id, [FromBody] UpdatePaymentDto model)
        {
            var payment = await _context.Payments.FindAsync(id);
            if (payment is null) return NotFound($"No Payment With Id: {id}");

            payment.Status = model.Status;
            payment.PaymentMethod = model.PaymentMethod;

            _context.Payments.Update(payment);
            await _context.SaveChangesAsync();

            var responseDto = new PaymentDto
            {
                Id = payment.Id,
                Amount = payment.Amount,
                PaymentMethod = payment.PaymentMethod,
                TransactionReference = payment.TransactionReference,
                PaymentDate = payment.PaymentDate,
                Status = payment.Status,
            };

            return Ok(responseDto);
        }
    }
}