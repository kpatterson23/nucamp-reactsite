import { PROMOTIONS } from "../../app/shared/PROMOTIONS";

export const selectedFeaturedPromotion = () => {
  return PROMOTIONS.find((promotion) => promotion.featured);
};
