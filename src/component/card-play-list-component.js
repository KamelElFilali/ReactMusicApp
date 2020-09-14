import React, { useState } from 'react'

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

// import '../css/style.css'

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

export default function PlayList () {
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
