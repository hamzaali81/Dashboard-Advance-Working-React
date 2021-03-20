import Test from './../Test';


export const Routes = [
    {
        icon: '',
        label: 'Inbox',
        path: '/inbox',
        template: 'dashboard',
        component: Test,
        // component:()=> <Test title="Inbox"/>,
    },
    {
        icon: '',
        label: 'Mail',
        path: '/mail',
        template: 'dashboard',
        component: Test,
    },
    {
        icon: '',
        label: 'Span',
        path: '/span',
        template: 'dashboard',
        component: Test,
    },
    {
        icon: '',
        label: 'Trash',
        path: '/trash',
        template: 'dashboard',
        component: Test,
    }
]