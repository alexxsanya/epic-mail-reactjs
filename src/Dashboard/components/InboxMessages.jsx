/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StatusLabel from '../../common/components/StatusLabel';
import '../CSS/InboxMessages.scss';
import fetchInboxMessages from '../Redux/actions/InboxMessagesAction';

export class InboxMessages extends React.Component {
  componentWillMount() {
    const { fetchInboxMessages } = this.props;
    fetchInboxMessages();
  }

  render() {
    const { messages, inboxFetched } = this.props;

    return (
      <div className="inbox-messages">
        <h2 className="section-title">Inbox Messages</h2>
        {
        inboxFetched
          ? (
            <div className="messages-display-box">
              <Table responsive>
                <tbody>
                  {
                  messages.reverse().map(message => (
                    <tr key={message.id} className={message.readstatus}>
                      <td>{message.subject}</td>
                      <td>{message.msgbody}</td>
                      <td>{message.createdon}</td>
                      <td> </td>
                    </tr>
                  ))
                }
                </tbody>
              </Table>
            </div>
          )
          : (
            <StatusLabel
              message="Oops"
              tip="You currently have no Inbox Message"
            />
          )
      }
      </div>
    );
  }
}

InboxMessages.propTypes = {
  messages: PropTypes.array.isRequired,
  inboxFetched: PropTypes.bool.isRequired,
  fetchInboxMessages: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  isFetching: state.inboxReducer.isFetching,
  errorOccured: state.inboxReducer.error,
  inboxFetched: state.inboxReducer.status,
  messages: state.inboxReducer.items,
  response: state.inboxReducer.message,
});

export default connect(mapStateToProps, { fetchInboxMessages })(InboxMessages);
