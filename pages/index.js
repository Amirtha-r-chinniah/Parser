import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const nearley = require("nearley");
  const grammar = require("../grammar");
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

  function matchRegex() {
    try {
      parser.feed(input);
      setResult(parser.results);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <div className="center">
        <Box
          component="form"
          sx={{ backgroundColor: "#83C8E4", width: "45ch" }}
          noValidate
          autoComplete="off"
        >
          <div style={{ paddingLeft: "20ch" }}>Parser</div>

          <TextField
            value={input}
            onInput={(e) => setInput(e.target.value)}
            sx={{ width: "35ch" }}
            variant="standard"
          />
          <button type="button" sx={{ float: "right" }} onClick={matchRegex}>
            Submit
          </button>
          {result != "" && (
            <div style={{ backgroundColor: "#C3DFE7" }}>{result}</div>
          )}
        </Box>
      </div>
    </>
  );
}
