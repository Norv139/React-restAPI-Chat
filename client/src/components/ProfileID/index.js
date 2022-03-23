import "./ProfileID.scss"

function ProfileID (props){
    return(
    <div className="ProfileBG">

        <div className="ProfileFrame">
          <h1>Profile ID {props.IDUserNow}</h1>
          <input
            onChange={props.FOnChange}
            type="number"
          />
          <button
            onClick={props.SetFunction}
          >set</button>
        </div>

      </div>
    )

}

export default ProfileID;