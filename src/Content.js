
import { Fragment } from 'react'
import ItemList from './ItemList'

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <>
            {items.length ? (
                <ItemList item={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}

                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list empty.</p>
            )}
        </>
    )

}

export default Content