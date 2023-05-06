import React from 'react'
import { UserInfosConteiner } from './styles'

import avatar from '../../assets/img/avatar.svg'


const UserInfo = () => {
    return (
        <UserInfosConteiner>
            <div className='boxes_userInfo'>

                <img src={avatar} alt="avatar" />
            </div>
            <div className='boxes_userInfo'>
                {/* <div className='info_user_userInfo'>
                    <p>Nome:</p>
                </div>
                <div className='info_user_userInfo'>
                    <p>Função:</p>
                </div> */}
            </div>
        </UserInfosConteiner>
    )
}

export default UserInfo