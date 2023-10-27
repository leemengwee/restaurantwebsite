function toggleSections() {
            var deliveryOrPickup = document.getElementById("deliveryOrPickup");
            var deliveryAddress = document.getElementById("deliveryAddress");
            var billingAddress = document.getElementById("billingAddress");
            var deliverySameAsBilling = document.getElementById("sameAsBilling");
            var payOption = document.getElementById("payOption");

            // Show or hide delivery and billing addresses based on user's choice
            deliveryAddress.style.display = (deliveryOrPickup.value === "delivery") ? "block" : "none";
            billingAddress.style.display = "block"; // Always show billing address
            deliverySameAsBilling.style.display = (deliveryOrPickup.value === "delivery") ? "block" : "none";

            // Remove "Pay on Pickup" option only when the user selects "Delivery"
            var payOptionPickup = payOption.querySelector('option[value="pickup"]');
            if (deliveryOrPickup.value === "delivery" && payOptionPickup) {
                payOption.removeChild(payOptionPickup);
            } else if (deliveryOrPickup.value === "pickup" && !payOptionPickup) {
                // Restore "Pay on Pickup" option if it's not present
                payOption.appendChild(new Option("Pay on Pickup", "pickup"));
            }

            // Show or hide billing address based on user's choice
            billingAddress.style.display = (deliverySameAsBilling.checked) ? "none" : "block";
        }

        function togglePaymentDetails() {
            var payOption = document.getElementById("payOption");
            var creditCardDetails = document.getElementById("creditCardDetails");

            // Show or hide credit card details based on user's choice
            creditCardDetails.style.display = (payOption.value === "online") ? "block" : "none";
        }

        function toggleBillingAddress() {
            var billingAddress = document.getElementById("billingAddress");
            var deliverySameAsBilling = document.getElementById("sameAsBilling");

            // Show or hide billing address based on "Delivery same as billing" checkbox
            billingAddress.style.display = (deliverySameAsBilling.checked) ? "none" : "block";
        }

    function validateForm() {
    // Define an array of required field IDs
    var requiredFields = ["deliveryOrPickup", "Nameorder", "contactNumber", "email", "payOption"];

    // Loop through each required field, concept from INTRO PROGRAMMING
    for (var i = 0; i < requiredFields.length; i++) {
        // Get the current field by its ID
        var field = document.getElementById(requiredFields[i]);

        // Check if the field is empty after trimming whitespaces
        if (!field.value.trim()) {
            // Display an alert if any required field is empty
            alert("Please fill in all the required fields.");

            // Prevent form submission by returning false
            return false;
        }
    }
    // If all required fields are filled and password is long enough, allow form submission
    return true;
}
