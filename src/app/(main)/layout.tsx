"use client";

import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page";
// import Counter from "./counter/page";
import UserForm from "./user-form/page";
import TextEditor from "./text-editor/page";
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("../(main)/counter/page"), { ssr: false });

export default function AppLayout() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/user-form" element={<UserForm />} />
          <Route path="/text-editor" element={<TextEditor />} />
        </Routes>
        {/* <section>{children}</section> */}
      </Router>
    </Provider>
  );
}
