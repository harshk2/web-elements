$(document).ready(function() {
    let authToken = null;

    // Function to handle login and get the authentication token
    function login() {
        const loginData = {
            "login_id": "test@sunbasedata.com",
            "password": "Test@123"
        };

        $.ajax({
            url: "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(loginData),
            success: function(response) {
                authToken = response.token;
                $("#customerSection").show();
                loadCustomerList();
            },
            error: function(error) {
                alert("Authentication failed. Please check your credentials.");
            }
        });
    }

    // Function to load the list of customers
    function loadCustomerList() {
        $.ajax({
            url: "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list",
            type: "GET",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + authToken
            },
            success: function(response) {
                displayCustomerList(response);
            },
            error: function(error) {
                alert("Error fetching customer list.");
            }
        });
    }

    // Function to display the customer list in the table
    function displayCustomerList(customers) {
        $("#customerList").empty();

        customers.forEach(function(customer) {
            const row = $("<tr>");
            row.append($("<td>").text(customer.first_name));
            row.append($("<td>").text(customer.last_name));
            row.append($("<td>").text(customer.email));
            row.append($("<td>").text(customer.phone));

            const deleteButton = $("<button>").text("Delete");
            deleteButton.click(function() {
                deleteCustomer(customer.uuid);
            });

            const updateButton = $("<button>").text("Update");
            updateButton.click(function() {
                updateCustomerForm(customer);
            });

            const actionsCell = $("<td>");
            actionsCell.append(deleteButton);
            actionsCell.append(updateButton);

            row.append(actionsCell);
            $("#customerList").append(row);
        });
    }

    // Function to create a new customer
    function createCustomer() {
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const email = $("#email").val();
        const phone = $("#phone").val();

        if (!firstName || !lastName) {
            alert("First Name and Last Name are mandatory fields.");
            return;
        }

        const customerData = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "phone": phone
        };

        $.ajax({
            url: "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create",
            type: "POST",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + authToken
            },
            contentType: "application/json",
            data: JSON.stringify(customerData),
            success: function(response) {
                loadCustomerList();
                $("#firstName").val("");
                $("#lastName").val("");
                $("#email").val("");
                $("#phone").val("");
                alert("Customer created successfully.");
            },
            error: function(error) {
                alert("Error creating customer.");
            }
        });
    }

    // Function to delete a customer by UUID
    function deleteCustomer(uuid) {
        $.ajax({
            url: "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=delete&uuid=" + uuid,
            type: "POST",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + authToken
            },
            success: function(response) {
                loadCustomerList();
                alert("Customer deleted successfully.");
            },
            error: function(error) {
                alert("Error deleting customer.");
            }
        });
    }

    // Function to update a customer
    function updateCustomer(uuid) {
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const email = $("#email").val();
        const phone = $("#phone").val();

        if (!firstName || !lastName) {
            alert("First Name and Last Name are mandatory fields.");
            return;
        }

        const customerData = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "phone": phone
        };

        $.ajax({
            url: "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=update&uuid=" + uuid,
            type: "POST",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + authToken
            },
            contentType: "application/json",
            data: JSON.stringify(customerData),
            success: function(response) {
                loadCustomerList();
                $("#firstName").val("");
                $("#lastName").val("");
                $("#email").val("");
                $("#phone").val("");
                alert("Customer updated successfully.");
            },
            error: function(error) {
                alert("Error updating customer.");
            }
        });
    }

    // Event listener for login button
    $("#loginBtn").click(function() {
        login();
    });

    // Event listener for create customer button
    $("#createBtn").click(function() {
        createCustomer();
    });
});
