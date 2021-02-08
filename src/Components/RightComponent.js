import React from 'react';
import styled from 'styled-components';
import img from '../Assets/large_image.PNG'
import img2 from '../Assets/appstore.svg'
import titles from '../Data/RightData/titles';
import Item from '../Data/RightData/Item'
function RightComponent() { 
  
    return (
        <Wrapper>
          <section className="main-content">
              <div className="large-image" >
              <center>
              <img src={img} className="main_photo" alt='img' />
              </center>       
            <span className="small-image">
            <img src={img2} className="photo" alt='img2' />
            </span>
            </div>
            <div className="textual-content">
                <ParaTitle> 
                    <>
                    <h3>Cadrer le besoin en conduite du changement</h3>
                    <p>
                    La phase 0 est une phase préliminaire de la méthode proposée qui 
                    va permettre d’amorcer une réflexion sur la conduite du changement 
                    dans le projet. En tant que chef de projet, j’ai besoin de qualifier, 
                    dévaluer, de faire valoir les besoins d’accompagnement au changement 
                    relatifs à mon projet pour obtenir l’engagement de moyens adaptés.
                      </p>
                    <p> 
                    Nous vous proposons de suivre un parcours dans lequel chaque étapes est 
                    décrite. Dans chacune d’elle, nous vous préconisons d’utiliser un outil 
                    en particulier afin de mener à bien cette première phase de cadrage. Vous 
                    pourrez ainsi mieux comprendre la vue d’ensemble de cette première grande 
                    étape.
                    </p>
                    </>
                </ParaTitle>
                
          {titles.map((title) => {
            return <Item key={title.id} {...title}></Item>;
          })}
          </div>
          </section>
        </Wrapper>
    );
  };

const ParaTitle = styled.section`
  display:grid;
  grid-template-rows:repeat(2,auto);
`
const Wrapper = styled.section`
width:100%;
height:auto;
background:#ffffff;
border-right: 3px solid #ccc;
@media (min-width: 600px) {
    width:100%;
    align-items: center;
}
.textual-content {
  width: 80%;
   margin: 20px auto;

}
.main-content{
  padding: 4rem 7rem 0 6rem;
.main_photo{
  width:80%;
  height:auto;
  border-radius: 50px;
  object-fit:contain;
  
    }
    .large-image {
      position:relative;
    }
    .small-image {
      position: absolute;
      bottom : -30px;
      left: 110px;
    }
.photo{
  width:45px;
  height:45px;
  object-fit:cover;
  }
  p{
  font-family: InterUI;
  font-size: 20px;
  font-style: normal;
  line-height: 1.63;
  color: #5d6a76;
  }
  h3{
    padding-left:0;
    font-size:25px;
    line-height:25px;
    color:#17294d;
  }
  span {
    z-index:1;
      width: 64px;
      height: 64px;
      margin: -35px 0px 0px 80px;
      border-radius: 15px;
      border: 3px solid #ffffff;
      background-color: #c8ecf3;
      display: grid;
      place-items: center;
    }
  
}
`
export default RightComponent