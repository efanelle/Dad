import React from 'react';
import {Modal, Popover, Tooltip, Button, OverlayTrigger, PageHeader, Jumbotron, Panel} from 'react-bootstrap'

const pic6 = "./assets/DR6.jpg";

const Contact = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    /*const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );*/

    return (
      <div>
        <div className="list">
        <Jumbotron> 
          <p className="smallhd">Next Steps</p>
        </Jumbotron>
        <Panel>1.   Plug our labor rates into your financial model</Panel>
        <Panel>2.   Develop cost model to determine competitive potential</Panel>
        <Panel>3.   Have your product or process evaluated </Panel>
        <Panel>4.   Identify best approach to maximize your profitability
          <ul>
          <li>Manual Operations</li>
            <ul>
            <li>Improved Profitability</li>
            </ul>
          <li>Automation</li>
            <ul>
            <li>Maximize Profitability</li>
            </ul>
          </ul>
          </Panel>
          <br />
        <Button
          bsSize="large"
          onClick={this.open}
        >
          Find Out More
        </Button>
        </div>


        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Larry Fanelle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Phone</h5>
            <p>267-230-1673</p>
            <h5>Email</h5>
            <a href="mailto:lfanelle@gmail.com">lfanelle@gmail.com</a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

module.exports = Contact;
