import React, { useState } from 'react';
import { Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { BasicExamples } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';
import { BasicPopoverData } from '../../../Common/Data/Ui-kits';
import CommonPopover from '../common/CommonPopover';

const Basic = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);

  return (
    <Col sm="12">
      <Card>
        <HeaderCard title={BasicExamples} span1={'lorem ipsum dolor sit amet, consectetur adipisicing elit'} />
        <CardBody>
          <div className="btn-showcase">
            <Btn attrBtn={{ color: 'primary', className: 'example-popover', id: 'Popover-1' }}>Click to toggle popover</Btn>
            <Popover
              placement='right'
              isOpen={popover}
              target='Popover-1'
              toggle={Toggle}
            >
              <PopoverHeader>Popover title</PopoverHeader>
              <PopoverBody>
                And heres some amazing content. Its very engaging. Right?
              </PopoverBody>
            </Popover>
            {BasicPopoverData.map((popover) => {
              return <CommonPopover key={popover.id} item={popover} />;
            })}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Basic;