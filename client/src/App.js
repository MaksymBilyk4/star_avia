import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes";
import MainLayout from "./components/Layout/MainLayout";
import {useDispatch} from "react-redux";
import {findAllPaymentsAction} from "./redux/action/payment";
import {findAllClientsAction} from "./redux/action/client";
import {findAllPassportsAction} from "./redux/action/passport";
import {findAllOrdersAction, findAllOrderTypesAction, findAllTourOperatorsAction} from "./redux/action/order";

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findAllPaymentsAction());
        dispatch(findAllClientsAction());
        dispatch(findAllPassportsAction());
        dispatch(findAllOrderTypesAction());
        dispatch(findAllTourOperatorsAction());
        dispatch(findAllOrdersAction());
    }, []);

    return (
        <MainLayout>
            <Routes>
                {routes.map(r =>
                    <Route key={r.path} path={r.path} element={r.element}/>
                )}
            </Routes>
        </MainLayout>
    );
};

export default App;