const Message = () => {
  return (
    <div className='chat chat-end'> 
     <div className='chat-image avatar'>
       <div className='w-10 rounded-full'>
        <img
        alt="Tailwind CSS chat bubble component"
        src={
        "https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
        }
      />
       </div>
     </div>
     <div className={`chat-bubble`}>hi! wats'up</div>
       <div className="chat-footer opacity-50">Seen at 12:46</div>
    </div>
  );
};

export default Message;
