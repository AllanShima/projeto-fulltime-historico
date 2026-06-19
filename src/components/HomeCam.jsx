import React from 'react'
import CameraScreen from './CameraScreen';

// selectedId
const HomeCam = ({cameras, selectedCam, remainingCams}) => {

  // encontra a camera atual com as informações
  const currentCamera = cameras.find(cam => cam.id === selectedCam)
  // const currentImage = imageMap[selectedCam];
  
  let secondRowCams = 0;

  if (remainingCams.length == 2) {
    secondRowCams = remainingCams[1];
  } else if (remainingCams.length == 3) {
    secondRowCams = remainingCams.slice(1, 3)
  } else {
    secondRowCams = remainingCams.slice(1, 4);
  }

  if(!currentCamera){
    return <div>No cameras detected.</div>
  }

  return (
    <div className='w-full h-full text-white'>
      <div className='grid grid-flow-col w-full h-full ml-auto mr-auto'>
        {cameras.length == 1 ? (
          <div className='flex w-full h-full'>
            <CameraScreen camera={currentCamera}/>
          </div>
        ) : cameras.length == 2 ? (
          <div className='flex w-full box-border p-5 overflow-hidden'>
            {/* Add min-w-0 to both children to fix the issue of the pr not showing up */}
            <div className='relative flex-1 pr-5 min-w-0'>
              <CameraScreen camera={currentCamera}/>
            </div>
            <div className='relative flex-1 min-w-0'>
              <CameraScreen camera={remainingCams[0]}/>
            </div>
          </div>
        // Substitua o trecho de 3 câmeras por este:
        ) : cameras.length == 3 ? (
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-160 p-4 box-border overflow-hidden">
            
            <div className="relative w-full h-full min-h-0 min-w-0">
              <CameraScreen camera={currentCamera}/>
            </div>

            <div className="relative w-full h-full min-h-0 min-w-0">
              <CameraScreen camera={remainingCams[0]}/>
            </div>

            {/* Câmera 3 - Ocupa a metade de baixo inteira */}
            <div className="relative col-div-2 w-full h-full min-h-0 min-w-0">
              <CameraScreen camera={remainingCams[1]}/>
            </div>

          </div>
        ) : cameras.length == 4 ? (
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-160 p-4 box-border overflow-hidden">
            
            <div className="relative w-full h-full min-h-0 min-w-0">
              <CameraScreen camera={currentCamera}/>
            </div>
            
            <div className="relative w-full h-full min-h-0 min-w-0">
              <CameraScreen camera={remainingCams[0]}/>
            </div>

            <div className="relative w-full h-full min-h-0 min-w-0">
              <CameraScreen camera={remainingCams[1]}/>
            </div>
            
            <div className="relative w-full h-full min-h-0 min-w-0">
              <CameraScreen camera={remainingCams[2]}/>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full p-4 box-border overflow-hidden">

            <div className="relative w-full h-full min-h-0 min-w-0">
              <CameraScreen camera={currentCamera}/>
            </div>
            
            <div className="relative w-full h-full min-h-0 min-w-0">
              <CameraScreen camera={remainingCams[0]}/>
            </div>
            
            <div className="relative flex col-span-2 w-full h-full min-h-0 min-w-0">
              <div className='grid grid-cols-3 gap-5 w-full h-full'>
                <div className='w-full h-full min-h-0 min-w-0'>
                  <CameraScreen camera={remainingCams[1]}/>
                </div>
                <div className='w-full h-full min-h-0 min-w-0'>
                  <CameraScreen camera={remainingCams[2]}/>
                </div>
                <div className='w-full h-full min-h-0 min-w-0'>
                  <CameraScreen camera={remainingCams[3]}/>
                </div>
              </div>
            </div>
          </div>
        )} 
      </div>
    </div>
  )
}

export default HomeCam
