import React from 'react'
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'
import s from './CSS.module.css'

function PreJunior() {
    return (
        <div className={s.mainBlock}>
            <h1 className={s.h1}>PreJUNIOR</h1>
            <HW1 />
            <HW2 />
            <HW3 />
            <HW4 />
            {/*<HW6/>*/}

        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз