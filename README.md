The system should have the following functionalities:
-Manage Car (CRUD operations)
-Manage Customers (CRUD operations)
-Manage Rentals (CRUD operations)
and when a Car is rented, it is marked as rented and cannot
be rented again until returned.

------------------------------------------------------------------------------------------

MongoDB Models:-

Car: Should have fields like name, model, and rental status
(available/rented).
Customer: Should have fields like name, password, email, and phone
number.
Rental: Should have references to both Car and Customer and
include fields for rental date and return date.


-----------------------------------------------------------------------------------------

APIs:-

User APIs:
1- Signup
2- Sign in
3- Get a specific user.
4- Get all users.
5- Update user (owner only)
6- Delete user (owner only)


Car APIs:
1- Add car
2- Get a specific car
3- Get all cars
4- Update a car.
5- Delete a car.


Rental APIs:
1- Create Rental
2- Update Rental
3- Delete Rental
4- Get all Rentals
5- Get a specific Rental


Special APIs:
1- Get all cars whose model is ‘Honda’ and ‘Toyota’ (using query
params)
2- Get Available Cars of a Specific Model.
3- Get Cars that are Either rented or of a Specific Model.
4- Get Available Cars of Specific Models or Rented Cars of a
Specific Model


--------------------------------------------------------------------------------------------------------------

postman documentation:-https://documenter.getpostman.com/view/37303980/2sA3s7kpUc
