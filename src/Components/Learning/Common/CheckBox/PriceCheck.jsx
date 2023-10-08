import { AllCourses, FreeCourses, PaidCourses, Price } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Input, Label } from 'reactstrap';

const PriceCheck = () => {
    return (
        <Fragment>
            <div className="checkbox-animated mt-0">
                <div className="learning-header"><span className="f-w-600">{Price}</span></div>
                <Label className="d-block" htmlFor="edo-ani">
                    <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" defaultChecked="" />
                    {AllCourses}
                </Label>
                <Label className="d-block" htmlFor="edo-ani1">
                    <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" defaultChecked="" />
                    {PaidCourses}
                </Label>
                <Label className="d-block" htmlFor="edo-ani2">
                    <Input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked="" />
                    {FreeCourses}
                </Label>
            </div>
        </Fragment>
    );
};

export default PriceCheck;