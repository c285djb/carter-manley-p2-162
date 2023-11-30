namespace FullStackAPI.Models
{
    public class Member
    {

        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public long Phone { get; set; }

        public long Points{ get; set; }

        public string Department { get; set; }
    }
}
