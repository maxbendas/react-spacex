import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import './details.css'
import Main from "../Main/Main";
import useLaunches from "../hooks/useLaunches";
import YouTube from "react-youtube";

const Details = (props) => {

    const [launch, setLaunch] = useState(null)

    const {getLaunch} = useLaunches()

    useEffect(() => {
        setLaunch(getLaunch(props.match.params.id))
    }, [getLaunch])

    const history = useHistory();

    if (!launch) return null;

    return (
        <>
            <Main name={launch.name}/>
            <main className="details">
                <div className="container">
                    <div className="details-row">
                        <div className="details-image">
                            <img src={launch.links.patch.small} alt={launch.name}/>
                        </div>
                        <div className="details-content">
                            <p className="details-description">{launch.details}</p>
                        </div>
                    </div>
                    <div>
                        <YouTube className="details-youtube" videoId={launch.links.youtube_id}/>
                        {/*<iframe className="details-youtube" width="560" height="315"*/}
                        {/*        src="https://www.youtube.com/embed/dLQ2tZEH6G0" frameBorder="0"*/}
                        {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                        {/*        allowFullScreen/>*/}
                    </div>
                </div>
                <a onClick={history.goBack} className="button button-back">go back</a>
            </main>
        </>
    );
};

export default Details;