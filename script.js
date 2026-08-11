// Get product from URL
const params = new URLSearchParams(window.location.search);
const selectedProduct = params.get("product");

if (selectedProduct) {
    const productInput = document.getElementById("product");
    if (productInput) {
        productInput.value = selectedProduct;
    }
}

// Handle form submission
const orderForm = document.getElementById("orderForm");

if (orderForm) {
    orderForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const product = document.getElementById("product").value;
        const details = document.getElementById("details").value;

        alert(
            "Thank you, " + name + "! 🌸\n\n" +
            "Your order for '" + product + "' has been received.\n" +
            "We will contact you soon on " + phone + "."
        );

        orderForm.reset();

        if (selectedProduct) {
            document.getElementById("product").value = selectedProduct;
        }
    });
}  