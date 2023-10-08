import React from 'react';
import { ButtonOutline } from '../../../../../Constant';
import CommonHeaderClass from '../../Common/CommonHeaderClass2';

const ButtonOutlineCard = () => {
  return (
    <CommonHeaderClass title={ButtonOutline}>{`.btn-outline-primary {
        border-color: #7366ff;
        color: #7366ff;
        background-color: transparent;
        }
        .btn-outline-secondary {
        border-color: #f73164;
        color: #f73164;
        background-color: transparent;
        }
        .btn-outline-success {
        border-color: #51bb25;
        color: #51bb25;
        background-color: transparent;
        }
        .btn-outline-danger {
        border-color: #dc3545;
        color: #dc3545;
        background-color: transparent;
        }
        .btn-outline-info {
        border-color: #a927f9;
        color: #a927f9;
        background-color: transparent;
        }
        .btn-outline-light {
        border-color: #f4f4f4;
        color: #f4f4f4;
        background-color: transparent;
        }
        .btn-outline-dark {
        border-color: #2c323f;
        color: #2c323f;
        background-color: transparent;
        }
        .btn-outline-warning {
        border-color: #f8d62b;
        color: #f8d62b;
        background-color: transparent;
        }
    `}</CommonHeaderClass>

  );
};

export default ButtonOutlineCard;