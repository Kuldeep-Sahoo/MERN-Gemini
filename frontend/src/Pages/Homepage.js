// import React, { useState } from "react";
// import axios from "axios";
// import { Box, Skeleton, StackDivider, VStack } from "@chakra-ui/react";
// const Homepage = () => {
//   const [data, setData] = useState("");
//   const [inputValue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(false);
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       setLoading(true);
//       const res = await axios.post("/", { prompt: inputValue });
//       console.log("API Response:", res.data);
//       setLoading(false);
//       setData(res.data.message);
//     } catch (error) {
//       console.log("Error Fetching data");
//       setLoading(false);
//     }
//   };
//   return (
//     <Box className="container" style={{ marginTop: "50px" }}>
//       <Box minHeight="80vh">
//         {loading ? (
//           <VStack
//             divider={<StackDivider borderColor="gray.200" />}
//             spacing={4}
//             align="stretch"
//           >
//             <Skeleton height="45px" />
//             <Skeleton height="45px" />
//             <Skeleton height="45px" />
//             <Skeleton height="45px" />
//             <Skeleton height="45px" />
//             <Skeleton height="45px" />
//             <Skeleton height="45px" />
//           </VStack>
//         ) : (
//           ""
//         )}
//         {data}
//       </Box>
//       <form onSubmit={handleSubmit} >
//         <Box className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter Your Prompt"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//           />
//         </Box>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </Box>
//   );
// };

// export default Homepage;



// import React, { useState } from "react";
// import axios from "axios";
// import {
//   Box,
//   Skeleton,
//   StackDivider,
//   VStack,
//   Input,
//   Button,
//   Text,
// } from "@chakra-ui/react";

// const Homepage = () => {
//   const [messages, setMessages] = useState([]); // Array to store message history
//   const [inputValue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [temp, setTemp] = useState(0); // Counter for the number of messages

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post("/", { prompt: inputValue });
//       console.log("API Response:", res.data);

//       // Add new message to the message history
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: inputValue, type: "user" }, // User input
//         { text: res.data.message, type: "bot" }, // AI response
//       ]);

//       // Increment the temp counter
//       setTemp((prevTemp) => prevTemp + 1);
//       setInputValue(""); // Clear input after submission
//     } catch (error) {
//       console.log("Error Fetching data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box className="container" style={{ marginTop: "50px" }}>
//       <Box minHeight="80vh">
//         {loading ? (
//           <VStack
//             divider={<StackDivider borderColor="gray.200" />}
//             spacing={4}
//             align="stretch"
//           >
//             {[...Array(7)].map((_, index) => (
//               <Skeleton key={index} height="45px" />
//             ))}
//           </VStack>
//         ) : (
//           messages.map((message, index) => (
//             <Text
//               key={index}
//               mt={2}
//               fontSize="lg"
//               color={message.type === "user" ? "blue.500" : "green.500"}
//             >
//               {message.text}
//             </Text>
//           ))
//         )}
//       </Box>
//       <form onSubmit={handleSubmit}>
//         <Box className="mb-3" mt={4}>
//           <Input
//             type="text"
//             placeholder="Enter Your Prompt"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             size="lg"
//           />
//         </Box>
//         <Button type="submit" colorScheme="teal" size="lg">
//           Submit
//         </Button>
//       </form>
//       <Text mt={4}>Total Messages: {temp}</Text>{" "}
//       {/* Displaying the total messages */}
//     </Box>
//   );
// };

// export default Homepage;








// import React, { useState } from "react";
// import axios from "axios";
// import {
//   Box,
//   Skeleton,
//   StackDivider,
//   VStack,
//   Input,
//   Button,
//   Text,
// } from "@chakra-ui/react";

// const Homepage = () => {
//   const [messages, setMessages] = useState([]); // Array to store message history
//   const [inputValue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [temp, setTemp] = useState(0); // Counter for the number of messages

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post("/", { prompt: inputValue });
//       console.log("API Response:", res.data);

//       // Add new message to the message history
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: inputValue, type: "user" }, // User input
//         { text: res.data.message, type: "bot" }, // AI response
//       ]);

//       // Increment the temp counter
//       setTemp((prevTemp) => prevTemp + 1);
//       setInputValue(""); // Clear input after submission
//     } catch (error) {
//       console.log("Error Fetching data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       className="container"
//       style={{ marginTop: "50px", paddingBottom: "100px" }}
//     >
//       <Text fontSize="2xl" mb={4}>
//         Total Messages: {temp} {/* Displaying the total messages at the top */}
//       </Text>
//       <Box minHeight="80vh" mb="100px">
//         {" "}
//         {/* Add margin bottom to avoid overlap with the fixed form */}
//         {loading ? (
//           <VStack
//             divider={<StackDivider borderColor="gray.200" />}
//             spacing={4}
//             align="stretch"
//           >
//             {[...Array(7)].map((_, index) => (
//               <Skeleton key={index} height="45px" />
//             ))}
//           </VStack>
//         ) : (
//           messages.map((message, index) => (
//             <Text
//               key={index}
//               mt={2}
//               fontSize="lg"
//               color={message.type === "user" ? "blue.500" : "green.500"}
//             >
//               {message.text}
//             </Text>
//           ))
//         )}
//       </Box>
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           position: "fixed",
//           bottom: 0,
//           left: 0,
//           right: 0,
//           padding: "10px",
//           backgroundColor: "white", // Ensuring background color to avoid transparency
//           borderTop: "1px solid #ccc", // Optional: Add a border for separation
//         }}
//       >
//         <Box className="mb-3">
//           <Input
//             type="text"
//             placeholder="Enter Your Prompt"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             size="lg"
//           />
//         </Box>
//         <Button type="submit" colorScheme="teal" size="lg">
//           Submit
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default Homepage;



// import React, { useState } from "react";
// import axios from "axios";
// import {
//   Box,
//   Skeleton,
//   StackDivider,
//   VStack,
//   Input,
//   Button,
//   Text,
//   Flex,
// } from "@chakra-ui/react";

// const Homepage = () => {
//   const [messages, setMessages] = useState([]); // Array to store message history
//   const [inputValue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [temp, setTemp] = useState(0); // Counter for the number of messages

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post("/", { prompt: inputValue });
//       console.log("API Response:", res.data);

//       // Add new message to the message history
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: inputValue, type: "user" }, // User input
//         { text: res.data.message, type: "bot" }, // AI response
//       ]);

//       // Increment the temp counter
//       setTemp((prevTemp) => prevTemp + 1);
//       setInputValue(""); // Clear input after submission
//     } catch (error) {
//       console.log("Error Fetching data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       className="container"
//       style={{ marginTop: "50px", paddingBottom: "100px" }}
//     >
//       <Flex justifyContent="space-between" alignItems="center" mb={2}>
//         <Text fontSize="xs" color="gray.500">
//           Total Messages: {temp}
//         </Text>
//       </Flex>
//       <Box minHeight="80vh" mb="100px">
//         {" "}
//         {/* Add margin bottom to avoid overlap with the fixed form */}
//         {loading ? (
//           <VStack
//             divider={<StackDivider borderColor="gray.200" />}
//             spacing={4}
//             align="stretch"
//           >
//             {[...Array(7)].map((_, index) => (
//               <Skeleton key={index} height="45px" />
//             ))}
//           </VStack>
//         ) : (
//           messages.map((message, index) => (
//             <Text
//               key={index}
//               mt={2}
//               fontSize="lg"
//               color={message.type === "user" ? "blue.500" : "green.500"}
//             >
//               {message.text}
//             </Text>
//           ))
//         )}
//       </Box>
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           position: "fixed",
//           bottom: 0,
//           left: 0,
//           right: 0,
//           padding: "10px",
//           backgroundColor: "white", // Ensuring background color to avoid transparency
//           borderTop: "1px solid #ccc", // Optional: Add a border for separation
//         }}
//       >
//         <Flex>
//           <Input
//             type="text"
//             placeholder="Enter Your Prompt"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             size="lg"
//             mr={2} // Add margin to the right of the input
//           />
//           <Button type="submit" colorScheme="teal" size="lg">
//             Submit
//           </Button>
//         </Flex>
//       </form>
//     </Box>
//   );
// };

// export default Homepage;








// import React, { useState } from "react";
// import axios from "axios";
// import {
//   Box,
//   Skeleton,
//   StackDivider,
//   VStack,
//   Input,
//   Button,
//   Text,
//   Flex,
// } from "@chakra-ui/react";

// const Homepage = () => {
//   const [messages, setMessages] = useState([]); // Array to store message history
//   const [inputValue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [temp, setTemp] = useState(0); // Counter for the number of messages

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post("/", { prompt: inputValue });
//       console.log("API Response:", res.data);

//       // Add new message to the message history
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: inputValue, type: "user" }, // User input
//         { text: res.data.message, type: "bot" }, // AI response
//       ]);

//       // Increment the temp counter
//       setTemp((prevTemp) => prevTemp + 1);
//       setInputValue(""); // Clear input after submission
//     } catch (error) {
//       console.log("Error Fetching data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       className="container"
//       style={{ marginTop: "50px", paddingBottom: "100px" }}
//     >
//       <Flex justifyContent="space-between" alignItems="center" mb={2}>
//         <Text fontSize="xs" color="gray.500">
//           Total Messages: {temp}
//         </Text>
//       </Flex>
//       <Box
//         minHeight="80vh"
//         mb="100px"
//         display="flex"
//         flexDirection="column"
//         alignItems="flex-start"
//       >
//         {loading ? (
//           <VStack
//             divider={<StackDivider borderColor="gray.200" />}
//             spacing={4}
//             align="stretch"
//           >
//             {[...Array(7)].map((_, index) => (
//               <Skeleton key={index} height="45px" />
//             ))}
//           </VStack>
//         ) : (
//           messages.map((msg, index) => (
//             <Text
//               key={index}
//               alignSelf={msg.type === "user" ? "flex-end" : "flex-start"} // Align user messages to the right and bot messages to the left
//               bg={msg.type === "user" ? "blue.100" : "gray.100"}
//               p={2}
//               borderRadius="md"
//               width="fit-content"
//               mb={2}
//               textAlign="left" // Align text to the left
//             >
//               {msg.text}
//             </Text>
//           ))
//         )}
//       </Box>
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           position: "fixed",
//           bottom: "0",
//           left: "0",
//           right: "0",
//           padding: "10px",
//           background: "white",
//         }}
//       >
//         <Flex>
//           <Input
//             type="text"
//             placeholder="Enter Your Prompt"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             mr={2}
//           />
//           <Button type="submit" colorScheme="blue">
//             Submit
//           </Button>
//         </Flex>
//       </form>
//     </Box>
//   );
// };

// export default Homepage;









// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import {
//   Box,
//   Skeleton,
//   StackDivider,
//   VStack,
//   Input,
//   Button,
//   Text,
//   Flex,
// } from "@chakra-ui/react";

// const Homepage = () => {
//   const [messages, setMessages] = useState([]); // Array to store message history
//   const [inputValue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [temp, setTemp] = useState(0); // Counter for the number of messages
//   const messagesEndRef = useRef(null); // Reference for scrolling

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post("/", { prompt: inputValue });
//       console.log("API Response:", res.data);

//       // Add new message to the message history
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: inputValue, type: "user" }, // User input
//         { text: res.data.message, type: "bot" }, // AI response
//       ]);

//       // Increment the temp counter
//       setTemp((prevTemp) => prevTemp + 1);
//       setInputValue(""); // Clear input after submission
//     } catch (error) {
//       console.log("Error Fetching data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Scroll to the bottom whenever messages change
//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   return (
//     <Box
//       className="container"
//       style={{ marginTop: "50px", paddingBottom: "100px" }}
//     >
//       <Flex justifyContent="space-between" alignItems="center" mb={2}>
//         <Text fontSize="xs" color="gray.500">
//           Total Messages: {temp}
//         </Text>
//       </Flex>
//       <Box
//         minHeight="80vh"
//         mb="100px"
//         display="flex"
//         flexDirection="column"
//         alignItems="flex-start"
//       >
//         {loading ? (
//           <VStack
//             divider={<StackDivider borderColor="gray.200" />}
//             spacing={4}
//             align="stretch"
//           >
//             {[...Array(7)].map((_, index) => (
//               <Skeleton key={index} height="45px" />
//             ))}
//           </VStack>
//         ) : (
//           messages.map((msg, index) => (
//             <Text
//               key={index}
//               alignSelf={msg.type === "user" ? "flex-end" : "flex-start"} // Align user messages to the right and bot messages to the left
//               bg={msg.type === "user" ? "blue.100" : "gray.100"}
//               p={2}
//               borderRadius="md"
//               width="fit-content"
//               mb={2}
//               textAlign="left" // Align text to the left
//             >
//               {msg.text}
//             </Text>
//           ))
//         )}
//         <div ref={messagesEndRef} /> {/* Div to scroll to */}
//       </Box>
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           position: "fixed",
//           bottom: "0",
//           left: "0",
//           right: "0",
//           padding: "10px",
//           background: "white",
//         }}
//       >
//         <Flex>
//           <Input
//             type="text"
//             placeholder="Enter Your Prompt"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             mr={2}
//           />
//           <Button type="submit" colorScheme="blue">
//             Submit
//           </Button>
//         </Flex>
//       </form>
//     </Box>
//   );
// };

// export default Homepage;





















// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import {
//   Box,
//   Skeleton,
//   StackDivider,
//   VStack,
//   Input,
//   Button,
//   Text,
//   Flex,
//   useColorMode,
// } from "@chakra-ui/react";

// const Homepage = () => {
//   const [messages, setMessages] = useState([]); // Array to store message history
//   const [inputValue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [temp, setTemp] = useState(0); // Counter for the number of messages
//   const messagesEndRef = useRef(null); // Reference for scrolling

//   const { colorMode, toggleColorMode } = useColorMode(); // For handling dark mode

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post("/", { prompt: inputValue });
//       console.log("API Response:", res.data);

//       // Add new message to the message history
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: inputValue, type: "user" }, // User input
//         { text: res.data.message, type: "bot" }, // AI response
//       ]);

//       // Increment the temp counter
//       setTemp((prevTemp) => prevTemp + 1);
//       setInputValue(""); // Clear input after submission
//     } catch (error) {
//       console.log("Error Fetching data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Scroll to the bottom whenever messages change
//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   return (
//     <Box className="container" style={{ marginTop: "50px", paddingBottom: "100px" }}>
//       <Flex justifyContent="space-between" alignItems="center" mb={2}>
//         <Text fontSize="xs" color="gray.500">Total Messages: {temp}</Text>
//         <Button onClick={toggleColorMode} size="sm" variant="outline">
//           {colorMode === "light" ? "Switch to Dark" : "Switch to Light"}
//         </Button>
//       </Flex>
//       <Box minHeight="80vh" mb="100px" display="flex" flexDirection="column" alignItems="flex-start">
//         {loading ? (
//           <VStack
//             divider={<StackDivider borderColor="gray.200" />}
//             spacing={4}
//             align="stretch"
//           >
//             {[...Array(7)].map((_, index) => (
//               <Skeleton key={index} height="45px" />
//             ))}
//           </VStack>
//         ) : (
//           messages.map((msg, index) => (
//             <Text
//               key={index}
//               alignSelf={msg.type === "user" ? "flex-end" : "flex-start"} // Align user messages to the right and bot messages to the left
//               bg={msg.type === "user" ? "blue.100" : "gray.100"}
//               p={2}
//               borderRadius="md"
//               width="fit-content"
//               mb={2}
//               textAlign="left" // Align text to the left
//             >
//               {msg.text}
//             </Text>
//           ))
//         )}
//         <div ref={messagesEndRef} /> {/* Div to scroll to */}
//       </Box>
//       <form onSubmit={handleSubmit} style={{ position: "fixed", bottom: "0", left: "0", right: "0", padding: "10px", background: "white" }}>
//         <Flex>
//           <Input
//             type="text"
//             placeholder="Enter Your Prompt"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             mr={2}
//           />
//           <Button type="submit" colorScheme="blue">
//             Submit
//           </Button>
//         </Flex>
//       </form>
//     </Box>
//   );
// };

// export default Homepage;

























import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Box,
  Skeleton,
  StackDivider,
  VStack,
  Input,
  Button,
  Text,
  Flex,
  useColorMode,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";

// Create a custom theme with dark mode as the default
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.800", // Background color for dark theme
        color: "white", // Text color for dark theme
      },
    },
  },
});

const Homepage = () => {
  const [messages, setMessages] = useState([]); // Array to store message history
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [temp, setTemp] = useState(0); // Counter for the number of messages
  const messagesEndRef = useRef(null); // Reference for scrolling

  const { toggleColorMode } = useColorMode(); // For handling dark mode

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/", { prompt: inputValue });
      console.log("API Response:", res.data);

      // Add new message to the message history
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, type: "user" }, // User input
        { text: res.data.message, type: "bot" }, // AI response
      ]);

      // Increment the temp counter
      setTemp((prevTemp) => prevTemp + 1);
      setInputValue(""); // Clear input after submission
    } catch (error) {
      console.log("Error Fetching data");
    } finally {
      setLoading(false);
    }
  };

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <ChakraProvider theme={theme}>
      <Box
        className="container"
        style={{ marginTop: "50px", paddingBottom: "100px" }}
      >
        <Flex justifyContent="space-between" alignItems="center" mb={2}>
          <Text fontSize="xs" color="gray.400">
            Total Messages: {temp}
          </Text>
          <Button onClick={toggleColorMode} size="sm" variant="outline">
            Toggle Theme
          </Button>
        </Flex>
        <Box
          // minHeight="80vh"
          mb="100px"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          {loading ? (
            <VStack
              divider={<StackDivider borderColor="gray.700" />}
              spacing={4}
              align="stretch"
            >
              {[...Array(7)].map((_, index) => (
                <Skeleton key={index} height="45px" />
              ))}
            </VStack>
          ) : (
            messages.map((msg, index) => (
              <Text
                key={index}
                alignSelf={msg.type === "user" ? "flex-end" : "flex-start"} // Align user messages to the right and bot messages to the left
                bg={msg.type === "user" ? "blue.600" : "gray.700"} // Adjusted colors for dark theme
                p={2}
                borderRadius="md"
                width="fit-content"
                mb={2}
                textAlign="left" // Align text to the left
              >
                {msg.text}
              </Text>
            ))
          )}
          <div ref={messagesEndRef} /> {/* Div to scroll to */}
        </Box>
        <form
          onSubmit={handleSubmit}
          style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            right: "0",
            padding: "10px",
            background: "gray.800",
          }}
        >
          <Flex>
            <Input
              type="text"
              placeholder="Enter Your Prompt"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              mr={2}
              variant="filled"
              bg="gray.700"
              color="white"
            />
            <Button type="submit" colorScheme="blue">
              Submit
            </Button>
          </Flex>
        </form>
      </Box>
    </ChakraProvider>
  );
};

export default Homepage;