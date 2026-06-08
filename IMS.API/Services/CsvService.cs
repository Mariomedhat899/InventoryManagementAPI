using CsvHelper;
using CsvHelper.Configuration;
using IMS.Core.Entities;
using System.Globalization;

namespace IMS.API.Services
{
    public class CsvService
    {
        public string ExportProductsToCsv(IEnumerable<Product> products)
        {
            using var writer = new StringWriter();
            using var csv = new CsvWriter(writer, CultureInfo.InvariantCulture);
            csv.WriteField("Id");
            csv.WriteField("Name");
            csv.WriteField("Description");
            csv.WriteField("Price");
            csv.WriteField("QuantityInStock");
            csv.WriteField("Supplier");
            csv.WriteField("CategoryId");
            csv.WriteField("CreatedAt");
            csv.WriteField("LastUpdatedAt");
            csv.NextRecord();



            foreach (var product in products)
            {
                csv.WriteField(product.Id);
                csv.WriteField(product.Name);
                csv.WriteField(product.Description);
                csv.WriteField(product.Price);
                csv.WriteField(product.QuantityInStock);
                csv.WriteField(product.Supplier);
                csv.WriteField(product.CategoryId);
                csv.WriteField(product.CreatedAt);
                csv.WriteField(product.LastUpdatedAt);
                csv.NextRecord();

            }
            ;

            return writer.ToString();
        }

        public List<Product> ImportProductsFromCsv(string csvContent)
        {
            using var reader = new StringReader(csvContent);
            using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);
            var config = new CsvConfiguration(CultureInfo.InvariantCulture)
            {
                IgnoreReferences = true,
            };

            csv.Context.RegisterClassMap<ProductImportMap>();

            return csv.GetRecords<Product>().ToList();
        }
    }
}
