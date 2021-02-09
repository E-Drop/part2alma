import { useSelector, useDispatch } from 'react-redux';
import './Sidebar.scss';
import allActions from '../actions';

function SideBar() {
  const boats = useSelector(state => state.boats.boatsList);
  const dispatch = useDispatch();
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
        <div className="row" key={key} onClick={() => dispatch(allActions.boatsActions.filterBoats(material))}><p>{material}</p><p>{boats.filter(x => x.properties.material === material).length}</p></div>
      )}
      <button onClick={()=> dispatch(allActions.boatsActions.clearFilters())}>Clear filters</button>
    </div>
  );
}

export default SideBar