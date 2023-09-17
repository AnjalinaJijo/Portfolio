import React from 'react'
import styled from 'styled-components'

const Thankyou = () => {
  return (
    <Container>
      <Wrap>
      <h1>Thank You!</h1>
      </Wrap>
    </Container>
  )
}

const Container =  styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
    width:100%;
`
const Wrap =  styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    border:5px solid #9395d3;
    padding:5%;
    margin:15% auto;
    h1{
        font-size:50px;
        font-weight:bold;
    }
`

export default Thankyou
