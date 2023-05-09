import React from 'react'
import { UserInfosConteiner } from './styles'

import avatar from '../../assets/img/avatar.svg'

import { useAuthValue } from '../../context/AuthContext'



const UserInfo = () => {
    const { user } = useAuthValue()


    
    return (
        <UserInfosConteiner>
            <div className='boxes_userInfo'>

                <img src={avatar} alt="avatar" />
            </div>
            <div className='boxes_userInfo'>
                <span className='userInfo_info'>{user.displayName}</span>
                <span className='userInfo_info'>{user.email}</span>
            </div>
        </UserInfosConteiner>
    )
}

export default UserInfo