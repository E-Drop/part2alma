import { useSelector } from 'react-redux';
import './Sidebar.scss';

function SideBar() {
  const boats = useSelector(state => state.boats.boatsList);
  const materials = [];

  boats.length && boats.map((boat, key) => {
    if(!materials.includes(boat.properties.material)) {
      materials.push(boat.properties.material);
    }
  })
  
  return (
    <div className="Sidebar">
    <div className="row">
      <p>Material</p><p>Ramps</p>
    </div>
    {materials.map((material, key) =>
      <div className="row" key={key}><p>{material}</p><p>{boats.filter(x => x.properties.material === material).length}</p></div>
    )}
    </div>
  );
}

export default SideBar