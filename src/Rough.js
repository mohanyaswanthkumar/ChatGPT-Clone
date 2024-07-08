import React from 'react'

const Rough = () => {
    const data=[
        {
          "what is java": "Java is a high-level, object-oriented programming language known for its platform independence, robustness, and versatility. It's used extensively in developing web, mobile, enterprise, and desktop applications worldwide. Java's syntax is similar to C++, making it relatively easy to learn for developers familiar with C-based languages."
        },
        {
          "what is python": "Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility. It's widely used in web development, scientific computing, data analysis, artificial intelligence, and automation. Python's clear syntax and extensive libraries make it a popular choice for beginners and experienced developers alike."
        },
        {
          "what is c": "C is a powerful and widely used procedural programming language. It's known for its efficiency, low-level capabilities, and versatility in system programming, embedded systems, game development, and operating systems. C's syntax strongly influenced many other programming languages, making it fundamental knowledge for many developers."
        }
      ];
      localStorage.setItem('chatgpt', JSON.stringify(data));
  return (
    <div>
      {/* <div className='chat'>
            <img src={chatgpt} style={{width:'30px'}} className='chat-img' alt='' /> <p className='txt'>It looks like you're encountering an error related to importing an SVG file (chatgptlogo.svg) in your React application. The error message indicates an issue with the SVG file's syntax.
                                                              Here are a few steps you can take to troubleshoot and resolve this issue:
                                                              Check SVG File: Open chatgptlogo.svg and ensure that its syntax is correct. Look for any missing or misplaced characters, especially around the area mentioned in the error message (line 13, column 30).
                                                                Valid SVG: Make sure that the SVG file is valid and well-formed. You can use online SVG validators to check its validity.
                                                                SVG Loader Configuration: Verify that your webpack or create-react-app configuration includes a loader for handling SVG files. If not, you may need to configure the SVG loader to handle SVG imports correctly.</p>
          </div>
          <div className='chat bot'>
          <img src={user} style={{width:'30px'}} className='chat-img' alt=''/><p className='txt'>Update Dependencies: Ensure that your project's dependencies, especially those related to SVG handling (@svgr/webpack, etc.), are up to date. Sometimes, updating dependencies can resolve compatibility issues.
                                                              Raise an Issue: If you believe that the SVG file is valid and the issue persists, you can consider raising an issue on the GitHub repository mentioned in the error message (https://github.com/Rich-Harris/svg-parser/issues). Provide relevant details and the SVG file for better assistance.
                                                              Once you've gone through these steps, try importing the SVG file again and see if the error persists. If you need further help, feel free to ask!
                                                                </p>
          </div>
          <div className='chat'>
            <img src={chatgpt} style={{width:'30px'}} className='chat-img' alt='' /> <p className='txt'>It looks like you're encountering an error related to importing an SVG file (chatgptlogo.svg) in your React application. The error message indicates an issue with the SVG file's syntax.
                                                              Here are a few steps you can take to troubleshoot and resolve this issue:
                                                              Check SVG File: Open chatgptlogo.svg and ensure that its syntax is correct. Look for any missing or misplaced characters, especially around the area mentioned in the error message (line 13, column 30).
                                                                Valid SVG: Make sure that the SVG file is valid and well-formed. You can use online SVG validators to check its validity.
                                                                SVG Loader Configuration: Verify that your webpack or create-react-app configuration includes a loader for handling SVG files. If not, you may need to configure the SVG loader to handle SVG imports correctly.</p>
          </div>
          <div className='chat bot'>
          <img src={user} style={{width:'30px'}} className='chat-img' alt=''/><p className='txt'>Update Dependencies: Ensure that your project's dependencies, especially those related to SVG handling (@svgr/webpack, etc.), are up to date. Sometimes, updating dependencies can resolve compatibility issues.
                                                              Raise an Issue: If you believe that the SVG file is valid and the issue persists, you can consider raising an issue on the GitHub repository mentioned in the error message (https://github.com/Rich-Harris/svg-parser/issues). Provide relevant details and the SVG file for better assistance.
                                                              Once you've gone through these steps, try importing the SVG file again and see if the error persists. If you need further help, feel free to ask!
                                                                </p>
          </div> */}
    </div>
  )
}

export default Rough
