import { memo } from 'react';
import './ApiMessage.css'

const ApiMessage = memo(({
  isShowApiMessage,
  isSuccessApiMessage,
  apiMessageText,
}) => {
  return (
    <p className={
      `api-message
      ${isSuccessApiMessage ? 'api-message_succes' : 'api-message_error'}
      ${isShowApiMessage && 'api-message_active'}`}>
      {apiMessageText}
    </p>
  )
})

export default ApiMessage;