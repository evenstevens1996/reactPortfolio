import {  Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import MiaHamm from '../app/assets/img/MiaHamm.jpg';
import SubHeader from '../components/SubHeader';
import PartnersList from '../features/partners/PartnersList';

const HomePage = () => {
    return (
        <Container>

                <SubHeader current='Home' />
                <Row>
                <img src={MiaHamm} 
                />
            </Row>
                <Row className='row-content'>
                <Col sm='6'>
                    <h3>About Us</h3>
                    <p>
                        For the last 5 years we have been innovating the way sports are played. Our league allows peopleof all ages to play the sport they love. 
                        We offer a recreational league, which takes place from fall through winter. We also have our competitive league, which is year-around.
                        We have turf fields and indoor fields. If you are looking for a fun way to pass the time or even a competitive league, you have come to the right place.
                        We look forward to seeing you on the field, sign up today! 
                    </p>
                </Col>
                <Col sm='6'>
                    <Card>
                        <CardHeader className='bg-dark text-white'>
                            <h3>Facts at a Glance</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className='row'>
                                <dt className='col-6'>Founded</dt>
                                <dd className='col-6'>October 1, 2017</dd>
                                <dt className='col-6'>No. of Teams in 2017</dt>
                                <dd className='col-6'>10</dd>
                                <dt className='col-6'>No. of Teams Today</dt>
                                <dd className='col-6'>208</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col xs='12'>
                    <h3>Our Sponsors</h3>
                </Col>
                <PartnersList />
            </Row>
        </Container>

    );
};

export default HomePage;