namespace IMS.API.Services;

public class ProductImportRow
{
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public decimal Price { get; set; }
    public int QuantityInStock { get; set; }
    public string? Supplier { get; set; }
    public string? Category { get; set; }
}
