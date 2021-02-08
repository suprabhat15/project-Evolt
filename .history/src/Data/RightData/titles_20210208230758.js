import React,{useState} from 'react';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';
const Item = ({id,title,content}) => {

    const [showInfo, setShowInfo] = useState(false);
    const [isActive, setIsActive] = useState(false);
  
    function toggleShowAndActive(){
      setShowInfo(!showInfo);
      setIsActive(!isActive);
    }
  return (  
    <Wrapper>
    <section className='accordion-item'>
      <button className='accordion-clicked' onClick={toggleShowAndActive}>
        <h2>{id}</h2>
        <h3>{title}</h3>
        <FaChevronRight  className={`accordion-icon ${isActive ? 'rotate' : ''}`}/>
      </button>
      <div className={`accordion-content ${isActive ? 'is-active' : ''}`}>
             <p>{content}</p>
				</div>
    </section>
    </Wrapper> 
    )
}

const Wrapper = styled.section`
width:100%;
height:auto;
background:#ffffff;
@media (min-width: 600px) {
    width:100%;
    align-items: center;
}
/* button{
  width:100%;
} */

  p{
  font-family: InterUI;
  font-size: 25px;
  font-style: normal;
  color: #5d6a76;
  }

  h2{
      font-size:25px;
      width: 34px;
      height: 34px;
      margin: 2px 20px 2px 10px;
      padding: 8px 9px 6px;
      border-radius: 8px;
      color:#2b00eb ;
      background-color: #85acff ;
      display: grid;
      align-items: center;
    }

  h3{
    font-family: InterUI;
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #26282d
  }
     
    .accordion {
      @media (min-width: 768px) {
       grid-template-columns: 1fr max-content;
       align-items: center;
      }
      &-icon {
		   &.rotate {
			transform: rotate(90deg);
		}
	}
	/* &-clicked {
    display:grid;
    grid-template-columns:repeat(3,auto);
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
    background: transparent;
    border-color: transparent;
    padding-bottom:1rem;
    &:hover{
      background:#f8f9fb;
    }
	} */
	&-content {
		max-height: 0;
		overflow: hidden;
		transition: 250ms ease;
		p {
			opacity: 0;
			transform: translateY(-1.5rem);
			transition: 1.5s ease;
      padding:5px
		}
		&.is-active {
			max-height: 100rem;
			p {
				opacity: 1;
				transform: translateY(0);
        transition: 1.5s ease;
			}
		}
	} 
}
`
  export default Item;