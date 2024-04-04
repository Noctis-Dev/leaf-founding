type MessageTipsProps = {
  text: string
}

function MessageTips({ text }: MessageTipsProps) {



  return (
    <div className="p-4 bg-gray-800 rounded-md w-1/4 m-4">
      <p className="text-white">{text}</p>
    </div>
  )
}

export default MessageTips