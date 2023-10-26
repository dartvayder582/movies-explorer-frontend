import React, { useState } from 'react';
import './ErrorMessageApi.css'

const ErrorMessageApi = React.memo(({ }) => {
  return (
    <p className='error-message-api'>
      TEST: При авторизации произошла ошибка. Токен не передан или передан не в том формате.
    </p>
  )
})

export default ErrorMessageApi;