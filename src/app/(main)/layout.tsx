"use client";

import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page";
import Counter from "./counter/page";

export default function AppLayout() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/user-form" element={<h1>form component</h1>} />
          <Route path="/text-editor" element={<h1>text editor component</h1>} />
        </Routes>
        {/* <section>{children}</section> */}
      </Router>
    </Provider>
  );
}
