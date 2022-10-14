import Address from './Component/Profile/Address'
import FullName from './Component/Profile/FullName'
import ProfilePhoto from './Component/Profile/ProfilePhoto'

function App() {
  return (

    <>
      {/* ajout composant photo profil */}
      <ProfilePhoto />

      {/* ajout composant nom  */}
      <FullName />

      {/* ajout composant adresse  */}
      <Address />

    </>

  );
}

export default App;
