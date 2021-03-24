

const TheirMessage = ({ lastMessage, message }) => {
    const isFastMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username

    return (
        <div className="message-row">
            {
                isFastMessageByUser && (
                    <div
                        className="message-avatar"
                        style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                    />
                )
            }
            {message?.attachments?.length > 0
                ? (
                    <img
                        src={message.attachments[0].file}
                        alt='message-attachment'
                        className='message-image'
                        style={{ marginLeft:isFastMessageByUser ?'4px':'48px'}}

                    />
                ) : (
                    <div className='message' style={{ float: 'left', backgroundColor: '#CABCDC'  ,marginLeft:isFastMessageByUser ?'4px':'48px' }}>
                        {message.text}
                    </div>
                )

            }
        </div>
    )

}

export default TheirMessage;