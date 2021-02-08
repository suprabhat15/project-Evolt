import React,{useState} from 'react';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';
const Item = ({ icon, title, color }) => {

    const items = [
 {
    id:1,
    subtitle:'J’identifie un expert',
  },
  {
    id:2,
    subtitle:'J’évalue le dimensionem…',
  },
  { 
    id:3,
    subtitle:'J’analyse et je prépare la réunion...',
  },
  {
    id:4,
    subtitle:'Je présente ma réunion de...',
  },
  {
    id:5,
    subtitle:'Je lance la conduite du changement',
  },
  {
    id:6,
    subtitle:'Je prépare la première phase...',
  }
    ]
    const [showInfo, setShowInfo] = useState(false);
    const [isActive, setIsActive] = useState(false);
  
    function toggleShowAndActive(){
      setShowInfo(!showInfo);
      setIsActive(!isActive);
    }
    
    return (
      <Wrapper>
      <aside className='accordion-item'>
        <button className='accordion-clicked' onClick={toggleShowAndActive}>
        <span className={color}>{icon}</span>
        <div>
          <h3>{title}</h3>
          <FaChevronRight  className={`accordion-icon ${isActive ? 'rotate' : ''}`}/>
        </div>
        </button>
        <div className={`accordion-content ${isActive ? 'is-active' : ''}`}>
        <Div>
           {items.map((item) => {
            return (
            <Title key={item.id} className="title-count"> 
                <h2 className="span-id">{item.id}</h2>
                {item.subtitle}
            </Title>
            )
          })}
        </Div>
          </div>
  
      </aside>
      </Wrapper>
    );
  };

  const Title = styled.section`
  display:flex;
  flex-direction:row;
  align-items:center;
  padding:10px 14px 10px 18px;;
`

const Div = styled.article`
.title{
  width: 300px;
  height: 44px;
  margin: 15px 0 0 15px;
  padding: 12px 11px 0px 27px;
}
div{
   padding-left:10px;
}
  p{
  width: 113px;
  height: 21px;
  margin: 20px -60px 5px 35px;
  font-family: InterUI;
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #5d6a76;
  }
`
const Wrapper = styled.section`
   background-color:#fff;
   align-items:center;
   border-right: 1px solid #ccc;
  
.accordion {
	/* &-clicked {
    display: grid;
    grid-template-columns:repeat(3,auto);
		align-items: center;
  	cursor: pointer;
    background: transparent;
    border-color: transparent;
    padding-bottom:1rem;
    &:hover{
      background:#f8f9fb;
    }
	}
  ///
  &-clicked {
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
	}
  /// */
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
			padding-bottom:0.5rem;
			p {
				opacity: 1;
				transform: translateY(0);
        transition: 1.5s ease;
			}
		}
	}
  &-icon {
    margin:1.5rem;
    position: relative;
		&.rotate {
			transform: rotate(90deg);
		}
	}
}
     span {
      width: 32px;
      height: 32px;
      margin-top: 1rem;
      margin-left: 1.5rem;
      border-radius: 8px;
      border: solid 1px #e0e5e9;
      background-color: #ffffff;
      display: grid;
      place-items: center;
    }
    .span-id{
      font-size:12px;
      width: 12px;
      height: 12px;
      margin: 2px 25px 2px 15px;
      padding: 6px 4px 12px 9px;
      border-radius: 8px;
      color:#2b00eb ;
      background-color: #85acff ;
      display: grid;
      align-items: center;
    }
    
   div{
     display:grid;
     grid-template-columns:repeat(3,auto);
   }
    h3 {
      margin: 1rem 2rem 0 1rem;
      font-family: InterUI;
      letter-spacing: 0;
      line-height: 1.5;
      letter-spacing: normal;
      color: #5d6a76;
    }
   
    .photo{
      height:15px;
      width:15px;
      margin:10px 5px 0 10px;
    }
   
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: #c8ecf3;
      color:#c8ecf3;
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
    .blue{
      background: #e6e6ff;
      color: blueviolet;
    }
    .grey{
      background:#fff;
      color:#fff;
    }
`
export default Item;