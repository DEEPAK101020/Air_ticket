# Air Ticket Booking Backend API

This is the backend API for the Air Ticket Booking system. It provides endpoints for user authentication, flight management, and booking operations.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- bcrypt (for password hashing)
- JWT (for authentication)
- dotenv (for environment variables)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-folder>


backend deployed on https://air-ticket-q4ih.onrender.com/

## User Registration

This endpoint allows users to register by creating a new account.
http://localhost:3000/user/register

### Request Body

```markdown
{
  "email": "string",
  "password": "string"
}

## User login

This endpoint allows users to login to your account.
http://localhost:3000/user/login

### Request Body

```markdown
{
  "email": "string",
  "password": "string"
}


## Get Booking Dashboard

This endpoint retrieves the booking dashboard data.
http://localhost:3000/booking/api/dashboard

### Request


### Query Parameters

- `user` (string, optional): The user ID for filtering the dashboard data.
- `flight` (string, optional): The flight ID for filtering the dashboard data.

## Update Booking Dashboard

This endpoint is used to update the booking dashboard for a specific user.
http://localhost:3000/booking/api/dashboard/65eef95c2610b5257c3ec1c4

### Request Body

- `user` (text): The user information for the booking dashboard.
- `flight` (text): The flight information for the booking dashboard.

