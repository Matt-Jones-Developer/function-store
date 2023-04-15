import { useState, useEffect } from 'react';
import IndexHeader from '../components/header'

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
