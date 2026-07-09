# API Node SOLID

REST API built with Node.js and TypeScript, applying **SOLID principles** and **Clean Architecture** patterns.

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express 5
- **Database**: MongoDB (Mongoose 9)
- **UUID**: uuid

## Architecture

The project follows Clean Architecture with strict separation of concerns:

```
src/
├── entities/          # Domain entities
├── repositories/      # Data access layer (interface + implementation)
│   ├── schemas/       # Mongoose schemas
│   └── implementation/
├── useCases/          # Business logic (Use Case pattern)
│   ├── CreateUser/
│   ├── DeleteUser/
│   ├── GetAllUsers/
│   └── UpdateUser/
├── providers/         # External service interfaces
├── database/          # Database connection
├── routes.ts          # Route definitions
├── app.ts             # Express app setup
└── server.ts          # Server entry point
```

### SOLID Principles Applied

| Principle | Implementation |
|---|---|
| **Single Responsibility** | Each use case has its own controller, DTO, and use case class |
| **Open/Closed** | Repository interface (`IUsersRepository`) allows new implementations without modifying existing code |
| **Liskov Substitution** | `UserImplementation` is interchangeable with any class implementing `IUsersRepository` |
| **Interface Segregation** | Separate interfaces: `IMailProvider`, `ILoggerProvider`, `IUsersRepository` |
| **Dependency Inversion** | All dependencies injected via constructors; use cases depend on abstractions, not concrete classes |

## API Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/` | Health check |
| `GET` | `/users` | List all users |
| `POST` | `/users` | Create a new user |
| `DELETE` | `/users/:uuid` | Delete a user by UUID |

### Request/Response Examples

**Create User**

```http
POST /users
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com"
}
```

Response: `201 Created`

**Get All Users**

```http
GET /users
```

Response: `200 OK` — `[{ id, username, email }, ...]`

## Prerequisites

- Node.js 18+
- MongoDB running locally on `localhost:27017`

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The server starts on `http://localhost:3000` by default. Set the `PORT` environment variable to change it.

## Scripts

| Command | Description |
|---|---|
| `npm start` | Start production server |
| `npm run dev` | Start dev server with hot-reload (`tsx`) |
| `npm run build` | Compile TypeScript to JavaScript |
## Project Structure Details

### Entities

Define the core domain objects. The `User` entity auto-generates a UUID on creation:

```typescript
class User {
  public readonly id: string;
  public username: string;
  public email: string;
}
```

### Repositories

Abstract the data access layer behind interfaces (`IUsersRepository`), with Mongoose-backed implementations. This allows swapping the storage backend without touching business logic.

### Use Cases

Each feature is encapsulated in its own folder with:

- **DTO** (`*DTO.ts`) — Data Transfer Object defining the request shape
- **UseCase** (`*UseCase.ts`) — Business logic, depends only on repository interfaces
- **Controller** (`*Controller.ts`) — HTTP layer, delegates to the use case
- **index.ts** — Manual dependency injection wiring

### Providers

Interfaces for external services (`IMailProvider`, `ILoggerProvider`). Implementations can be swapped in without changing consumers.

## License

ISC
