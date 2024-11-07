import { Route, Routes } from "react-router-dom";
import Home from "../page/home";
import DetailPage from "../page/detail";
import { APP_ROUTER } from "../utils/contanst";
import MainLayout from "../layout";
function Routing() {
  return (
    <Routes>
      <Route path={APP_ROUTER.INDEX} element={<MainLayout />}>
        <Route index path={APP_ROUTER.INDEX} element={<Home />} />
        <Route path={APP_ROUTER.DETAIL} index element={<DetailPage />} /> 
      </Route>
    </Routes>
  );
}

export default Routing;
