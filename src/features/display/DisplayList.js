import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectedFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectedFeaturedPartner } from "../partners/partnersSlice";

const DisplayList = () => {
  const items = [selectFeaturedCampsite(), selectedFeaturedPromotion(), selectedFeaturedPartner()];

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          <Col md className="m-1" key={idx}>
            <DisplayCard item={item} />
          </Col>
        );
      })}
    </Row>
  );
};

export default DisplayList;
