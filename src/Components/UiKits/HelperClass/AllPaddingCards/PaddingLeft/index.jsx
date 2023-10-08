import React from 'react';
import { PaddingLeft } from '../../../../../Constant';
import CommonHeaderClass from '../../Common/CommonHeaderClass';

const PaddingLeftCard = () => {
  return (
    <CommonHeaderClass title={PaddingLeft}>{`.p-l-0 {
        padding-left: 0px;
        }
        .p-l-5 {
        padding-left: 5px;
        }
        .p-l-10 {
        padding-left: 10px;
        }
        .p-l-15 {
        padding-left: 15px;
        }
        .p-l-20 {
        padding-left: 20px;
        }
        .p-l-25 {
        padding-left: 25px;
        }
        .p-l-30 {
        padding-left: 30px;
        }
        .p-l-35 {
        padding-left: 35px;
        }
        .p-l-40 {
        padding-left: 40px;
        }
        .p-l-45 {
        padding-left: 45px;
        }
        .p-l-50 {
        padding-left: 50px;
        }
      `}
    </CommonHeaderClass>
  );
};

export default PaddingLeftCard;