import React from 'react'
import ButtonRow from '../../components/Home/ButtonRow'
import Carousels from '../../components/Home/Carousels'
import TagLine from '../../components/Home/TagLine'

export default function Body() {
    return (
        <div>
            <Carousels />
            <div style={{paddingTop:"1%"}}>
                <TagLine />
            </div>
            <ButtonRow />
        </div>
    )
}
