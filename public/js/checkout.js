document.addEventListener("DOMContentLoaded", function () {
  const cartSubtotal = document.querySelector(".cart-subtotal");
  const cartTax = document.querySelector(".cart-tax");
  const cartTotal = document.querySelector(".cart-total");
  const submitBtn = document.getElementById("submitBtn");
  const checkoutForm = document.getElementById("checkoutForm");

  function formatRupiah(value) {
    return "Rp" + value.toLocaleString("id-ID", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function updateCartSummary() {
    let subtotal = 0;

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = "";

    cartItems.forEach((item) => {
      const { name, price, quantity } = item;
      const itemSubtotal = price * quantity;
      subtotal += itemSubtotal;

      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${name}</td>
          <td>${quantity}</td>
          <td>${formatRupiah(itemSubtotal)}</td>
        `;
      cartItemsContainer.appendChild(row);
    });

    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    cartSubtotal.textContent = formatRupiah(subtotal);
    cartTax.textContent = formatRupiah(tax);
    cartTotal.textContent = formatRupiah(total);

    submitBtn.disabled = !checkoutForm.checkValidity();
  }

  checkoutForm.addEventListener("input", function () {
    submitBtn.disabled = !checkoutForm.checkValidity();
  });

  updateCartSummary();
});
