import Hello from '../components/views/Hello'

import Test from '../components/views/Test'

import Inventory from '../components/views/Inventory'

import ItemDetails from '../components/views/ItemDetails'

export const routes = [
{
path: '/hello',
component: Hello
},

{
    path: '/Test/:id',
    component: Test
},

{
    path: '',
    component: Inventory
},

{
    path: '/item/:id',
    component: ItemDetails
},
]