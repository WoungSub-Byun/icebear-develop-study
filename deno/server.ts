import { Application} from "https://deno.land/x/oak/mod.ts";
import router from './route.ts';

const app = new Application();
const port = 3013;

app.use(router.routes());
app.use(router.allowedMethods());


console.log(`Server is running on ${port}`);
await app.listen({port : port});
