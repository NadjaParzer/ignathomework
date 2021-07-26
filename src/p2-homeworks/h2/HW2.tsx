import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = string 
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
} 
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ 
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: string): Array<AffairType> => {
    /*let filteredAffairs: Array<AffairType> = []
    if(filter === 'all'){
        filteredAffairs = affairs
    }else 
    if (filter === 'high') {
        filteredAffairs = affairs.filter(a => a.priority === 'high')
    } else if (filter === 'middle') {
        filteredAffairs = affairs.filter(a => a.priority === 'middle')
    } else if (filter === 'low') {
        filteredAffairs = affairs.filter(a => a.priority === 'low')
       
    } return filteredAffairs */
    
    if (filter === 'all') return affairs
    else return affairs.filter(a => a.priority === filter)
}

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { 
    let newAffairs:Array<AffairType> = affairs.filter(a=>a._id != _id) 
    return newAffairs
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
