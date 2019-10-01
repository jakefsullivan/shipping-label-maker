const {calculateShippingCost} = require("../utils")

test("calculateShippingCost", () => {
  expect(calculateShippingCost(1, 1)).toBe(0.4)
}) 