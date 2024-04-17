
import ItemList from './ItemList'

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <main>
            {items.length ? (
                <ItemList item={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}

                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list empty.</p>
            )}
        </main >
    )

}

export default Content