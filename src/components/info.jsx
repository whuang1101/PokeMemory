import Icon from '@mdi/react';
import { mdiInformationOutline } from '@mdi/js';
import { mdiAlphaXCircleOutline } from '@mdi/js';


function MakeInfo({handleInfo, actualInfo, newSize, inGame, mobile}) {
    const handleEnter = (event) => {
        if(event.key === "Enter"){
            handleInfo();
        }
    }
    return(
        !mobile &&
        (
        !actualInfo ? <div className="info-icon" onClick={handleInfo}  tabIndex={0} onKeyDown={handleEnter} aria-labelledby='Open Information Blurb'>
            <Icon path={mdiInformationOutline} size={newSize} color={"white"} />
        </div> :
        <div className="info-blurb" tabIndex={0}>
            <div className="directions">The Objective of this game is to never click on the same pokemon twice! ENJOY!!</div>
            <div className="github">This Project was made by <a href ="https://github.com/whuang1101/PokeMemory">@Whuang1101</a></div>
            <div className="close-icon" onClick={handleInfo}  tabIndex={0}  onKeyDown={handleEnter} role='button' aria-labelledby='Close Information Blurb'><Icon path={mdiAlphaXCircleOutline} size={1} /></div>
        </div>

    
    )
    )
}
export default MakeInfo