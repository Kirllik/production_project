import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>  {/*//Lazy_Loading*/}
            <Routes>
                {Object.values(routeConfig).map(({element, path}, i) => (
                    <Route
                        key={i}
                        path={path}
                        element={(
                            <Suspense fallback={<div>Загрузка...</div>}>  {/*//Lazy_Loading*/}
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            </Suspense>
                        )}
                    />
                    ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;