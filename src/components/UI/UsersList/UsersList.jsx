import React from 'react';
import User from '../Users/User';
import './UsersList.css';

const UsersList = ({usersData, number}) => {

  return (
    <>
    <h3 className='number__list'>Listado de {number} Usuarios Aleatorios</h3>
      <ul className='user__list'>
         {usersData?.map((info, index) => {
           return <User key={info.login.uuid}
           index={index}
           {...info}
            />
         })}
    </ul>
    </>
  )
}

export default UsersList