import { GithubFilled, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons'
import React from 'react'

function logo() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
            <GithubFilled style={{ color: "white", fontSize: "60px", cursor: "pointer" }} id="logo1" className='logoTransition' />
            <LinkedinFilled style={{ color: "white", fontSize: "60px", cursor: "pointer", margin: "0px 30px" }} id="logo2" className='logoTransition' />
            <TwitterCircleFilled style={{ color: "white", fontSize: "60px", cursor: "pointer" }} id="logo3" className='logoTransition' />
        </div>
    )
}

export default logo