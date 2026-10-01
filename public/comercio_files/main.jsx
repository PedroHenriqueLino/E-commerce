const StrictMode = __vite__cjsImport0_react["StrictMode"];const createRoot = __vite__cjsImport1_reactDom_client["createRoot"];const _jsxDEV = __vite__cjsImport7_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=f6fa1309";
import __vite__cjsImport1_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=f6fa1309";
import "/src/index.css";
import App from "/src/App.jsx?t=1789067198232";
//Ract-router
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=f6fa1309";
//Components
import HomePage from "/src/routes/HomePage.jsx?t=1789066554275";
import ProductPage from "/src/routes/ProductPage.jsx";
var _jsxFileName = "D:/ESTUDOS/Projetos_Portifoli/E-comerce_EM_React/comercio/src/main.jsx";
import __vite__cjsImport7_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f6fa1309";
const router = createBrowserRouter([{
	path: "/",
	element: /* @__PURE__ */ _jsxDEV(App, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 14
	}, this),
	children: [{
		path: "/",
		element: /* @__PURE__ */ _jsxDEV(HomePage, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 18
		}, this)
	}, {
		path: "/product",
		element: /* @__PURE__ */ _jsxDEV(ProductPage, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 18
		}, this)
	}]
}]);
//Context
import { ProductContextProvider } from "/src/Context/ProductContext.jsx";
import { PromotionBannerProvider } from "/src/Context/PromotionBanner.jsx";
createRoot(document.getElementById("root")).render(/* @__PURE__ */ _jsxDEV(StrictMode, { children: /* @__PURE__ */ _jsxDEV(ProductContextProvider, { children: /* @__PURE__ */ _jsxDEV(PromotionBannerProvider, { children: /* @__PURE__ */ _jsxDEV(RouterProvider, { router }, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 38,
	columnNumber: 9
}, this) }, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 37,
	columnNumber: 7
}, this) }, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 36,
	columnNumber: 5
}, this) }, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 35,
	columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsU0FBUyxrQkFBa0I7QUFDM0IsU0FBUyxrQkFBa0I7QUFDM0IsT0FBTztBQUNQLE9BQU8sU0FBUzs7QUFJaEIsU0FBUyxxQkFBcUIsc0JBQXNCOztBQUlwRCxPQUFPLGNBQWM7QUFDckIsT0FBTyxpQkFBaUI7OztBQUN4QixNQUFNLFNBQVMsb0JBQW9CLENBQ2pDO0NBQ0UsTUFBTTtDQUNOLFNBQVMsd0JBQUMsS0FBRCxDQUFNOzs7OztDQUNmLFVBQVUsQ0FDUjtFQUNFLE1BQU07RUFDTixTQUFTLHdCQUFDLFVBQUQsQ0FBVzs7Ozs7Q0FDdEIsR0FDQTtFQUNFLE1BQU07RUFDTixTQUFTLHdCQUFDLGFBQUQsQ0FBYzs7Ozs7Q0FDekIsQ0FDRjtBQUNGLENBQ0YsQ0FBQzs7QUFHRCxTQUFTLDhCQUE4QjtBQUN2QyxTQUFTLCtCQUErQjtBQUN4QyxXQUFXLFNBQVMsZUFBZSxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQzFDLHdCQUFDLFlBQUQsWUFDRSx3QkFBQyx3QkFBRCxZQUNFLHdCQUFDLHlCQUFELFlBQ0Usd0JBQUMsZ0JBQUQsRUFBd0IsT0FBUzs7OztTQUNWOzs7O1NBQ0g7Ozs7U0FDZDs7OztRQUNkIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmljdE1vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xuaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAuanN4J1xuXG5cbi8vUmFjdC1yb3V0ZXJcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJSb3V0ZXIsIFJvdXRlclByb3ZpZGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuXG4vL0NvbXBvbmVudHNcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3JvdXRlcy9Ib21lUGFnZS5qc3gnXG5pbXBvcnQgUHJvZHVjdFBhZ2UgZnJvbSAnLi9yb3V0ZXMvUHJvZHVjdFBhZ2UuanN4J1xuY29uc3Qgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcihbXG4gIHtcbiAgICBwYXRoOiBcIi9cIixcbiAgICBlbGVtZW50OiA8QXBwIC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICBlbGVtZW50OiA8SG9tZVBhZ2UgLz5cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcvcHJvZHVjdCcsXG4gICAgICAgIGVsZW1lbnQ6IDxQcm9kdWN0UGFnZSAvPlxuICAgICAgfVxuICAgIF1cbiAgfVxuXSlcblxuLy9Db250ZXh0XG5pbXBvcnQgeyBQcm9kdWN0Q29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi9Db250ZXh0L1Byb2R1Y3RDb250ZXh0LmpzeCdcbmltcG9ydCB7IFByb21vdGlvbkJhbm5lclByb3ZpZGVyIH0gZnJvbSAnLi9Db250ZXh0L1Byb21vdGlvbkJhbm5lci5qc3gnXG5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpLnJlbmRlcihcbiAgPFN0cmljdE1vZGU+XG4gICAgPFByb2R1Y3RDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8UHJvbW90aW9uQmFubmVyUHJvdmlkZXI+XG4gICAgICAgIDxSb3V0ZXJQcm92aWRlciByb3V0ZXI9e3JvdXRlcn0gLz5cbiAgICAgIDwvUHJvbW90aW9uQmFubmVyUHJvdmlkZXI+XG4gICAgPC9Qcm9kdWN0Q29udGV4dFByb3ZpZGVyPlxuICA8L1N0cmljdE1vZGU+LFxuKVxuIl19