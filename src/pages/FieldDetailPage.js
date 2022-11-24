import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectFieldById } from '../features/fields/fieldsSlice';
import FieldDetail from '../features/fields/FieldDetail';

import SubHeader from '../components/SubHeader';

const FieldDetailPage = () => {
    const { fieldId } = useParams();
    const field = useSelector(selectFieldById(fieldId));
    console.log('filed:', field)
    
    return (
        <Container>
            <SubHeader current={field.name} detail={true} />
            <Row>
                <FieldDetail field={field} />


            </Row>
        </Container>
    );
};

export default FieldDetailPage;