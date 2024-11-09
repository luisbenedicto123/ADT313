import React, { useRef } from 'react';

function Problem3() {
  // Create individual references for each input field
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);
  const input6Ref = useRef(null);
  const input7Ref = useRef(null);
  const input8Ref = useRef(null);
  const input9Ref = useRef(null);
  const input10Ref = useRef(null);

  // Function to focus on the first empty input
  const focusFirstEmptyInput = () => {
    const inputs = [
      input1Ref,
      input2Ref,
      input3Ref,
      input4Ref,
      input5Ref,
      input6Ref,
      input7Ref,
      input8Ref,
      input9Ref,
      input10Ref,
    ];

    // Loop through each reference and focus on the first empty input
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].current && inputs[i].current.value === '') {
        inputs[i].current.focus();
        break;
      }
    }
  };

  return (
    <>
      <div style={{ display: 'block' }}>
        Input 1: <input ref={input1Ref} type="text" />
      </div>
      <div style={{ display: 'block' }}>
        Input 2: <input ref={input2Ref} type="text" />
      </div>
      <div style={{ display: 'block' }}>
        Input 3: <input ref={input3Ref} type="text" />
      </div>
      <div style={{ display: 'block' }}>
        Input 4: <input ref={input4Ref} type="text" />
      </div>
      <div style={{ display: 'block' }}>
        Input 5: <input ref={input5Ref} type="text" />
      </div>
      <div style={{ display: 'block' }}>
        Input 6: <input ref={input6Ref} type="text" />
      </div>
      <div style={{ display: 'block' }}>
        Input 7: <input ref={input7Ref} type="text" />
      </div>
      <div style={{ display: 'block' }}>
        Input 8: <input ref={input8Ref} type="text" />
      </div>
      <div style={{ display: 'block' }}>
        Input 9: <input ref={input9Ref} type="text" />
      </div>
      <div style={{ display: 'block' }}>
        Input 10: <input ref={input10Ref} type="text" />
      </div>

      <button type="button" onClick={focusFirstEmptyInput}>
        I'm a button
      </button>
    </>
  );
}

export default Problem3;
