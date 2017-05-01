import React from 'react'
import { connect } from 'react-redux'

const Button = ({outbox, onClick}) => {
  return (
    <div>
      <div>Outbox length: {outbox.length}</div>
      <button onClick={onClick}>Click for failed request</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    outbox: state.offline.outbox,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch({
        type: 'PRESSED',
        meta: {
          offline: {
            effect: { url: 'http://badhost/api/follow', method: 'GET' },
            commit: { type: 'PRESS_SUCCEEDED' },
            rollback: { type: 'PRESS_FAILED' }
          }
        }
      });
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
