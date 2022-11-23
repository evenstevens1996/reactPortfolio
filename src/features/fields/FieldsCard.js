import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const FieldsCard = ({ fields }) => {
    const { id, image, name } = fields;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg
                    width='100%'
                    src={image}
                    alt={name}
                />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
};
export default FieldsCard;