import { useState, useEffect } from 'react';
import { setCombine } from "../redux/actions";
import Split from 'react-split';
import Table from '../components/Table';
import SplitPosition from '../components/SplitPosition';
import InputForm from '../components/InputForm';

const SplitLayout = props => {
    // Yatay Pencere Değerleri
    const [hwv, sethwv] = useState({ top: undefined, bottom: undefined });
    // Üst Dikey Pencere Değerleri
    const [tvwv, settvwv] = useState({ left: undefined, right: undefined });
    // Alt Dikey Pencere Değerleri
    const [bvwv, setbvwv] = useState({ left: undefined, right: undefined });

    const onSplitDrag = (position, directon) => {
        if (directon === 'vertical') {
            sethwv({ top: position[0], bottom: position[1] })
        } else if (directon === 'horizontal-top') {
            settvwv({ left: position[0], right: position[1] })
        } else if (directon === 'horizontal-bot') {
            setbvwv({ left: position[0], right: position[1] })
        }
    }

    useEffect(() => {
        const combine = {
            hwv: hwv,
            tvwv: tvwv,
            bvwv: bvwv
        }

        if (combine.hwv.top !== undefined) {
            setCombine(combine)
        } else if (combine.tvwv.left !== undefined) {
            setCombine(combine)
        } else if (combine.bvwv.left !== undefined) {
            setCombine(combine)
        }
    }, [hwv, tvwv, bvwv])

    return (
        <Split
            className="split"
            direction="vertical"
            onDrag={(data) => onSplitDrag(data, 'vertical')}
            sizes={[70, 30]}
        >
            <div style={{ overflowX: 'auto', overflowY: 'auto' }}>
                <Split
                    className="split-row"
                    onDrag={(data) => onSplitDrag(data, 'horizontal-top')}
                    sizes={[70, 30]}
                >
                    <div style={{ overflowX: 'auto', overflowY: 'auto' }}><Table /></div>
                    <div style={{ overflowX: 'auto', overflowY: 'auto' }}><SplitPosition /></div>
                </Split>
            </div>
            <div style={{ overflowX: 'auto', overflowY: 'auto' }}>
                <Split
                    className="split-row"
                    onDrag={(data) => onSplitDrag(data, 'horizontal-bot')}
                    sizes={[70, 30]}
                >
                    <div style={{ overflowX: 'auto', overflowY: 'auto' }}><InputForm /></div>
                    <div>Lorem Ipsum Dolar</div>
                </Split>
            </div>
        </Split>
    )
}

export default SplitLayout;