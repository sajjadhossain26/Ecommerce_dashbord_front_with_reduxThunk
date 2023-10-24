import privateRouter from "./privateRouter";
import publicRouter from "./publicRouter";
import {createBrowserRouter} from 'react-router-dom'


// create browser router
const router = createBrowserRouter([...publicRouter, ...privateRouter])


// export browser router
export default router;