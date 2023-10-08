import React, { Fragment } from "react";
import ChartistGraph from "react-chartist";
import { Col, Card, CardBody } from "reactstrap";
import { AdvancedSMILAnimations } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";

const SVGPathAnimationClass = ({ chartData }) => {
    return (
        <Fragment>
            <Col xl="6" md="12" sm="12" >
                <Card>
                    <HeaderCard title={AdvancedSMILAnimations} />
                    <CardBody>
                        <ChartistGraph
                            key="1"
                            className="ct-7 flot-chart-container"
                            data={{
                                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                                series: [[1, 5, 2, 5, 4, 3],
                                [2, 3, 4, 8, 1, 2],
                                [5, 4, 3, 2, 1, 0.5]]
                            }} type={'Line'} listener={{
                                "draw": function (data) {
                                    if (data.type === 'line' || data.type === 'area') {
                                        data.element.animate({
                                            d: {
                                                begin: 2000 * data.index,
                                                dur: 2000,
                                                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                                                to: data.path.clone().stringify(),
                                            }
                                        });
                                    }
                                }
                            }} options={chartData.chart2} />
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default SVGPathAnimationClass;