using CsvHelper.Configuration;
using IMS.API.Services;

namespace IMS.API.Services;

public class ProductImportRowMap : ClassMap<ProductImportRow>
{
    public ProductImportRowMap()
    {
        Map(m => m.Name).Name("Name");
        Map(m => m.Description).Name("Description");
        Map(m => m.Price).Name("Price");
        Map(m => m.QuantityInStock).Name("QuantityInStock", "Stock");
        Map(m => m.Supplier).Name("Supplier");
        Map(m => m.Category).Name("CategoryId", "Category");
    }
}
