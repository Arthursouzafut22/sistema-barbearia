export function formatPrice(price: number) {
  const format = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return format;
}

export function scrollTop() {
  return window.scrollTo({ behavior: "smooth", top: 0 });
}
