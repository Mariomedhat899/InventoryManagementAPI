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

            csv.WriteHeader<Product>();
            csv.NextRecord();

            foreach (var product in products)
            {
                csv.WriteRecord(product);
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
