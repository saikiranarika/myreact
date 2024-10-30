import React, { useEffect, useState } from 'react';
import Sidenav from '../Components/Sidenav';
import { Row,Col } from 'react-bootstrap';
function APIdata() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            
                const response = await fetch('https://fabulous.hmgroup.com/files/datafile.json');
                const myData = await response.json();

                console.log(myData.flags.sb_message_component.variables);
                 setData(myData.products);
            
        }

        getData();
    },)

    return (
        <div>
            <Row>
            <Col sm={2}>
                <Sidenav />
            </Col>
            <Col sm={10}>
            <div>
                {
                data.map((e) => (
                    <div className='main'>
                        <div className='products'>
                        <p>{e.id}</p> 
                        <img src={e.images} alt="" />
                        </div>
                    </div>
                ))
                }
                </div>
            </Col>
            </Row>
            
        </div>
    );
}

export default APIdata;
