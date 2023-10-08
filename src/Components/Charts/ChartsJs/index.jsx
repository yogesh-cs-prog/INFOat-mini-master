import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import BarChartClass from './BarChart';
import DoughnutChartClass from './DoughnutChart';
import LineChartClass from './LineChart';
import LineChart2Class from './LineChart2';
import PolarChartClass from './PolarChart';
import RadarChartClass from './RadarChart';

const Charts = () => {

  return (
    <Fragment>
      <Breadcrumbs mainTitle='ChartJS Chart' parent="Charts" title="ChartJS Chart" />
      <Container fluid={true}>
        <Row>
          <BarChartClass />
          <LineChartClass />
           <RadarChartClass />
          <LineChart2Class />
          <DoughnutChartClass />
          <PolarChartClass />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Charts;