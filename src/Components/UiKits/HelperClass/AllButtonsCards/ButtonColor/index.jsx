import React from 'react';
import { ButtonColor } from '../../../../../Constant';
import CommonHeaderClass from '../../Common/CommonHeaderClass';

const ButtonColorCard = () => {
  return (
    <CommonHeaderClass title={ButtonColor}>{`.btn-primary {
        background-color: #7366ff;
        border-color: #7366ff;
        }
        .btn-secondary {
        background-color: #f73164;
        border-color: #f73164;
        }
        .btn-success {
        background-color: #51bb25 !important;
        color: #fff;
        }
        .btn-success {
        background-color: #51bb25;
        border-color: #51bb25;
        }
        .btn-danger {
        background-color: #dc3545;
        border-color: #dc3545;
        }
        .btn-info {
        background-color: #a927f9;
        border-color: #a927f9;
        }
        .btn-light {
        background-color: #f4f4f4;
        border-color: #f4f4f4;
        }
        .btn-warning {
        background-color: #f8d62b;
        border-color: #f8d62b;
        }
      `}
    </CommonHeaderClass>

  );
};

export default ButtonColorCard;