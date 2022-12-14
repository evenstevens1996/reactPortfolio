import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
//import DisplayCard from './DisplayCard';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedPartner } from '../partners/partnersSlice';
import { selectFeaturedFields } from '../fields/fieldsSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';

const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedFields(state),
        selectFeaturedPromotion(state),
        selectFeaturedPartner(state)
    ]);
    console.log('display items:', items);

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    item && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={item} />
                        </Col>
                    )
                );;
            })}
        </Row>
    );
};

export default DisplayList;