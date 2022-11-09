import React from "react";

import './DownloadButton.scss';


function DownloadButton({content, file}) {

    return (
        <a href={file} id="downloadBtn" className='downloadBtn' target="_blank">{content}</a>
    );
}

export default DownloadButton;
