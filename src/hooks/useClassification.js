import { useState } from "react";

const initResult = {
  type: "",
  confidence: "",
};

export const useClassifiaction = () => {
  const [input, setInput] = useState("");
  const [fname, setFName] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(initResult);
  const getResult = async () => {
    setLoading(true);
    // const res = await fetch("http://127.0.0.1:5000/predict", {
    //   method: "POST",
    //   body: JSON.stringify({ img: fname }),
    // });
    // const data = await res.json();
    const data = {
      label: "Dog",
      confidence: "99.00%",
    };
    // console.log(data);
    setResult({ ...data });
    setLoading(false);
  };
  const onChange = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setInput(url);
    setFName(e.target.files[0].name);
    setResult(initResult);
  };
  const onSubmit = async () => {
    await getResult(fname);
  };
  return {
    input,
    onChange,
    onSubmit,
    loading,
    result,
  };
};
