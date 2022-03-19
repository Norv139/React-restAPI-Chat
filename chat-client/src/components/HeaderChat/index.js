import "./header.scss"

function header(props){


    return(
        <header className="header_main_css">
            <div className="main">
                <div>
                    <a
                        className="btn"
                        onClick={props.UpDate}
                    >Update</a>
                </div>
                <div className="logo" >
                    <a href="#">Chat:[name]</a>
                </div>
                <div>
                    <a
                        className="btn"
                        onClick={props.FOnClick}
                    >Profil</a>
                </div>
            </div>

        </header>
    )

}

export default header;