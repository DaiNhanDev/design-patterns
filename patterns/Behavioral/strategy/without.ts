export function getPrice(
  originalPrice: number,
  typePromotion = "default",
): number {
  if (typePromotion === "preOrder") {
    return originalPrice * 0.8;
  }
  if (typePromotion === "promotion") {
    return originalPrice < 200 ? originalPrice * 0.9 : originalPrice - 30;
  }
  return originalPrice;
}
