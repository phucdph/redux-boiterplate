import App from '../App';
import { Counter } from '../containers';

const routes = [
    {
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: Counter
            }
        ]
    }
];

export default routes;
