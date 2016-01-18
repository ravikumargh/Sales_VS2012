using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Sales.Controllers
{
    public class ValueController : ApiController
    {
        // GET api/value
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/value/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/value
        public void Post([FromBody]string value)
        {
        }

        // PUT api/value/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/value/5
        public void Delete(int id)
        {
        }
    }
}
