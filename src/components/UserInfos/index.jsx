import React, { useEffect, useState } from 'react'
import { UserInfosConteiner } from './styles'

import avatar from '../../assets/img/avatar.svg'

import { useAuthValue } from '../../context/AuthContext'



const UserInfo = () => {
    const { user } = useAuthValue()
    const [onUser, setOnUser] = useState(null)
    useEffect(() => {
        
        setOnUser(user)
    }, [user])

    return (
        <UserInfosConteiner>
            <div className='boxes_userInfo'>

                <img src={avatar} alt="avatar" />
            </div>
            <div className='boxes_userInfo'>
                {onUser &&
                    <>
                        <span className='userInfo_info'>{user.displayName}</span>
                        <span className='userInfo_info'>{user.email}</span>
                    </>
                }
            </div>
        </UserInfosConteiner>
    )
}

export default UserInfo