using FullStackAPI.Data;
using FullStackAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStackAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MembersController : Controller
    {
        private readonly FullStackDbContext _fullStackDbContext;
        public MembersController(FullStackDbContext fullStackDbContext)
        {
            _fullStackDbContext = fullStackDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMembers()
        {
            var members = await _fullStackDbContext.Members.ToListAsync();

            return Ok(members);
        }

        [HttpPost]
        public async Task<IActionResult> AddMember([FromBody] Member memberRequest)
        {
            memberRequest.Id = Guid.NewGuid();

            await _fullStackDbContext.Members.AddAsync(memberRequest);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(memberRequest);
        }

    }
}
