import { useState, useEffect } from 'react';
import IndexHeader from '../components/header'

// testing out header import issues with next 13 that forced me to make header client side and add useEffect - 
// this should of solve the issue and would of included all the fullscreen JS code here
export default function Index() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleFullScreen = () => {
      setIsFullScreen(document.fullscreenElement !== null)
    }
    document.addEventListener('fullscreenchange', handleFullScreen)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreen)
    }
  }, [])

  return (
    <div className={`main-wrapper ${isFullScreen ? 'full-screen' : ''}`}>
      <IndexHeader isFullScreen={isFullScreen} />
    </div>
  );
}
