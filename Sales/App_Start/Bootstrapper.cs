using Microsoft.Practices.Unity;
using Sales.DataAccess;
using Sales.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
 

namespace Sales
{
    public static class Bootstrapper
    {
        public static void Initialise()
        {
            var container = BuildUnityContainer();
            GlobalConfiguration.Configuration.DependencyResolver = new Unity.WebApi.UnityDependencyResolver(container);
        }

        private static IUnityContainer BuildUnityContainer()
        {
            var container = new UnityContainer();
            //register the Address Repository
            container.RegisterType<IRepository<Deal>, DealRepository>();
            container.RegisterType<IRepository<DealCurrentStatus>, DealCurrentStatusRepository>();
            container.RegisterType<IRepository<DealOpportunityStatus>, DealOpportunityStatusRepository>();
            return container;
        }
    }
}