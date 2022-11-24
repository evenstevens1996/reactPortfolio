import { useSelector } from 'react-redux';
import { selectAllFields } from './fieldsSlice';
import { Col, Row } from 'reactstrap';
import FieldCard from './FieldCard';

const FieldsList = () => {
    const fields = useSelector(selectAllFields);
    console.log('fields:', fields);
    return (
        <Row className='ms-auto'>
            {fields.map((field) => {
                return (
                    <Col md='5' className='m-4' key={field.id}>
                        <FieldCard field={field} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default FieldsList;