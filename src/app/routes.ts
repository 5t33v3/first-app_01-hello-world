import {Routes} from '@angular/router';
import {Home} from './home/home';
import {Details} from './details/details';
import {Contact} from './contact/contact';

const routeConfig: Routes = [
    {
        path:'',
        component: Home,
        title: 'Home page',
    },
    {
        path:'details/:id',
        component: Details,
        title: 'Home details',
    },
    { path: '', component: Home },
  { path: 'contact', component: Contact  },

];

export default routeConfig;