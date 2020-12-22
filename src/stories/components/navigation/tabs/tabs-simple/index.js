// Vendors
import React from 'react';

// Components
import Tabs from 'components/navigation/Tabs';

const SimpleTabs = () => {
    const [data, setData ] = React.useState([
        {id: '0', label: 'Semua Produk', description: 'Semua Produk'},
        {id: '1', label: 'Kategori', description: 'Semua Kategori'}
    ])
    return(
        <>
        <Tabs data={data}/>
        </>
    )
}

export default SimpleTabs;