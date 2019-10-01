import {shippingOption} from "../core/components/shipping-object";

export const calculateShippingCost = (weight, shippingOption) => {

  const ShippingOption = {
    ground: 1,
    priority: 2
  };

  const shippingRate = 0.4;
  const shippingCost =
    weight *
    shippingRate *
    (shippingOption === ShippingOption.ground ? 1 : 1.5);
  return shippingCost;
}
