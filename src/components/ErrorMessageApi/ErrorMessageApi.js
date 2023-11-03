import React, { useState } from 'react';
import './ErrorMessageApi.css'

const ErrorMessageApi = React.memo(({
  isShowApiError
 }) => {
  return (
    <p className={`error-message-api  ${isShowApiError ? 'error-message-api_active' : ''}`}>
      TEST: ... произошла ошибка. Токен не передан или передан не в том формате.
    </p>
  )
})

export default ErrorMessageApi;