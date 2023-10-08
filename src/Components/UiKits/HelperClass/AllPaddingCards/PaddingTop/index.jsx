import React from 'react';
import { PaddingTop } from '../../../../../Constant';
import CommonHeaderClass from '../../Common/CommonHeaderClass';

const PaddingTopCard = () => {
  return (
    <CommonHeaderClass title={PaddingTop}>{`.p-t-0 {
        padding-top: 0px !important;
        }
        .p-t-5 {
        padding-top: 5px !important;
        }
        .p-t-10 {
        padding-top: 10px !important;
        }
        .p-t-15 {
        padding-top: 15px !important;
        }
        .p-t-20 {
        padding-top: 20px !important;
        }
        .p-t-25 {
        padding-top: 25px !important;
        }
        .p-t-30 {
        padding-top: 30px !important;
        }
        .p-t-35 {
        padding-top: 35px !important;
        }
        .p-t-40 {
        padding-top: 40px !important;
        }
        .p-t-45 {
        padding-top: 45px !important;
        }
        .p-t-50 {
        padding-top: 50px !important;
        }
      `}
    </CommonHeaderClass>

  );
};

export default PaddingTopCard;