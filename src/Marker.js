import React from 'react';
import ToolTip from 'react-tooltip'

function Marker(props) {
  const onMarkerClick = () => {
    const {marker, onMarkerClick} = props;
    onMarkerClick(marker);
  };

  const {marker, duration} = props;
  const {id, time, color, title} = marker;

  return (
    <>
      <i
        id={id}
        data-tip={title}
        className="react-video-marker"
        style={{
          background: color,
          left: duration ? `calc(${time / duration * 100}% - 2px)` : '-9999px'
        }}
        onClick={onMarkerClick}
      />
      <ToolTip place='top' />
    </>
  );
}

export default Marker;
