import inboxMessageReducer from './InboxMessagesReducer';
import outboxMessageReducer from './SentMessagesReducer';

const DashboardReducers = {
  inboxReducer: inboxMessageReducer,
  outboxReducer: outboxMessageReducer,
};

export default DashboardReducers;
