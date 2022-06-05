import Hog from './Hog'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
const HogContainer = ({hogs}) => {
    const [greased, setGreased] = useState(false)
    const [sort, setSort] = useState("none")

    const filterAndSortHogs = () => {
       const filtered = hogs.filter(hog => {
            if(greased){
                return hog.greased
            } else { 
                return true
            }
        })

        if(sort === "none"){
            return filtered
        } else if (sort === "name"){
            return filtered.sort((a,b) => {
                if(a.name > b.name){
                    return 1
                } else {
                    return -1
                }
            })
        } else {
            return filtered.sort((a,b) => {
                if(a.weight < b.weight){
                    return 1
                } else {
                    return -1
                }
            })
        }


    }

    const renderHogs = () => {
        return filterAndSortHogs().map(hog => {
            return <Hog key={uuidv4()} hog={hog}/>
        })
    }
    const handleClick = () => {
        setGreased(!greased)
    }

    const handleChange = (event) => {
        setSort(event.target.value)
    }
    return(
        <>
            <div>
                <button onClick={handleClick}>{ greased ? "All Hogs" : "Greased Hogs Only"} </button>
                <select onChange={handleChange}>
                    <option>none</option>
                    <option>name</option>
                    <option>weight</option>
                </select>
            </div>
            <div class="ui grid container">
                {renderHogs()}
            </div>
        </>
    )
}

export default HogContainer