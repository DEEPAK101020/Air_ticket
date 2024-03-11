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

