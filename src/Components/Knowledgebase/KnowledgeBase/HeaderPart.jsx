import { H3 } from '../../../AbstractElements';
import JobSearchContext from '../../../_helper/JobSearch';
import axios from 'axios';
import React, { Fragment, useContext, useState } from 'react';
import { Search } from 'react-feather';
import { Col, Form, Input } from 'reactstrap';
import { KnowledgebaseApi } from '../../../api';

const HeaderPart = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { setsearch } = useContext(JobSearchContext);
    const [Data, setData] = useState([]);
    const handleChange = event => {
        const searchByTitle = [];
        setSearchTerm(event.target.value);
        axios.get(KnowledgebaseApi).then(res => setData(res.data));
        Data.filter(data => {
            if (data.title.toLowerCase().indexOf(event.target.value) > -1) {
                searchByTitle.push(data);

            }
            return data;
        });
        setsearch(searchByTitle);

    };
    return (
        <Fragment>
            <Col xs="12">
                <div className="knowledgebase-bg" style={{ backgroundImage: `url(${require('../../../assets/images/knowledgebase/bg_1.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }}>
                </div>
                <div className="knowledgebase-search">
                    <div>
                        <H3>{'How Can I help you?'}</H3>
                        <Form className="form-inline" action="#" method="get">
                            <div className="w-100 mb-0"><Search />
                                <Input className="form-control-plaintext w-100" type="text" onChange={handleChange} value={searchTerm} placeholder="Type question here" />
                            </div>
                        </Form>
                    </div>
                </div>
            </Col>
        </Fragment>
    );
};
export default HeaderPart;