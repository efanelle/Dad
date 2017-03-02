import React from 'react'
import {Jumbotron, PageHeader, Panel, Accordion, Well} from 'react-bootstrap'

const USA = () => (
  <div>
    <Jumbotron>
    <p className="smallhd">Why choose USA Nearshoring Management?</p>
    <p>     </p>
    </Jumbotron>
      <div className="list">
        <Panel header="Opportunity Knocks" eventKey="0">
        {/*<div className = "opportunity">*/}
        <p>USA Nearshoring Management offers a turnkey solution to labor intensive or simple assembly
        operations in the Caribbean (Nearshoring). </p>
        <p>The key to successful Caribbean Operations 
        is talented, trained, experienced personnel and management. </p>
        <p>Having a proven logistics model is key to bridging the lead time gap. </p>
        <p>Managing the relationship becomes routine because of CNI's ability to manage your domestic requirements 
        effectively.  </p>
      </Panel>
        <Panel header="Cost Reduction Opportunities" eventKey="1">
          <ul>
            <li>Simple assembly operations</li>
            <li>Labor intensive operations</li>
            <li>Possible automation</li>
          </ul>
        </Panel>
        <Panel header="Lead Time Reduction" eventKey="2">
          <ul>
            <li>Customer Responsiveness</li>
            <li>Reduction of excess inventory</li>
            <li>Additional revenue producing opportunities</li>
          </ul>
        </Panel>
        <Panel header="Logistics Capabilities" eventKey="3">
          <ul>
            <li>Transportation relationships</li>
            <li>Shipment scheduling</li>
            <li>Vessel and delivery coordination</li>
          </ul>
        </Panel>
      </div>
  </div>
);

module.exports = USA;
