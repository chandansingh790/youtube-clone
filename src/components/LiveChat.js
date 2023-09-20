import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import ChatMessage from './ChatMessage';
import { generateRandomName, makeRandomString } from '../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    useEffect(() => {
        const i = setInterval(() => {
            // API Polling
            dispatch(addMessage({
                name : generateRandomName(),
                message : makeRandomString(20)
            }));
        }, 500);

        return () => clearInterval(i);

    },[])
  return (
		<>
			{chatMessages.map((c) => (
				<ChatMessage name={c.name} message={c.message} />
			))}
		</>
	);
}

export default LiveChat
