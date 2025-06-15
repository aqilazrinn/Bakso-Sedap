function submitOrder() {
  let msg = `Hai, saya nak order Bakso Sedap:\n\n`;
  let total = 0;

  const items = [
    {
      name: "Bakso Daging",
      qty: parseInt(document.getElementById("qty1").value),
      mee: document.getElementById("mee1").value,
      price: 6,
    },
    {
      name: "Bakso Ayam",
      qty: parseInt(document.getElementById("qty2").value),
      mee: document.getElementById("mee2").value,
      price: 6,
    },
    {
      name: "Bakso Mercun",
      qty: parseInt(document.getElementById("qty3").value),
      mee: document.getElementById("mee3").value,
      price: 10,
    },
    {
      name: "Bakso Beranak",
      qty: parseInt(document.getElementById("qty4").value),
      mee: document.getElementById("mee4").value,
      price: 12,
    },
  ];

  let hasOrder = false;

  items.forEach((item) => {
    if (item.qty > 0) {
      msg += `${item.qty}x ${item.name} (${item.mee}) = RM${item.qty * item.price}\n`;
      total += item.qty * item.price;
      hasOrder = true;
    }
  });

  if (!hasOrder) {
    alert("Sila pilih sekurang-kurangnya satu item.");
    return;
  }

  msg += `\nJumlah: RM${total} (belum masuk COD)\n`;
  msg += `\nNama: ______\nAlamat: ______\n*Delivery charge ikut kawasan*`;

  const url = `https://wa.me/60123076251?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}
