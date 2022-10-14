
import myImg from "./img/HZWS98142.jpg"

const ProfilePhoto = () => {
    return (
        <div id="photocont" >
            <img src={myImg} alt="photo profil" className="rounded-circle " style={{ width: "30%", height: "10%" }} />
        </div>
    );
}

export default ProfilePhoto