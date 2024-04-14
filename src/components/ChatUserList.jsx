import React from 'react'
import { Link } from 'react-router-dom';

export default function ChatUserList({list,userID,chatID}) {

    const filteredParticipants = list.participants.filter(participant => participant._id !== userID);

    const active=(chatID===list._id);

    const lastMsg = list?.lastMessage?.content.length > 20 ? list?.lastMessage?.content.substring(0, 20)+"...." : list?.lastMessage?.content;
    const date = new Date(list?.lastMessage?.createdAt)

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const formattedDate = ` ${hours}:${minutes}`;
    
   
    return (

        <Link to={`/chatScreen/chatID/${list._id}`} className={active ?"list-group-item active  media ":"list-group-item  media "}>
            <div className="pull-left">
                {/* <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" className="img-avatar" /> */}
            </div>
            <div className="media-body">
                <div className="list-group-item-heading">
                    {filteredParticipants[0].username}
                
                </div>
                <small className="list-group-item-text c-gray text-dark">{lastMsg}</small>
                <div className='d-flex justify-content-end'>{formattedDate}</div>
            </div>
        </Link>

    )
}
