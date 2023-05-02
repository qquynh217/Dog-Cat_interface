import "./Classification.scss";
import cat from "@/assets/cat.png";
import dog from "@/assets/dog.png";
import { useClassifiaction } from "@/hooks/useClassification";

function Classification() {
  const { input, onChange, onSubmit, loading, result } = useClassifiaction();
  return (
    <div className="classification">
      <div className="header-background"></div>
      <div className="classification-inner">
        <img src={cat} alt="" className="banner cat" />
        <div className="input-field">
          <label htmlFor="image">Choose Image</label>
          <input type="file" id="image" name="image" onChange={onChange} />
          <div className="image-preview">
            {input && <img src={input} alt="" />}
          </div>
          <button
            className={input && !loading ? "" : "disable"}
            onClick={onSubmit}
          >
            Predict
          </button>
          {loading ? (
            <div className="loader"></div>
          ) : (
            <div className="result">
              <p>
                Predict: <span>{result?.label}</span>
              </p>
              <p>
                Confidence: <span>{result?.confidence}</span>
              </p>
            </div>
          )}
        </div>
        <img src={dog} alt="" className="banner" />
      </div>
    </div>
  );
}

export default Classification;
