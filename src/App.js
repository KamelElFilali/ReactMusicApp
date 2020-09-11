import React, { useState } from 'react'

import {
    motion,
    AnimateSharedLayout, AnimatePresence
}
    from 'framer-motion'

import './css/style.css'

/**

* This is an example of animating shared layouts in Framer Motion 2.

*

* The open state of each panel is contained locally to that component. Wrapping

* them all in the same AnimateSharedLayout component allows them all to animate

* in response to state changes that affect each other's layout.

*

* Try removing AnimateSharedLayout to see how that affects the animation.

*/

export default function App () {
    return (

        <AnimateSharedLayout>
            <h1 id='titreSite'>Ma PlayList</h1>
            <motion.ul
                layout initial={{ borderRadius: 25 }}
            >

                {items.map((item) =>
                    Item(item))}

            </motion.ul>

        </AnimateSharedLayout>

    )
}

function Item (object) {
    const [isOpen, setIsOpen] =
useState(false)

    const toggleOpen = () => setIsOpen(!isOpen)

    return (

        <motion.li
            layout
            onClick={toggleOpen} initial={{
                borderRadius: 10
            }}
        >

            <motion.div
                className='avatar'
                layout
            />

            <AnimatePresence>{isOpen &&
            <Content
                object={object}
            />}
            </AnimatePresence>

        </motion.li>

    )
}

function Content ({ object }) {
    return (

        <motion.div

            layout

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}
        >

            <div className='row'>{object.nom}</div>

            <div className='row'>{object.album}</div>

            <div className='row'>{object.year}</div>

        </motion.div>

    )
}

const items = [

    {
        nom: 'Jazzy',
        album: 'Fuck men',
        year: '2020'
    },

    {
        nom: 'Maitre Gims',
        album: 'Bella',
        year: '2016'
    },

    {
        nom: 'Dadju',
        album: 'Jaloux',
        year: '2018'
    }

]
