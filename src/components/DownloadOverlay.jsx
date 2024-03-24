// import React from 'react'
import DownloadDialogueBox from "./DownloadDialogueBox"

const DownloadOverlay = () => {
  return (
    <div>
      <div className="fixed w-full h-screen z-50 bg-[#717171] border">
        <DownloadDialogueBox />
      </div>
    </div>
  )
}

export default DownloadOverlay
