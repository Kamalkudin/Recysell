document.addEventListener("DOMContentLoaded", function () {
  const quantityInputs = document.querySelectorAll(".quantity");
  const cartSubtotals = document.querySelectorAll(".subtotal");
  const cartSubtotal = document.querySelector(".cart-subtotal");
  const cartTax = document.querySelector(".cart-tax");
  const cartTotal = document.querySelector(".cart-total");
  const removeLinks = document.querySelectorAll('a[href="#remove"]');

  function formatRupiah(value) {
    return "Rp" + value.toLocaleString("id-ID", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function updateCart() {
    let subtotal = 0;
    quantityInputs.forEach((input) => {
      const priceElement = input.closest("tr").querySelector(".price");
      const price = parseFloat(priceElement.getAttribute("data-price"));
      const quantity = parseInt(input.value);
      const subtotalElement = input.closest("tr").querySelector(".subtotal");
      const newSubtotal = price * quantity;
      subtotalElement.textContent = formatRupiah(newSubtotal);
      subtotal += newSubtotal;
    });

    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    cartSubtotal.textContent = formatRupiah(subtotal);
    cartTax.textContent = formatRupiah(tax);
    cartTotal.textContent = formatRupiah(total);
  }

  function removeItem(event) {
    event.preventDefault();
    const row = event.target.closest("tr");
    row.remove();
    updateCart();
  }

  quantityInputs.forEach((input) => {
    input.addEventListener("input", updateCart);
  });

  removeLinks.forEach((link) => {
    link.addEventListener("click", removeItem);
  });

  updateCart();
});
