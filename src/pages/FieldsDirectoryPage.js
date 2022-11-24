import { Container } from 'reactstrap';
import FieldsList from '../features/fields/FieldsList';
import SubHeader from '../components/SubHeader';

const FieldsDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory' />
            <FieldsList />
        </Container>
    );
};

export default FieldsDirectoryPage;