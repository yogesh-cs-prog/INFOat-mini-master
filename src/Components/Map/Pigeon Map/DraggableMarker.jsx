import React, { Fragment, useState } from 'react';
import { Map, Draggable, Marker } from "pigeon-maps";
import { Col, Card, CardBody, CardHeader } from 'reactstrap';
import { DraggableMarkers } from '../../../Constant';
import { H5 } from '../../../AbstractElements';

const DraggableMarker = () => {
  const [anchor, setAnchor] = useState([50.879, 4.6997]);
  return (
    <Fragment>
      <Col xl="6" md="12">
        <Card>
          <CardHeader>
            <H5>{DraggableMarkers}</H5>
          </CardHeader>
          <CardBody>
            <div className="map-js-height">
              <Map height={500} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
                  <Marker width={50} anchor={[50.879, 4.6997]} />
                </Draggable>
              </Map>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default DraggableMarker;