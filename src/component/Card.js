import * as React from 'react';
import * as mui from '@mui/material';

function Card(props) {
  return (
    <mui.Card sx={{ maxWidth: 500 }}>
      <mui.CardContent>
        <h1>
          {props.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: props.text }} />

      </mui.CardContent>
    </mui.Card>
  )
}

export default Card;