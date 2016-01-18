using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Sales.Models;
using Sales.DataAccess;

namespace Sales.Controllers
{
    public class DealOpportunityStatusController : ApiController
    {
        //IDealCurrentStatusService<DealCurrentStatus> dealService;
        private IRepository<DealOpportunityStatus> dealRepository;

        public DealOpportunityStatusController(IRepository<DealOpportunityStatus> dealRepository)
        {
            this.dealRepository = dealRepository;
        }
        // GET: api/DealCurrentStatus
        public IEnumerable<DealOpportunityStatus> Get()
        {
            return dealRepository.GetAll();
        }

        // GET: api/DealCurrentStatus/5
        public DealOpportunityStatus Get(int id)
        {
            return dealRepository.GetById(id);
        }

        // POST: api/DealCurrentStatus
        public void Post(DealOpportunityStatus dealCurrentStatus)
        {            
            dealRepository.Add(dealCurrentStatus);

        }

        // PUT: api/DealCurrentStatus/5
        public void Put(DealOpportunityStatus dealCurrentStatus)
        {
            dealRepository.Update(dealCurrentStatus);
        }

        // DELETE: api/DealCurrentStatus/5
        public void Delete(int id)
        {
            dealRepository.Delete(id);
        }
    }
}