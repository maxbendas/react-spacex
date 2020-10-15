import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper'
import './features.css';

const photo = {
    'Falcon 1': 'falcon-1',
    'Falcon 9': 'falcon-9',
    'Falcon Heavy': 'falcon-heavy',
    other: 'starship'

}



const Features = ({rocket, rocketFeatures}) => {
    const {name, height, diameter } = {...rocketFeatures}
    const {meters:hm, feet:hf} = {...height}
    const {meters:dm, feet:df} = {...diameter}


    return (
        <section className="features">
            <h2 className="features-title">
                {name} <br/>Overview
            </h2>
            <div className="overview">

                <table className="table">
                    <caption className="table-title">
                        Size
                    </caption>
                    <thead>
                    <tr>
                        <td className="table-column">HEIGHT</td>
                        <td className="table-column">{hm} m / {hf} ft</td>
                    </tr>
                    <tr>
                        <td className="table-column">DIAMETER</td>
                        <td className="table-column">{dm} m / {df} ft</td>
                    </tr>
                    <tr>
                        <td className="table-column">MASS</td>
                        <td className="table-column">30,146 kg / 66,460 lb</td>
                    </tr>
                    <tr>
                        <td className="table-column">PAYLOAD TO LEO</td>
                        <td className="table-column">450 kg / 992 lb</td>
                    </tr>
                    </thead>
                </table>
                <RellaxWrapper speed={14}>
                <img
                    src={`./img/${photo.hasOwnProperty(rocket)?
                        photo[rocket]:
                        photo.other}.png`}
                    alt="rocket"
                    className="rocket"
                />
                </RellaxWrapper>
                <article>
                    <h3 className="features-subtitle">DESCRIPTION</h3>
                    <p className="features-text">
                        The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX
                        during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed
                        liquid-fuel launch vehicle to go into orbit around the Earth.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default Features;