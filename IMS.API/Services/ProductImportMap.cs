using CsvHelper.Configuration;
using IMS.Core.Entities;

namespace IMS.API.Services
{
    public class ProductImportMap : ClassMap<Product>
    {

        public ProductImportMap()
        {

            Map(m => m.Id).Name("Id");
            Map(m => m.Name).Name("Name");
            Map(m => m.Description).Name("Description");
            Map(m => m.Price).Name("Price");
            Map(m => m.QuantityInStock).Name("QuantityInStock");
            Map(m => m.Supplier).Name("Supplier");
            Map(m => m.CategoryId).Name("CategoryId");
            Map(m => m.CreatedAt).Ignore();
            Map(m => m.LastUpdatedAt).Ignore();

        }
    }
}
