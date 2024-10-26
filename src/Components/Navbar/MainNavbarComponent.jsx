import React, { useState } from 'react';
import { Navbar } from './Navbar'; // Ensure this is the correct path
import { CustomersOrders } from '../../Screens/CustomerOrders/CustomersOrders'; // Ensure this is the correct path

const MainNavbarComponent = () => {
    const [hasOrders, setHasOrders] = useState(false);

    return (
        <>
            <Navbar hasOrders={hasOrders} />
            <CustomersOrders setHasOrders={setHasOrders} />
            {/* Other components */}
        </>
    );
};

export default MainNavbarComponent;
