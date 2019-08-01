/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StatusLabel from '../../common/components/StatusLabel';
import '../CSS/InboxMessages.scss';
import fetchtOutboxMessages from '../Redux/actions/SentMessagesAction';

class SentMessages extends React.Component {
  componentWillMount() {
    const { fetchtOutboxMessages } = this.props;
    fetchtOutboxMessages();
  }

  render() {
    const { messages, sentFetched } = this.props;
    console.log(messages);
    return (
      <div className="outbox-messages">
        <h2 className="section-title">Sent Messages</h2>
        {
        sentFetched
          ? (
            <div className="messages-display-box">
              <Table responsive>
                <tbody>
                  {
                  messages.map(message => (
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
              tip="You currently haven't sent anyone a message"
            />
          )
      }
      </div>
    );
  }
}

SentMessages.propTypes = {
  messages: PropTypes.array.isRequired,
  sentFetched: PropTypes.bool.isRequired,
  fetchtOutboxMessages: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  isLoggingIn: state.outboxReducer.isFetching,
  errorOccured: state.outboxReducer.error,
  sentFetched: state.outboxReducer.status,
  messages: state.outboxReducer.items,
  response: state.outboxReducer.message,
});

export default connect(mapStateToProps, { fetchtOutboxMessages })(SentMessages);
