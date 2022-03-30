import { useSelector } from "react-redux";

const SplitPosition = props => {
    const state = useSelector(state => state.combineReducer);

    return (
        <div className="box">
            <h2>Ayarlar</h2>
            <div>
                <h3>Yatay Pencere Değerleri</h3>
                {JSON.stringify(state.hwv ? state.hwv.top : '')}{'  '}
                {JSON.stringify(state.hwv ? state.hwv.bottom : '')}
            </div>
            <div>
                <h3>Üst Dikey Pencere Değerleri</h3>
                {JSON.stringify(state.tvwv ? state.tvwv.left : '')}{'  '}
                {JSON.stringify(state.tvwv ? state.tvwv.right : '')}
            </div>
            <div>
                <h3>Alt Dikey Pencere Değerleri</h3>
                {JSON.stringify(state.bvwv ? state.bvwv.left : '')}{'  '}
                {JSON.stringify(state.bvwv ? state.bvwv.right : '')}
            </div>
        </div>
    )
}

export default SplitPosition;