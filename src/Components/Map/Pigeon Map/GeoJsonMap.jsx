import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Map, GeoJson, GeoJsonFeature } from 'pigeon-maps';
import { GeoJsonMaps } from '../../../Constant';
import { H5 } from '../../../AbstractElements';

const GeoJsonMap = () => {
  const geoJsonFeatureSample = {
    type: 'Feature',
    geometry: { type: 'Point', coordinates: [2.0, 48.5] },
    properties: { prop0: 'value0' },
  };
  return (
    <Fragment>
      <Col xl='6' md='12'>
        <Card>
          <CardHeader>
            <H5>{GeoJsonMaps}</H5>
          </CardHeader>
          <CardBody>
            <div className='map-js-height'>
              <Map height={500} defaultCenter={[50.879, 4.6997]} defaultZoom={4} width={693.5}>
                <GeoJson
                  svgAttributes={{
                    fill: '#d4e6ec99',
                    strokeWidth: '1',
                    stroke: 'white',
                    r: '20',
                  }}>
                  <GeoJsonFeature feature={geoJsonFeatureSample} />
                </GeoJson>
              </Map>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default GeoJsonMap;
