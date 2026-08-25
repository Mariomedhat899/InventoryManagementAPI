# IMS — Inventory Management System

A full-featured **ASP.NET Core 10 Web API** for inventory management, built with **Clean Architecture**, **JWT authentication**, **role-based authorization**, **CSV import/export**, and **automated email notifications** for low stock alerts.

---

## Architecture

The solution follows **Clean Architecture** principles with three layers:

```
IMS.Core              → Domain entities, interfaces, business logic (no dependencies)
IMS.Infrastructure    → EF Core, Identity, external services (email, data access)
IMS.API               → Controllers, middleware, DI registration, configuration
```

This keeps the domain layer independent of frameworks and infrastructure concerns.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | ASP.NET Core 10 (.NET 10) |
| ORM | Entity Framework Core 10 |
| Database | SQL Server Express / Remote DB |
| Auth | ASP.NET Identity + JWT Bearer |
| Role System | Admin, Manager, Staff |
| Email | SMTP via System.Net.Mail (Gmail) |
| CSV | CsvHelper |
| Documentation | Swagger / OpenAPI |
| API Client | Bruno (API testing) |

---

## Features

### Authentication & Authorization (JWT)
- User registration and login
- JWT token generation with role claims
- Three roles: **Admin**, **Manager**, **Staff**
- Role-based access control on every endpoint

### Products Management
- Full CRUD operations
- Export all products to CSV file
- Import products from CSV (bulk add/update)
- Category association

### Categories Management
- Create, read, update, delete categories
- Products linked via foreign key

### Transactions
- Record sales (decreases stock) and purchases (increases stock)
- Insufficient stock validation on sales
- Auto-triggers **low stock email alert** when quantity drops below threshold

### Payments
- Payment tracking with status (Pending/Completed/Failed)
- Payment method and transaction reference
- Full CRUD with role-based access

### Low Stock Alerts
- Configurable threshold (default: 10)
- Automatic email notification via SMTP when stock drops below threshold
- Email includes product name, current quantity, and threshold
- Graceful error handling — email failure does not break the transaction

### Reports
- Inventory summary: total stock value, product count
- Sales and purchases breakdown with totals
- Top selling products ranking

### Data Seeding
- Role seeder: creates Admin, Manager, Staff roles + test users
- Data seeder: reads JSON files to seed categories and products
- Idempotent — only runs once, safe to restart

---

## API Endpoints

### Auth
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | /api/auth/register | Public | Register new user |
| POST | /api/auth/login | Public | Login, returns JWT token |

### Products
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | /api/products | Admin, Manager, Staff | Get all products |
| GET | /api/products/{id} | Admin, Manager, Staff | Get product by ID |
| GET | /api/products/export | Admin, Manager | Export products to CSV |
| POST | /api/products/import | Admin, Manager | Import products from CSV |
| POST | /api/products | Admin, Manager | Create product |
| PUT | /api/products/{id} | Admin, Manager | Update product |
| DELETE | /api/products/{id} | Admin | Delete product |

### Categories
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | /api/categories | Admin, Manager, Staff | Get all categories |
| GET | /api/categories/{id} | Admin, Manager, Staff | Get category by ID |
| POST | /api/categories | Admin, Manager | Create category |
| PUT | /api/categories/{id} | Admin | Update category |
| DELETE | /api/categories/{id} | Admin | Delete category |

### Transactions
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | /api/transactions | Admin, Manager | Get all transactions |
| GET | /api/transactions/{id} | Admin, Manager | Get transaction by ID |
| POST | /api/transactions | Admin, Manager, Staff | Record sale or purchase |

### Payments
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | /api/payments | Admin, Manager | Get all payments |
| GET | /api/payments/{id} | Admin, Manager | Get payment by ID |
| POST | /api/payments | Admin, Manager | Create payment |
| PUT | /api/payments/{id} | Admin, Manager | Update payment |
| DELETE | /api/payments/{id} | Admin | Delete payment |

### Reports
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | /api/reports | Admin, Manager | Get inventory report |

### Low Stock Alerts
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | /api/lowStockAlerts | Admin, Manager | Create low stock alert |
| GET | /api/lowStockAlerts | Admin, Manager | Get all low stock alerts |

---

## Role Permissions

| Feature | Admin | Manager | Staff |
|---------|-------|---------|-------|
| View Products/Categories | ✅ | ✅ | ✅ |
| Create/Edit Products | ✅ | ✅ | ❌ |
| Delete Products | ✅ | ❌ | ❌ |
| Export/Import CSV | ✅ | ✅ | ❌ |
| Record Sales/Purchases | ✅ | ✅ | ✅ |
| View Transactions | ✅ | ✅ | ❌ |
| Manage Payments | ✅ | ✅ | ❌ |
| View Reports | ✅ | ✅ | ❌ |
| Manage Alerts | ✅ | ✅ | ❌ |

---

## Getting Started

### Prerequisites
- .NET 10 SDK
- SQL Server (LocalDB or full instance)
- Gmail App Password (for email notifications)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mariomedhat899/IMS-Backend.git
   cd IMS-Backend
   ```

2. **Configure the database connection** in `IMS.API/appsettings.json`:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=(local)\\SQLEXPRESS;Database=IMS_DB;Trusted_Connection=True;TrustServerCertificate=True"
   }
   ```

3. **Set up User Secrets** (for SMTP credentials):
   ```bash
   cd IMS.API
   dotnet user-secrets init
   dotnet user-secrets set "SmtpSettings:Password" "your-gmail-app-password"
   ```

4. **Build and run**
   ```bash
   dotnet build
   cd IMS.API
   dotnet run
   ```

5. **Access Swagger UI** at `https://localhost:<port>/swagger`

6. **Seed data** is applied automatically on startup:
   - 3 roles: Admin, Manager, Staff
   - 1 admin user, 1 manager user, 1 staff user
   - 5 categories
   - 10 products

---

## Design Patterns & Principles

- **Clean Architecture** — Core layer has zero external dependencies
- **Repository Pattern** — EF Core DbContext as unit of work
- **Dependency Injection** — All services registered in DI container
- **Interface Segregation** — `IEmailService` abstraction
- **Idempotent Seeders** — Safe to run on every startup
- **Graceful Degradation** — Email failures don't break transactions
- **Role-Based Access Control** — Declarative authorization attributes
