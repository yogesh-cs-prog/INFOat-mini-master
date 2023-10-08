import React, { Fragment } from "react";
import ChartistGraph from "react-chartist";
import { Col, Card, CardBody } from "reactstrap";
import { ExtremeResponsiveConfiguration } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";

const ResponsiveChartClass = ({ chartData }) => {
    return (
        <Fragment>
            <Col xl="6" md="12" sm="12" >
                <Card>
                    <HeaderCard title={ExtremeResponsiveConfiguration} />
                    <CardBody>
                        <ChartistGraph
                            data={chartData.chart9Data}
                            options={chartData.chart9Option}
                            responsiveOptions={chartData.chart9ResponsiveOptions}
                            type={'Bar'}
                            className="ct-12 flot-chart-container" />
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default ResponsiveChartClass;