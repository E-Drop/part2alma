import { useSelector, useDispatch } from 'react-redux';
import './Sidebar.scss';
import allActions from '../actions';

function SideBar() {
  const allBoats = useSelector(state => state.boats.allBoats);
  const materials = useSelector(state => state.boats.materials);
  const selectedMaterial = useSelector(state => state.boats.selectedMaterial);
  const dispatch = useDispatch();
  
  return (
    <div className="Sidebar">
      <div className="row">
        <p>Material</p><p>Ramps</p>
      </div>
      {materials && materials.map((material, key) =>
        <div className={`row ${material === selectedMaterial && "active"}`} key={key} onClick={() => {
          dispatch(allActions.boatsActions.filterBoats(material))
          dispatch(allActions.boatsActions.selectMaterial(material))
        }}>
          <p>{material}</p>
          <p>{allBoats.filter(x => x.properties.material === material).length}</p>
        </div>
      )}
      <button onClick={()=> dispatch(allActions.boatsActions.clearFilters())}>Clear filters</button>
    </div>
  );
}

export default SideBar