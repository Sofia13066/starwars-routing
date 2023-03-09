import React, {useEffect, useState} from 'react';
import "../css/contact.css";
import {base_url, period_month} from "../utils/constants";

interface Planet {
    name: string
}

const Contact = () => {

    const [planets, setPlanets] = useState(['wait...']);

    async function fillPlanets(url: string) {
        const response = await fetch(url);
        const json: Planet[] = await response.json();
        const planets = json.map(item => item.name);
        setPlanets(planets)
        const info = {
            payload: planets,
            time: Date.now()
        }
        localStorage.setItem('planets', JSON.stringify(info));
    }

    useEffect(() => {
        const planets = JSON.parse(localStorage.getItem('planets')!);
        if (planets && ((Date.now() - planets.time) < period_month)) {
            setPlanets(planets.payload);
        } else {
            fillPlanets(`${base_url}/v1/planets`);
        }
        return () => console.log('Contact unmounted');
    }, [])

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <label>First Name
                    <input type="text" name="firstname" placeholder="Your name.."/>
                </label>
                <label>Planet
                    <select name="planet">{
                        planets.map((item, index) => <option value={item} key={index}>{item}</option>)
                    }
                    </select>
                </label>
                <label>Subject
                    <textarea name="subject" placeholder="Write something.."/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )

}

export default Contact