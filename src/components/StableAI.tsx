import axios from 'axios';
import React, {useEffect, useState} from 'react';
// import './StableAI.css';

function StableAI() {

  const [prediction, setPrediction] = useState<any>(null)
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      Authorization: `Token 838c399fc2fad761263440724013356effe75622`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Pinned to a specific version of kuprel/min-dalle, fetched from:
      // https://replicate.com/kuprel/min-dalle/versions
      version:
        "2af375da21c5b824a84e1c459f45b69a117ec8649c2aa974112d7cf1840fc0ce",
      input: { text: e.target.prompt.value, grid_size: 1 },
    }),
  });
    let prediction = await response.json();
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await new Promise(f => setTimeout(f, 1000));
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      setPrediction(prediction);
    }
  };

  return (
    <div>
      <p>
        Dream something with{" "}
        <a href="https://replicate.com/kuprel/min-dalle">kuprel/min-dalle</a>:
      </p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="prompt" />
        <button type="submit">Go!</button>
      </form>

      {error && <div>{error}</div>}

      {prediction && (
        <div>
          <p>{prediction.status}</p>
          {prediction.output && (
            <img
              src={prediction.output[prediction.output.length - 1]}
              alt="output"
              width={500}
              height={500}
            />
          )}
        </div>
      )}
    </div>
  );

}

export default StableAI;