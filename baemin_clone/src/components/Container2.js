import React from "react";
import {Container2Asset} from '../assets/container2/Container2Asset'
import styled from 'styled-components';

const Container2Style = styled.div`
width: 100%;
margin : auto;
margin-top: 30px;
max-width: 1250px;
justify-content:center;
display: flex;
flex-wrap: wrap;
.green{
  color: green;
}
.blue{
  color: blue;
}
  .container{
    margin-top: 20px;
    width: 300px;
    display: flex;
    flex-direction: column;
  }
  .imgswap img:last-child{
    display:none;
  }
  .imgswap:hover img:first-child{
    display:none;
  }

  .imgswap:hover img:last-child{
    display:inline-block;
  }

  img{
    width: 300px;
  }

  .text {
    margin-top : 10px;
    div{
      margin-top: 5px;
      font-size: 1.1rem;
      text-align:center;
    }
  }
  @media screen and (max-width:1000px){
    .container{
      width: 250px;
    }
    img{
      width: 250px;
    }
  }

  @media screen and (max-width:666px){
    img{
      width: 140px;
    }
    .container{
      width: 140px;
    }
  }
`

const Container2 = () => {
  return (
    <div>
      <h2 style={{textAlign: "center", marginTop: "100px"}}>요즘 잘 나가요</h2>
    <Container2Style>
      {Container2Asset.map((img) => (
        <div className="container">
          <div className="imgswap">
            <img alt={img.text} src={img.img} />
            <img alt={img.text} src={img.hoverImg} />
          </div>
          <div className="text">
            <div><span className="blue">{img.best}</span><span className="green"> {img.green}</span></div>
            <div>{img.text}</div>
            <div>{img.price}</div>
          </div>
        </div>
      ))}
    </Container2Style>
    </div>
  );
};

export default Container2;
