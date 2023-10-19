import React, { useState } from 'react';
import './ApiErrorMessage.css'

const ApiErrorMessage = React.memo(({ }) => {
  return (
    <p className='api-error-message'>
      При авторизации произошла ошибка. Токен не передан или передан не в том формате.
    </p>
  )
})

export default ApiErrorMessage;