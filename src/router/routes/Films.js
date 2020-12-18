import Films from '@/views/Films/Films.vue';
import NowPlaying from '@/views/Films/NowPlaying.vue';
import ComingSoon from '@/views/Films/ComingSoon.vue';
const filmsRouter = {
    path:'/films',
    component:Films,
    redirect:'/films/nowPlaying',
    children:[
        {path:'comingSoon',compontent:ComingSoon},
        {path:'nowPlaying',component:NowPlaying}
    ]
};
export default filmsRouter;