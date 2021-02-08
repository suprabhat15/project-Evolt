import React from 'react'
import door from '../../Assets/door.svg';
import appstore from '../../Assets/appstore.svg';
import apps from '../../Assets/apps.svg';
import components from '../../Assets/components.svg';
import duplicate from '../../Assets/duplicate.svg';
import parent from '../../Assets/parent.svg';
const titles = [
  {
    id: 1,
    icon:  <img src={door} alt='door' />,
    color: 'grey',
    title: 'Présentation de la méthode de conduite du changement',
  },
  {
    id: 2,
    icon: <img src={appstore} alt='appstore' />,
    color: 'green',
    title: 'Cadrer le besoin en conduite du changement',
  },
  {
    id: 3,
    icon: <img src={duplicate} alt='duplicate' />,
    color: 'yellow',
    title: 'Préparer et co-construire le changement',
   },
  {
    id: 4,
    icon: <img src={apps} alt='apps' />,
    color: 'pink',
    title: 'Stimuler le changement sur les établissements pilotes',
  },
  {
    id: 5,
    icon: <img src={components} alt='components' />,
    color: 'blue',
    title: 'Déployer le changement sur tous les établissements',
  },
  {
    id: 6,
    icon: <img src={parent} alt='parent' />,
    color: 'purple',
    title: 'Ancrer la transformation auprès des équipes',
     }
]
export default titles;
    