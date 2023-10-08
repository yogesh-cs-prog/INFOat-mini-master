import React, { Fragment } from 'react';
import Board from '@asseinfo/react-kanban';
import { Col, Card, CardBody } from 'reactstrap';
import { DragBothTitleCard } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const BothDragClass = () => {
    const board = {
        columns: [
            {
                id: 1,
                title: 'Basic card',
                cards: [
                    {
                        id: 1,
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            },
            {
                id: 2,
                title: 'Flat Card',
                cards: [
                    {
                        id: 2,
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            }
        ]
    };
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <HeaderCard title={DragBothTitleCard} />
                    <CardBody className="draggable-card">
                        <Board initialBoard={board} >{board}</Board>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default BothDragClass;