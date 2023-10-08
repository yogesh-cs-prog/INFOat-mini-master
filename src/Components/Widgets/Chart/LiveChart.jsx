import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import Chart from 'react-apexcharts';
import { LiveProductChart } from '../../Common/Data/ApexChart';
import HeaderCard from '../../Common/Component/HeaderCard';

const LiveChart = () => {
  return (
    <Col xl={7} className='xl-50 box-col-6'>
      <div className='small-chart-widget chart-widgets-small'>
        <Card>
          <HeaderCard title={'Live Products'} />
          <CardBody>
            <div className='chart-container'>
              <Row>
                <Col>
                  <div id='chart-widget6'>
                    <Chart options={LiveProductChart.options} series={LiveProductChart.series} type='area' height={320} />
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default LiveChart;
