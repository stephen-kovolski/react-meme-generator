import React from "react"

function Header(){
    return(
        <header className="header">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vA5LHpsWN17cQEV94gJBngHaGG%26pid%3DApi&f=1&ipt=1a80e2c0dcfd8aae090dca9e69ea0acf7553a9ed59f978b2d3bb9c73cfb59740&ipo=images"
                 className="header-image"        
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React project</h4>
        </header>
    )
}

export default Header;